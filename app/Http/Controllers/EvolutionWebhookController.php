<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Channel;
use App\Models\Contact;
use App\Models\Conversation;
use App\Models\Message;
use App\Jobs\ProcessAiReplyJob;

class EvolutionWebhookController extends Controller
{
    public function handle(Request $request)
    {
        $payload = $request->all();
        $event = $payload['event'] ?? 'unknown';

        Log::debug("Evolution Webhook: {$event}");

        // Somente mensagens novas (upsert)
        if ($event !== 'messages.upsert') {
            return response()->json(['status' => 'ignored']);
        }

        $instanceName = $payload['instance'] ?? null;
        if (!$instanceName) {
            return response()->json(['error' => 'No instance found'], 400);
        }

        // Recupera o Canal usando o identifier de instância
        $channel = Channel::firstOrCreate(
            ['identifier' => $instanceName],
            ['name' => 'Instância ' . $instanceName, 'type' => 'whatsapp', 'status' => 'connected']
        );

        $messageData = $payload['data']['message'] ?? null;
        if (!$messageData) {
            return response()->json(['status' => 'no_message']);
        }

        // Verifica quem enviou
        $fromMe = $messageData['key']['fromMe'] ?? false;
        $senderType = $fromMe ? 'user' : 'contact';

        // Ignorar Status ou Grupos
        $remoteJid = $messageData['key']['remoteJid'] ?? '';
        if (str_contains($remoteJid, '@g.us') || str_contains($remoteJid, 'status@broadcast')) {
            return response()->json(['status' => 'ignored_group_or_status']);
        }

        // Extrai telefone (JID) e Nome
        $phoneNumber = explode('@', $remoteJid)[0];
        $pushName = $messageData['pushName'] ?? $phoneNumber;
        $messageContent = $this->extractTextFromEvolutionMessage($messageData['message'] ?? []);

        if (empty($messageContent)) {
            Log::warning("Evolution Webhook: Mensagem vazia ou tipo não suportado.");
            return response()->json(['status' => 'empty_or_unsupported']);
        }

        // 1. Encontra ou cria o Contato usando o telefone da Evolution
        $contact = Contact::firstOrCreate(
            ['phone' => $phoneNumber],
            ['name' => $pushName]
        );

        // Atualiza nome do contato se não tinha nome
        if ($contact->name === $phoneNumber && $pushName !== $phoneNumber) {
            $contact->update(['name' => $pushName]);
        }

        // 2. Encontra ou cria a Conversa (Ticket) Ativa
        $conversation = Conversation::firstOrCreate(
            ['channel_id' => $channel->id, 'contact_id' => $contact->id],
            ['status' => 'open', 'last_message_at' => now()]
        );
        $conversation->update(['last_message_at' => now()]);

        // 3. Salva a Mensagem no CRM
        $message = Message::create([
            'conversation_id' => $conversation->id,
            'sender_type' => $senderType,
            'sender_id' => $fromMe ? null : $contact->id,
            'content' => $messageContent,
            'type' => 'text'
        ]);

        // 4. Inteligência Artificial: Responde se for nova mensagem DO CLIENTE e o ticket não tem humano
        if (!$fromMe && $conversation->status === 'open' && is_null($conversation->assigned_to)) {
            Log::info("Despachando IA para responder a conversa {$conversation->id}");
            ProcessAiReplyJob::dispatch($conversation, $message);
        }

        return response()->json(['status' => 'success_received']);
    }

    private function extractTextFromEvolutionMessage(array $msgContent)
    {
        if (isset($msgContent['conversation'])) {
            return $msgContent['conversation'];
        }
        if (isset($msgContent['extendedTextMessage']['text'])) {
            return $msgContent['extendedTextMessage']['text'];
        }
        return '';
    }
}
