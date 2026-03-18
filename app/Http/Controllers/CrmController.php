<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\DealStage;
use App\Models\Vehicle;

use App\Models\Deal;

class CrmController extends Controller
{
    public function index()
    {
        $stages = DealStage::orderBy('order')->with(['deals.contact', 'deals.vehicle', 'deals.assignee'])->get();
        $vehicles = Vehicle::all();

        return Inertia::render('CRM/Index', [
            'stages' => $stages,
            'vehicles' => $vehicles
        ]);
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
