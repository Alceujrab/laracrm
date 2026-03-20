<?php

namespace App\Http\Controllers;

use App\Models\Automation;
use Illuminate\Http\Request;

class AutomationController extends Controller
{
    public function index()
    {
        return response()->json(Automation::orderBy('priority', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'trigger_type' => 'required|string',
            'trigger_conditions' => 'nullable|array',
            'action_type' => 'required|string',
            'action_payload' => 'nullable|array',
            'is_active' => 'boolean',
            'priority' => 'integer'
        ]);

        $automation = Automation::create($validated);
        return response()->json($automation, 201);
    }

    public function update(Request $request, Automation $automation)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'trigger_type' => 'sometimes|required|string',
            'trigger_conditions' => 'nullable|array',
            'action_type' => 'sometimes|required|string',
            'action_payload' => 'nullable|array',
            'is_active' => 'boolean',
            'priority' => 'integer'
        ]);

        $automation->update($validated);
        return response()->json($automation);
    }

    public function toggle(Automation $automation)
    {
        $automation->update(['is_active' => !$automation->is_active]);
        return response()->json($automation);
    }

    public function destroy(Automation $automation)
    {
        $automation->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
