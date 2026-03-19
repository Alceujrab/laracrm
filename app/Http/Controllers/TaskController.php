<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Deal;

use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $userId = auth()->id();
        
        $tasks = Task::where('assigned_to', $userId)
            ->with(['deal', 'contact'])
            ->orderByRaw('is_completed ASC') // Incompletas primeiro
            ->orderBy('due_date', 'asc')
            ->get();

        $deals = Deal::where('status', 'open')->orderBy('title')->get();
        $contacts = \App\Models\Contact::orderBy('name')->get();

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks,
            'deals' => $deals,
            'contacts' => $contacts
        ]);
    }

    public function storeGlobal(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'due_date' => 'nullable|date',
            'deal_id' => 'nullable|exists:deals,id',
            'contact_id' => 'nullable|exists:contacts,id',
        ]);

        $validated['assigned_to'] = auth()->id();
        $validated['is_completed'] = false;

        Task::create($validated);

        return redirect()->back()->with('success', 'Tarefa criada com sucesso!');
    }

    public function store(Request $request, Deal $deal)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'due_date' => 'nullable|date',
        ]);

        $task = $deal->tasks()->create([
            'title' => $request->title,
            'due_date' => $request->due_date,
            'is_completed' => false,
        ]);

        return response()->json($task, 201);
    }

    public function toggle(Request $request, Task $task)
    {
        $task->update([
            'is_completed' => !$task->is_completed
        ]);

        // Retornar back() de modo tradicional para permitir reload nas páginas globais se for chamado por elas
        // Porem, se a requisição for JSON, mantemos a resposta JSON (como é no widget do CRM)
        if ($request->wantsJson()) {
            return response()->json($task);
        }

        return redirect()->back()->with('success', 'Status da tarefa atualizado!');
    }

    public function destroy(Request $request, Task $task)
    {
        $task->delete();
        
        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }
        
        return redirect()->back()->with('success', 'Tarefa removida.');
    }
}
