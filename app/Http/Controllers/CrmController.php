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

        return Inertia::render('CRM/Index', [
            'stages' => $stages,
            'vehicles' => $vehicles,
            'filters' => $request->only(['search'])
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'value' => 'nullable|numeric|min:0',
            'deal_stage_id' => 'required|exists:deal_stages,id',
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

        $deal->update([
            'deal_stage_id' => $request->deal_stage_id
        ]);

        return redirect()->back()->with('success', 'Negociação movida com sucesso!');
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
