<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OperatorIdleWarningEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $conversationId;
    public $userId; // O Operador atrasado
    public $contactName;

    /**
     * Create a new event instance.
     */
    public function __construct($conversationId, $userId, $contactName)
    {
        $this->conversationId = $conversationId;
        $this->userId = $userId;
        $this->contactName = $contactName;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('App.Models.User.' . $this->userId),
        ];
    }

    public function broadcastWith(): array
    {
        return [
            'conversation_id' => $this->conversationId,
            'contact_name' => $this->contactName,
            'message' => "O Cliente {$this->contactName} está aguardando sua resposta há quase 5 minutos!"
        ];
    }
}
