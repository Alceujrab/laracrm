<?php

namespace App\Http\Controllers;

use App\Models\KnowledgeItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KnowledgeItemController extends Controller
{
    public function index()
    {
        return Inertia::render('Settings/Knowledge', [
            'knowledgeItems' => KnowledgeItem::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
            'keywords' => 'nullable|string'
        ]);

        KnowledgeItem::create($validated);

        return redirect()->back()->with('success', 'Item de conhecimento adicionado!');
    }

    public function destroy($id)
    {
        $item = KnowledgeItem::findOrFail($id);
        $item->delete();

        return redirect()->back()->with('success', 'Item excluído!');
    }
}
