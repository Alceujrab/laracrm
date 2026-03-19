<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Conversation;

class InboxController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Inbox/Index', [
            'conversations' => $this->getConversations()
        ]);
    }

    public function refresh()
    {
        return response()->json($this->getConversations());
    }

    private function getConversations()
    {
        return Conversation::with(['contact', 'channel', 'messages' => function($q) {
            $q->orderBy('created_at', 'asc');
        }])->orderBy('last_message_at', 'desc')->get();
    }

    public function sendMessage(Request $request, Conversation $conversation, \App\Services\EvolutionApiService $evolutionApi)
    {
        $request->validate([
            'content' => 'required|string'
        ]);

        $channel = $conversation->channel;
        $contact = $conversation->contact;

        if (!$channel || !$contact) {
            return response()->json(['error' => 'Conversa sem canal ou contato válido'], 400);
        }

        // Credentials Evolution
        $credentials = $channel->credentials ?? [];
        $apiUrl = $credentials['evolution_url'] ?? null;
        $apiKey = $credentials['api_key'] ?? null;
        $instanceName = $channel->identifier;

        // Tentar enviar via Evolution
        if ($apiUrl && $apiKey && $instanceName) {
            $response = $evolutionApi->sendText($apiUrl, $apiKey, $instanceName, $contact->phone, $request->content);
        }

        // Registrar no BD da nossa Inbox
        $message = \App\Models\Message::create([
            'conversation_id' => $conversation->id,
            'sender_type' => 'user',
            'sender_id' => auth()->id(),
            'content' => $request->content,
            'type' => 'text'
        ]);

        $conversation->update(['last_message_at' => now()]);

        return response()->json($message);
    }
}
