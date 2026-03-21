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
            $this->conversation->load('channel', 'contact');
            $channel = $this->conversation->channel;

            // Bloqueio de Inteligência (Robô não está habilitado para este WhatsApp)
            if (!$channel || !$channel->ai_enabled) {
                Log::info("Job IA abortado: O robô inteligente está desligado para o canal {$channel->name}.");
                return;
            }

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

            // 2. Buscar Conhecimento Adicional (FAQ)
            $knowledge = \App\Models\KnowledgeItem::where('is_active', true)->get();
            $knowledgeText = "BA SE DE CONHECIMENTO DISPONÍVEL:\n";
            foreach ($knowledge as $item) {
                $knowledgeText .= "- Pergunta/Tópico: {$item->question}\n  Resposta: {$item->answer}\n";
            }

            // 3. Buscar Estoque de Veículos (Top 15 disponíveis para contexto)
            $vehicles = \App\Models\Vehicle::where('status', 'available')
                            ->orderBy('updated_at', 'desc')
                            ->take(15)
                            ->get();
            $stockText = "ESTOQUE DE VEÍCULOS NO MOMENTO:\n";
            foreach ($vehicles as $v) {
                $price = $v->price ? "R$ " . number_format($v->price, 2, ',', '.') : "Sob consulta";
                $stockText .= "- {$v->make} {$v->model} {$v->year} | Preço: {$price} | KM: " . number_format($v->km, 0, ',', '.') . "\n";
            }

            $userPrompt = "CONTEXTO DO NEGÓCIO:\n" . $knowledgeText . "\n" . $stockText . "\n" .
                          "HISTÓRICO DA CONVERSA:\n" . $contextText . 
                          "\nINSTRUÇÃO: Baseado no contexto do negócio e nas informações de estoque acima, responda ao cliente de forma natural, consultiva e educada. Se não souber a resposta ou se o cliente quiser falar com um humano, diga que vai chamar um atendente.";

            // Injeta o Horário Local do Servidor Invisivelmente
            $currentTimeContext = "[MENSAGEM DE SISTEMA: A hora atual exata é " . now()->format('H:i') . 
                                  " do dia " . now()->format('d/m/Y') . " (" . now()->locale('pt_BR')->translatedFormat('l') . ")." . 
                                  " Use esta informação para guiar suas decisões.]\n\n";

            // Instruções Dinâmicas do Canal
            $systemInstructions = $currentTimeContext . ($channel->ai_prompt ?? "Você é um consultor de vendas automotivas atencioso. Use o conhecimento fornecido para ajudar o cliente.");

            // 2. Chamar a IA (Laravel AI 0.3x)
            $agent = AnonymousAgent::make($systemInstructions, [], []);
            
            Log::info("Enviando prompt para Laravel AI do canal {$channel->name} (Conversa {$this->conversation->id})");
            
            $aiResponse = $agent->prompt($userPrompt);
            $replyText = $aiResponse->text;

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
