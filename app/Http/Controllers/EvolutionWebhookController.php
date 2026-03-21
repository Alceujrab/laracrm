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
        // Alterado de firstOrCreate para firstOrNew para evitar forçar tipo 'whatsapp' em instâncias existentes
        $channel = Channel::where('identifier', $instanceName)->first();
        if (!$channel) {
            $channel = Channel::create([
                'identifier' => $instanceName,
                'name' => 'Instância ' . $instanceName,
                'type' => 'whatsapp', // Default para novas, mas o usuário deve configurar
                'status' => 'connected'
            ]);
        }

        $dataNode = $payload['data'] ?? [];
        if (empty($dataNode)) {
            return response()->json(['status' => 'no_data']);
        }

        $keyNode = $dataNode['key'] ?? [];
        $messageObject = $dataNode['message'] ?? [];
        $pushName = $dataNode['pushName'] ?? '';

        // Verifica quem enviou
        $fromMe = $keyNode['fromMe'] ?? false;
        $senderType = $fromMe ? 'user' : 'contact';

        // Ignorar Status ou Grupos
        $remoteJid = $keyNode['remoteJid'] ?? '';
        if (str_contains($remoteJid, '@g.us') || str_contains($remoteJid, 'status@broadcast')) {
            return response()->json(['status' => 'ignored_group_or_status']);
        }

        // Extrai telefone ou ID do Instagram/Messenger
        $jidParts = explode('@', $remoteJid);
        $phoneNumber = $jidParts[0];
        
        if (empty($pushName)) $pushName = $phoneNumber;
        
        // Extração robusta de texto (suporta WA, Instagram e Messenger)
        $messageContent = $this->extractTextFromEvolutionMessage($messageObject);

        if (empty($messageContent)) {
            Log::warning("Evolution Webhook: Mensagem vazia ou tipo não suportado.");
            return response()->json(['status' => 'empty_or_unsupported']);
        }

        // 1. Encontra ou cria o Contato
        $contact = Contact::firstOrCreate(
            ['phone' => $phoneNumber],
            ['name' => $pushName]
        );

        // Atualiza nome do contato se não tinha nome real
        if (($contact->name === $phoneNumber || empty($contact->name)) && $pushName !== $phoneNumber) {
            $contact->update(['name' => $pushName]);
        }

        // 2. Encontra ou cria a Conversa (Ticket) Ativa
        $conversation = Conversation::firstOrNew(
            ['channel_id' => $channel->id, 'contact_id' => $contact->id],
            ['status' => 'open', 'last_message_at' => now()]
        );
        $isNewChat = !$conversation->exists;
        
        // Se a conversa já existia mas estava fechada/resolvida, reabre ela
        if ($conversation->exists && ($conversation->status === 'closed' || $conversation->status === 'resolved')) {
            $conversation->status = 'open';
            $conversation->assigned_to = null;
            $isNewChat = true;
        }
        
        $conversation->last_message_at = now();
        $conversation->save();

        if ($isNewChat) {
            event(new \App\Events\TriggerAutomationEvent('new_chat', [
                'conversation_id' => $conversation->id,
                'channel_id' => $channel->id,
            ]));
        }

        // 3. Salva a Mensagem no CRM
        $message = Message::create([
            'conversation_id' => $conversation->id,
            'sender_type' => $senderType,
            'sender_id' => $fromMe ? null : $contact->id,
            'content' => $messageContent,
            'type' => 'text'
        ]);

        broadcast(new \App\Events\NewMessageReceived($message));

        event(new \App\Events\TriggerAutomationEvent('new_message', [
            'conversation_id' => $conversation->id,
            'message_id' => $message->id,
            'sender_type' => $senderType,
            'content' => $messageContent,
            'channel_id' => $channel->id,
        ]));

        // 4. Inteligência Artificial: Responde se for nova mensagem DO CLIENTE e sem atendente
        if (!$fromMe && $conversation->status === 'open' && is_null($conversation->assigned_to)) {
            ProcessAiReplyJob::dispatch($conversation, $message);
        }

        return response()->json(['status' => 'success_received']);
    }

    private function extractTextFromEvolutionMessage(array $msgContent)
    {
        // Padrão WhatsApp
        if (isset($msgContent['conversation'])) {
            return $msgContent['conversation'];
        }
        if (isset($msgContent['extendedTextMessage']['text'])) {
            return $msgContent['extendedTextMessage']['text'];
        }
        // Padrão Instagram / Messenger / Typeba
        if (isset($msgContent['text'])) {
            return $msgContent['text'];
        }
        // Fallback para conteúdo aninhado em sub-objetos comuns
        if (isset($msgContent['message']['conversation'])) {
            return $msgContent['message']['conversation'];
        }
        
        return '';
    }
}
