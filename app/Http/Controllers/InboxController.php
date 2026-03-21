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
            'channels' => \App\Models\Channel::all()
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
            'content' => 'nullable|string',
            'type' => 'nullable|string|in:text,internal_note,image,document,audio,video',
            'file' => 'nullable|file|max:20480'
        ]);

        $type = $request->type ?? 'text';
        $content = $request->content ?? '';
        $attachmentUrl = null;
        $base64 = null;
        $fileName = '';

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('messages', 'public');
            $attachmentUrl = '/storage/' . $path;
            
            $mime = $file->getMimeType();
            if (str_starts_with($mime, 'image/')) $type = 'image';
            elseif (str_starts_with($mime, 'audio/') || str_starts_with($mime, 'video/webm') || str_starts_with($mime, 'video/mp4')) {
                // MediaRecorder default to video/webm even for audio in some webkits, we force audio if its voice
                $type = $request->type === 'audio' ? 'audio' : 'video';
            } else $type = 'document';

            // evolution needs raw base64 with data uri header depending on version. We'll use data URI format to be safe.
            $base64Data = base64_encode(file_get_contents($file->getRealPath()));
            $base64 = "data:{$mime};base64,{$base64Data}";
            $fileName = $file->getClientOriginalName();
        }

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
                    if ($request->hasFile('file') && $base64) {
                        if ($type === 'audio') {
                            $evolutionApi->sendAudio($apiUrl, $apiKey, $instanceName, $contact->phone, $base64);
                        } else {
                            $evolutionApi->sendMedia($apiUrl, $apiKey, $instanceName, $contact->phone, $base64, $type, $fileName, $content);
                        }
                    } else if (!empty($content)) {
                        $evolutionApi->sendText($apiUrl, $apiKey, $instanceName, $contact->phone, $content);
                    }
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
            'content' => $content,
            'type' => $type,
            'attachment_url' => $attachmentUrl
        ]);

        $conversation->update(['last_message_at' => now()]);

        broadcast(new \App\Events\NewMessageReceived($message))->toOthers();

        return response()->json($message);
    }
    
    public function sendVehicleMedia(Request $request, Conversation $conversation, \App\Services\EvolutionApiService $evolutionApi)
    {
        $request->validate([
            'caption' => 'nullable|string',
            'images'  => 'required|array'
        ]);

        $channel = $conversation->channel;
        $contact = $conversation->contact;

        if (!$channel || !$contact) {
            return response()->json(['error' => 'Conversa sem canal ou contato válido'], 400);
        }

        $credentials = $channel->credentials ?? [];
        $apiUrl      = $credentials['evolution_url'] ?? null;
        $apiKey      = $credentials['api_key'] ?? null;
        $instanceName = $channel->identifier;

        $images    = $request->images;
        $caption   = $request->caption ?? '';
        $maxPhotos = min(count($images), 5);

        for ($i = 0; $i < $maxPhotos; $i++) {
            $img      = $images[$i];
            // Use the original public S3 URL directly – no local download needed
            $mediaUrl = str_starts_with($img, 'http') ? $img : url('/storage/' . $img);

            $curCaption = ($i === 0) ? $caption : '';
            $fileName   = "vehicle_" . ($i + 1) . ".jpg";

            try {
                if ($apiUrl && $apiKey && $instanceName) {
                    // sendMediaUrl passes the URL to Evolution API which fetches it directly
                    $evolutionApi->sendMediaUrl($apiUrl, $apiKey, $instanceName, $contact->phone, $mediaUrl, 'image', $fileName, $curCaption);
                }

                $message = \App\Models\Message::create([
                    'conversation_id' => $conversation->id,
                    'sender_type'     => 'user',
                    'sender_id'       => auth()->id(),
                    'content'         => $curCaption,
                    'type'            => 'image',
                    'attachment_url'  => $mediaUrl,
                ]);

                broadcast(new \App\Events\NewMessageReceived($message))->toOthers();

            } catch (\Exception $e) {
                \Illuminate\Support\Facades\Log::error("Vehicle media send failed ($mediaUrl): " . $e->getMessage());
            }
        }

        $conversation->update(['last_message_at' => now()]);

        return response()->json(['success' => true]);
    }
    
    public function assign(Request $request, Conversation $conversation, \App\Services\EvolutionApiService $evolutionApi)
    {
        $request->validate(['user_id' => 'nullable|exists:users,id']);
        
        $oldUser = $conversation->assigned_to;
        $conversation->update(['assigned_to' => $request->user_id]);
        
        // Se mudou pra um consultor de fato e ele não estava sendo atendido por essa mesma pessoa
        if ($request->user_id && $oldUser != $request->user_id) {
            $user = \App\Models\User::find($request->user_id);
            $firstName = explode(' ', trim($user->name))[0];
            
            $msgText = "🤝 Olá! Meu nome é *{$firstName}* e darei continuidade ao seu atendimento a partir de agora.\n\nComo posso te ajudar hoje?";
            
            $contact = $conversation->contact;
            $channel = $conversation->channel;
            
            if ($contact && $channel) {
                try {
                    $evolutionApi->sendText(
                        $channel->credentials['evolution_url'] ?? '',
                        $channel->credentials['api_key'] ?? '',
                        $channel->identifier,
                        $contact->phone,
                        $msgText
                    );
                    
                    $message = \App\Models\Message::create([
                        'conversation_id' => $conversation->id,
                        'sender_type' => 'user',
                        'sender_id' => $user->id,
                        'content' => $msgText,
                        'type' => 'text'
                    ]);
                    
                    broadcast(new \App\Events\NewMessageReceived($message))->toOthers();
                } catch (\Exception $e) {
                    // silent fail se der erro na Evolution
                }
            }
        }
        
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
