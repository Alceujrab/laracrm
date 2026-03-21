<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Inertia\Inertia;

class ProposalController extends Controller
{
    public function index()
    {
        return Inertia::render('Proposals/Index', [
            'proposals' => Proposal::with(['contact', 'vehicle', 'user'])->latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'contact_id' => 'required|exists:contacts,id',
            'vehicle_id' => 'nullable|exists:vehicles,id',
            'deal_id' => 'nullable|exists:deals,id',
            'title' => 'required|string',
            'total_value' => 'required|numeric',
            'items' => 'nullable|array',
            'valid_until' => 'nullable|date',
            'notes' => 'nullable|string',
        ]);

        $proposal = Proposal::create([
            'user_id' => auth()->id(),
            'contact_id' => $validated['contact_id'],
            'vehicle_id' => $validated['vehicle_id'] ?? null,
            'deal_id' => $validated['deal_id'] ?? null,
            'title' => $validated['title'],
            'total_value' => $validated['total_value'],
            'items' => $validated['items'] ?? [],
            'valid_until' => $validated['valid_until'] ?? null,
            'notes' => $validated['notes'] ?? null,
            'status' => 'pending'
        ]);

        return response()->json($proposal);
    }

    public function downloadPdf(Proposal $proposal)
    {
        $proposal->load(['contact', 'vehicle', 'user']);
        $pdf = Pdf::loadView('pdf.proposal', compact('proposal'));
        return $pdf->download("proposta_{$proposal->id}.pdf");
    }
}
