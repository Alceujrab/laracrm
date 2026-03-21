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
                        $conv = Conversation::with(['contact', 'channel'])->find($context['conversation_id']);
                        if ($conv && $conv->group_id != $payload['group_id']) {
                            $conv->update(['group_id' => $payload['group_id']]);
                            
                            $group = \App\Models\Group::find($payload['group_id']);
                            $groupName = $group ? $group->name : 'Atendimento';
                            
                            $msgText = "✅ Seu atendimento foi direcionado para o setor de *{$groupName}*.\n\nEstou chamando um vendedor livre para lhe atender o mais rápido possível. Enquanto isso, como gostaria de ser chamado e como podemos lhe ajudar?";
                            
                            if ($conv->contact && $conv->channel) {
                                app(\App\Services\EvolutionApiService::class)->sendMessage(
                                    $conv->channel->identifier,
                                    $conv->contact->phone,
                                    $msgText
                                );
                                
                                $message = \App\Models\Message::create([
                                    'conversation_id' => $conv->id,
                                    'sender_type' => 'user', 
                                    'content' => $msgText,
                                    'type' => 'text'
                                ]);
                                broadcast(new \App\Events\NewMessageReceived($message));
                            }
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
                    if (isset($context['conversation_id']) && !empty($payload['message'])) {
                        $conv = Conversation::with(['contact', 'channel'])->find($context['conversation_id']);
                        if ($conv && $conv->contact && $conv->channel) {
                            app(\App\Services\EvolutionApiService::class)->sendMessage(
                                $conv->channel->identifier,
                                $conv->contact->phone,
                                $payload['message']
                            );
                            $message = \App\Models\Message::create([
                                'conversation_id' => $conv->id,
                                'sender_type'     => 'user',
                                'content'         => $payload['message'],
                                'type'            => 'text'
                            ]);
                            broadcast(new \App\Events\NewMessageReceived($message));
                        }
                    }
                    break;

                case 'change_deal_stage':
                    if (isset($context['deal_id']) && isset($payload['stage_id'])) {
                        $deal = Deal::find($context['deal_id']);
                        if ($deal && $deal->deal_stage_id != $payload['stage_id']) {
                            $deal->update(['deal_stage_id' => $payload['stage_id']]);
                            Log::info("Automation moved deal #{$deal->id} to stage {$payload['stage_id']}");
                        }
                    }
                    break;
            }
        } catch (\Exception $e) {
            Log::error('Automation Action Error (' . $actionType . '): ' . $e->getMessage());
        }
    }
}
