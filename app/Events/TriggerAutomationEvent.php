<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TriggerAutomationEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $triggerType;
    public $context;

    /**
     * Create a new event instance.
     *
     * @param string $triggerType 'new_message', 'stage_changed', etc.
     * @param array $context ['conversation_id' => 123, 'group_id' => 2, ...]
     */
    public function __construct(string $triggerType, array $context)
    {
        $this->triggerType = $triggerType;
        $this->context = $context;
    }
}
