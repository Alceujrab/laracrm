<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\DealStage;
use App\Models\Vehicle;

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
}
