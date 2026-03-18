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
        // Removed: $vehicles = Vehicle::all();

        return Inertia::render('CRM/Index', [
            'stages' => $stages,
            // Removed: 'vehicles' => $vehicles
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
}
