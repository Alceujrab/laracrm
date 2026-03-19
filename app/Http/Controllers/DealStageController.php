<?php

namespace App\Http\Controllers;

use App\Models\DealStage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DealStageController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'nullable|string|max:20',
        ]);

        $maxOrder = DealStage::max('order') ?? 0;
        
        $stage = DealStage::create([
            'name' => $validated['name'],
            'color' => $validated['color'] ?? '#6B7280',
            'order' => $maxOrder + 1,
        ]);

        return back()->with('success', 'Estágio criado com sucesso.');
    }

    public function update(Request $request, DealStage $stage)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'nullable|string|max:20',
        ]);

        $stage->update($validated);

        return back()->with('success', 'Estágio atualizado.');
    }

    public function destroy(DealStage $stage)
    {
        if ($stage->deals()->count() > 0) {
            return back()->withErrors(['message' => 'Não é possível excluir um estágio que possui negociações.']);
        }

        $stage->delete();

        return back()->with('success', 'Estágio removido.');
    }

    public function reorder(Request $request)
    {
        $validated = $request->validate([
            'stages' => 'required|array',
            'stages.*.id' => 'required|exists:deal_stages,id',
            'stages.*.order' => 'required|integer',
        ]);

        DB::transaction(function () use ($validated) {
            foreach ($validated['stages'] as $item) {
                DealStage::where('id', $item['id'])->update(['order' => $item['order']]);
            }
        });

        return back()->with('success', 'Ordem dos estágios atualizada.');
    }
}
