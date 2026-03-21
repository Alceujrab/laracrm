<?php

namespace App\Http\Controllers;

use App\Models\Automation;
use App\Models\User;
use App\Models\DealStage;
use Illuminate\Http\Request;

class AutomationController extends Controller
{
    public function index()
    {
        $automations = Automation::orderBy('priority', 'desc')->get();

        // Load support data for frontend dropdowns
        $users  = User::select('id', 'name')->orderBy('name')->get();
        $stages = DealStage::select('id', 'name', 'color')->orderBy('order')->get();

        // Groups may not exist – soft-check
        $groups = [];
        if (class_exists(\App\Models\Group::class)) {
            $groups = \App\Models\Group::select('id', 'name')->orderBy('name')->get();
        }

        return response()->json([
            'automations' => $automations,
            'users'       => $users,
            'groups'      => $groups,
            'stages'      => $stages,
        ]);
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
