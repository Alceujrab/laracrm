<?php

namespace App\Services;

use App\Models\Conversation;
use App\Models\Deal;
use Illuminate\Support\Facades\Log;

class AutomationActionService
{
    public function execute($actionType, $payload, $context)
    {
        try {
            switch ($actionType) {
                case 'transfer_group':
                    if (isset($context['conversation_id']) && isset($payload['group_id'])) {
                        $conv = Conversation::find($context['conversation_id']);
                        if ($conv && $conv->group_id != $payload['group_id']) {
                            $conv->update(['group_id' => $payload['group_id']]);
                            // TODO: Disparar evento WebSocket de chat atualizado para a interface
                        }
                    }
                    break;
                
                case 'assign_user':
                    if (isset($context['conversation_id']) && isset($payload['user_id'])) {
                        $conv = Conversation::find($context['conversation_id']);
                        if ($conv && $conv->user_id != $payload['user_id']) {
                            $conv->update(['user_id' => $payload['user_id']]);
                        }
                    }
                    if (isset($context['deal_id']) && isset($payload['user_id'])) {
                        $deal = Deal::find($context['deal_id']);
                        if ($deal && $deal->assigned_to != $payload['user_id']) {
                            $deal->update(['assigned_to' => $payload['user_id']]);
                        }
                    }
                    break;

                case 'send_message':
                    // TODO: Re-aproveitar a EvolutionApiService para enviar o payload['message']
                    break;
                    
                case 'add_tag':
                    // TODO: Implementar quando houver o sistema de Tags
                    break;
            }
        } catch (\Exception $e) {
            Log::error('Automation Action Error (' . $actionType . '): ' . $e->getMessage());
        }
    }
}
