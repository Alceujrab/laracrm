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
            'conversations' => $this->getConversations(),
            'users' => \App\Models\User::orderBy('name')->get(),
            'deals' => \App\Models\Deal::where('status', 'open')->orderBy('title')->get(),
            'contacts' => \App\Models\Contact::orderBy('name')->get(),
            'stages' => \App\Models\DealStage::orderBy('order')->get(),
            'vehicles' => \App\Models\Vehicle::where('status', 'available')->orderBy('make')->get(),
            'channels' => \App\Models\Channel::where('is_active', true)->get()
        ]);
    }

    public function refresh()
    {
        return response()->json($this->getConversations());
    }

    private function getConversations()
    {
        return Conversation::with(['contact', 'channel', 'assignee', 'messages' => function($q) {
            $q->orderBy('created_at', 'asc');
        }])->orderBy('last_message_at', 'desc')->get();
    }

    public function sendMessage(Request $request, Conversation $conversation, \App\Services\EvolutionApiService $evolutionApi)
    {
        $request->validate([
            'content' => 'required|string',
            'type' => 'nullable|string|in:text,internal_note'
        ]);

        $type = $request->type ?? 'text';

        // Se NÃO for nota interna, despachamos para a Evolution API (WhatsApp)
        if ($type !== 'internal_note') {
            $channel = $conversation->channel;
            $contact = $conversation->contact;

            if (!$channel || !$contact) {
                return response()->json(['error' => 'Conversa sem canal ou contato válido'], 400);
            }

            $credentials = $channel->credentials ?? [];
            $apiUrl = $credentials['evolution_url'] ?? null;
            $apiKey = $credentials['api_key'] ?? null;
            $instanceName = $channel->identifier;

            if ($apiUrl && $apiKey && $instanceName) {
                // Ignore failure if fake instance
                try {
                    $evolutionApi->sendText($apiUrl, $apiKey, $instanceName, $contact->phone, $request->content);
                } catch (\Exception $e) {
                    \Illuminate\Support\Facades\Log::error("Seding via evolution failed: " . $e->getMessage());
                }
            }
        }

        // Salva a mensagem no Banco
        $message = \App\Models\Message::create([
            'conversation_id' => $conversation->id,
            'sender_type' => 'user',
            'sender_id' => auth()->id(),
            'content' => $request->content,
            'type' => $type
        ]);

        $conversation->update(['last_message_at' => now()]);

        return response()->json($message);
    }
    
    public function assign(Request $request, Conversation $conversation)
    {
        $request->validate(['user_id' => 'nullable|exists:users,id']);
        $conversation->update(['assigned_to' => $request->user_id]);
        return response()->json(['success' => true]);
    }

    public function updateStatus(Request $request, Conversation $conversation)
    {
        $request->validate(['status' => 'required|in:open,resolved']);
        $conversation->update(['status' => $request->status]);
        return response()->json(['success' => true]);
    }

    public function updateTags(Request $request, \App\Models\Contact $contact)
    {
        $request->validate(['tags' => 'array']);
        $contact->update(['tags' => $request->tags]);
        return response()->json(['success' => true]);
    }

    public function storeConversation(Request $request)
    {
        $request->validate([
            'contact_id' => 'required|exists:contacts,id',
            'channel_id' => 'required|exists:channels,id'
        ]);

        $existing = Conversation::where('contact_id', $request->contact_id)
                    ->where('status', 'open')
                    ->first();

        if ($existing) {
            return response()->json($existing);
        }

        $conversation = Conversation::create([
            'channel_id' => $request->channel_id,
            'contact_id' => $request->contact_id,
            'status' => 'open',
            'last_message_at' => now()
        ]);

        return response()->json($conversation);
    }
}
