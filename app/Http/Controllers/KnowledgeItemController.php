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

    /**
     * Gera sugestões de perguntas e respostas usando IA
     */
    public function generateSuggestions()
    {
        try {
            $prompt = "Você é um especialista em vendas de carros e CRM. 
            Gere 5 pares de perguntas e respostas (JSON format) que são extremamente comuns em lojas de veículos.
            Exemplo de formato: [{\"question\": \"...\", \"answer\": \"...\"}, ...]
            Foque em: financiamento, garantia, troca de usados, horário e test-drive.";

            $agent = \Laravel\Ai\AnonymousAgent::make("Você gera sugestões de treinamento para chatbots de CRM automotivo.", [], []);
            $response = $agent->prompt($prompt);
            
            // Tenta extrair o JSON da resposta da IA
            $content = $response->text;
            preg_match('/\[.*\]/s', $content, $matches);
            $suggestions = isset($matches[0]) ? json_decode($matches[0], true) : [];

            return response()->json($suggestions);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Importa conhecimento de link ou arquivo
     */
    public function import(Request $request)
    {
        $request->validate([
            'type' => 'required|in:link,file',
            'url' => 'nullable|url',
            'file' => 'nullable|file|mimes:txt,xml,html'
        ]);

        $textToProcess = "";

        if ($request->type === 'link') {
            $response = \Illuminate\Support\Facades\Http::get($request->url);
            $textToProcess = strip_tags($response->body());
        } elseif ($request->hasFile('file')) {
            $textToProcess = file_get_contents($request->file('file')->getRealPath());
            if ($request->file('file')->getClientOriginalExtension() === 'xml') {
                $textToProcess = strip_tags($textToProcess); // Limpeza bruta
            }
        }

        if (empty(trim($textToProcess))) {
            return redirect()->back()->with('error', 'Não foi possível extrair texto da fonte.');
        }

        // Usa IA para resumir o texto em itens de conhecimento
        try {
            $agent = \Laravel\Ai\AnonymousAgent::make("Você é um extrator de conhecimento. Transforme o texto bruto em 3 a 5 itens de FAQ (Pergunta e Resposta).", [], []);
            $aiResponse = $agent->prompt("Transforme este texto em itens de FAQ (formato JSON [{\"question\": \"\", \"answer\": \"\"}]):\n\n" . substr($textToProcess, 0, 4000));
            
            preg_match('/\[.*\]/s', $aiResponse->text, $matches);
            $items = isset($matches[0]) ? json_decode($matches[0], true) : [];

            foreach ($items as $item) {
                KnowledgeItem::create([
                    'question' => $item['question'],
                    'answer' => $item['answer'],
                    'is_active' => true
                ]);
            }

            return redirect()->back()->with('success', 'Importação concluída com sucesso!');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Falha ao processar texto com IA: ' . $e->getMessage());
        }
    }

    public function destroy($id)
    {
        $item = KnowledgeItem::findOrFail($id);
        $item->delete();

        return redirect()->back()->with('success', 'Item excluído!');
    }
}
