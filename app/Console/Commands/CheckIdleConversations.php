<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Conversation;
use App\Events\OperatorIdleWarningEvent;

class CheckIdleConversations extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'crm:check-idle';

    /**
     * The console command description.
     */
    protected $description = 'Checa conversas atribuídas aos operadores que estão aguardando resposta do humano (ocioso) e dispara aviso.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // 1. Busca tickets ABERTOS, com DONO, onde a ÚLTIMA MENSAGEM FOI O CLIENTE
        // 2. O tempo da última mensagem está entre 4 e 5 minutos atrás (para não disparar repetidas vezes a cada minuto posterior).
        $thresholdStart = now()->subMinutes(5);
        $thresholdEnd = now()->subMinutes(4);

        $idleConversations = Conversation::with(['contact', 'assignedUser'])
            ->where('status', 'open')
            ->whereNotNull('assigned_to') // Ticket pertence a um humano
            ->where('last_message_at', '<=', $thresholdEnd) // Mais antigo que 4 minutos
            ->where('last_message_at', '>', $thresholdStart) // Para parar de disparar se já passou de 5 minutos...
            ->get();

        foreach ($idleConversations as $conv) {
            // Garante que o último a enviar foi o cliente, não o vendedor
            $lastMessage = $conv->messages()->latest('created_at')->first();
            
            if ($lastMessage && $lastMessage->sender_type === 'contact') {
                // É do cliente! Dispara o pulso do Reverb
                event(new OperatorIdleWarningEvent(
                    $conv->id, 
                    $conv->assigned_to, 
                    $conv->contact->name
                ));
                $this->info("Alarme de Ociosidade disparado para o Ticket #{$conv->id} (Atendente: {$conv->assignedUser->name})");
            }
        }
    }
}
