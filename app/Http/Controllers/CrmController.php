<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\DealStage;
use App\Models\Vehicle;

use App\Models\Deal;

class CrmController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');

        $stages = DealStage::orderBy('order')->with(['deals' => function ($query) use ($search) {
            $query->with(['contact', 'vehicle', 'assignee']);
            
            if ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhereHas('contact', function ($cq) use ($search) {
                          $cq->where('name', 'like', "%{$search}%");
                      })
                      ->orWhereHas('vehicle', function ($vq) use ($search) {
                          $vq->where('make', 'like', "%{$search}%")
                            ->orWhere('model', 'like', "%{$search}%")
                            ->orWhere('plate', 'like', "%{$search}%");
                      });
                });
            }
        }])->get();

        $vehicles = Vehicle::all();
        $contacts = \App\Models\Contact::orderBy('name')->get();

        // Negócios encerrados (ganhos e perdidos) para a aba de Histórico
        $closedDeals = Deal::whereIn('status', ['won', 'lost'])
            ->with(['contact', 'vehicle', 'dealStage', 'assignee'])
            ->orderByDesc('updated_at')
            ->get()
            ->map(function($deal) {
                return [
                    'id'          => $deal->id,
                    'title'       => $deal->title,
                    'value'       => (float) ($deal->value ?? 0),
                    'status'      => $deal->status,
                    'contact'     => $deal->contact ? ['id' => $deal->contact->id, 'name' => $deal->contact->name] : null,
                    'vehicle'     => $deal->vehicle ? ['make' => $deal->vehicle->make, 'model' => $deal->vehicle->model] : null,
                    'stage'       => $deal->dealStage ? ['name' => $deal->dealStage->name] : null,
                    'assignee'    => $deal->assignee ? ['name' => $deal->assignee->name] : null,
                    'closed_at'   => $deal->updated_at?->toDateString(),
                    'created_at'  => $deal->created_at?->toDateString(),
                ];
            });

        // Aggregate stats
        $wonTotal  = $closedDeals->where('status', 'won')->sum('value');
        $lostTotal = $closedDeals->where('status', 'lost')->sum('value');
        $wonCount  = $closedDeals->where('status', 'won')->count();
        $lostCount = $closedDeals->where('status', 'lost')->count();

        return Inertia::render('CRM/Index', [
            'stages'       => $stages,
            'vehicles'     => $vehicles,
            'contacts'     => $contacts,
            'filters'      => $request->only(['search']),
            'closedDeals'  => $closedDeals,
            'closedStats'  => [
                'wonTotal'  => $wonTotal,
                'lostTotal' => $lostTotal,
                'wonCount'  => $wonCount,
                'lostCount' => $lostCount,
                'winRate'   => ($wonCount + $lostCount) > 0
                    ? round(($wonCount / ($wonCount + $lostCount)) * 100, 1)
                    : 0,
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'value' => 'nullable|numeric|min:0',
            'deal_stage_id' => 'required|exists:deal_stages,id',
            'contact_id' => 'required|exists:contacts,id',
            'status' => 'required|in:open,won,lost',
        ]);

        $validated['assigned_to'] = auth()->id();

        Deal::create($validated);

        return redirect()->back()->with('success', 'Negociação criada com sucesso!');
    }

    public function moveDeal(Request $request, Deal $deal)
    {
        $request->validate([
            'deal_stage_id' => 'required|exists:deal_stages,id'
        ]);

        $targetStage = DealStage::find($request->deal_stage_id);
        
        // Kanban Dynamic Rules Validation
        if ($targetStage && $targetStage->rules) {
            $rules = $targetStage->rules;
            
            // Rule 1: Require Phone
            if (isset($rules['require_phone']) && $rules['require_phone']) {
                $deal->load('contact');
                if (!$deal->contact || empty(trim($deal->contact->phone))) {
                    return back()->withErrors(['message' => 'Ação bloqueada: Este estágio exige que o contato possua um telefone cadastrado.']);
                }
            }
            
            // Rule 2: Require Tasks Completed
            if (isset($rules['require_tasks_completed']) && $rules['require_tasks_completed']) {
                if (method_exists($deal, 'tasks')) {
                    $deal->load('tasks');
                    $hasOpenTasks = $deal->tasks->where('status', 'pending')->count() > 0;
                    if ($hasOpenTasks) {
                        return back()->withErrors(['message' => 'Ação bloqueada: Resolva todas as tarefas pendentes antes de mover para este estágio.']);
                    }
                }
            }
        }

        $deal->update([
            'deal_stage_id' => $request->deal_stage_id
        ]);

        event(new \App\Events\TriggerAutomationEvent('stage_changed', [
            'deal_id' => $deal->id,
            'stage_id' => $request->deal_stage_id
        ]));

        return redirect()->back()->with('success', 'Negociação movida com sucesso!');
    }

    public function updateStatus(Request $request, Deal $deal)
    {
        $request->validate([
            'status' => 'required|in:open,won,lost'
        ]);

        $deal->update(['status' => $request->status]);

        // Fire automation trigger if deal was closed
        if (in_array($request->status, ['won', 'lost'])) {
            event(new \App\Events\TriggerAutomationEvent('deal_closed', [
                'deal_id' => $deal->id,
                'status'  => $request->status,
            ]));
        }

        return redirect()->back()->with('success', 'Negociação atualizada com sucesso!');
    }

    public function show(Deal $deal)
    {
        // Load deep relationships for the side panel Details View
        $deal->load(['contact', 'vehicle', 'dealStage', 'assignee']);
        
        // Also load tasks if the relation exists on Deal
        if (method_exists($deal, 'tasks')) {
            $deal->load('tasks');
        }

        return response()->json($deal);
    }
}
