<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Deal;

class TaskController extends Controller
{
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

    public function toggle(Task $task)
    {
        $task->update([
            'is_completed' => !$task->is_completed
        ]);

        return response()->json($task);
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json(['success' => true]);
    }
}
