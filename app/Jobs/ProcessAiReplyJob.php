<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\Channel;
use App\Services\EvolutionApiService;
use Laravel\Ai\AnonymousAgent;

class ProcessAiReplyJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $conversation;
    public $message;

    /**
     * Create a new job instance.
     */
    public function __construct(Conversation $conversation, Message $message)
    {
        $this->conversation = $conversation;
        $this->message = $message;
    }

    /**
     * Execute the job.
     */
    public function handle(EvolutionApiService $evolutionApi): void
    {
        try {
            // 1. Carregar o histórico da conversa (Últimas 10 mensagens)
            $history = $this->conversation->messages()
                            ->orderBy('created_at', 'asc')
                            ->take(10)
                            ->get();

            $contextText = "";
            foreach ($history as $msg) {
                $role = $msg->sender_type === 'contact' ? 'Cliente' : 'Você (Atendimento)';
                $contextText .= "{$role}: {$msg->content}\n";
            }

            $userPrompt = "Aqui está o histórico das últimas mensagens com o cliente (incluindo a última recebida agora):\n\n" . 
                          $contextText . 
                          "\nBaseado neste histórico, crie a próxima resposta para o cliente.";

            $systemInstructions = "Você é um assistente de vendas de alto nível de uma concessionária de veículos de luxo. Seu objetivo é engajar o lead, entender o que ele procura (qualificação) e conduzi-lo de forma natural a pedir uma simulação, proposta ou visita à loja. Seja humano, evite respostas engessadas ou robóticas, e NUNCA fale que você é uma IA. Suas respostas devem ser enviadas no WhatsApp, portanto use formatações como *negrito*, evite textões longos e use emojis com parcimônia.";

            // 2. Chamar a IA (Laravel AI 0.3x)
            // Utilizando o AnonymousAgent para enviar a instrução de sistema global + histórico atual
            $agent = AnonymousAgent::make($systemInstructions, [], []);
            
            Log::info("Enviando prompt para Agentable (Laravel AI) da conversa {$this->conversation->id}...");
            
            $aiResponse = $agent->prompt($userPrompt);
            $replyText = $aiResponse->text();

            if (empty(trim($replyText))) {
                throw new \Exception("A IA retornou uma resposta vazia.");
            }

            // 3. Salvar a resposta no Banco
            Message::create([
                'conversation_id' => $this->conversation->id,
                'sender_type' => 'system', // Bot
                'sender_id' => null,
                'content' => $replyText,
                'type' => 'text'
            ]);

            // Atualiza a ultima mensagem da conversa
            $this->conversation->update(['last_message_at' => now()]);

            // 4. Disparar via Evolution API
            $this->conversation->load('channel', 'contact');
            
            $channel = $this->conversation->channel;
            $instanceName = $channel->identifier;
            $phoneNumber = $this->conversation->contact->phone;

            $credentials = $channel->credentials ?? [];
            $apiUrl = $credentials['evolution_url'] ?? null;
            $apiKey = $credentials['api_key'] ?? null;

            if ($instanceName && $phoneNumber && $apiUrl && $apiKey) {
                Log::info("Disparando envio Evolution API de {$instanceName} para {$phoneNumber}");
                $evolutionApi->sendText($apiUrl, $apiKey, $instanceName, $phoneNumber, $replyText);
            } else {
                Log::warning("Não foi possível enviar a mensagem para Evolution: Canal, URL, API Key ou Phone ausente.");
            }

        } catch (\Exception $e) {
            Log::error("Falha no ProcessAiReplyJob: " . $e->getMessage());
        }
    }
}
