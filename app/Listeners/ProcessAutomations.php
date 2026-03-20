<?php

namespace App\Listeners;

use App\Events\TriggerAutomationEvent;
use App\Models\Automation;
use App\Services\AutomationActionService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class ProcessAutomations implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(TriggerAutomationEvent $event)
    {
        try {
            // Busca apenas automações com a mesma trigger (e ativas)
            $automations = Automation::where('is_active', true)
                            ->where('trigger_type', $event->triggerType)
                            ->orderBy('priority', 'desc')
                            ->get();

            if ($automations->isEmpty()) {
                return;
            }

            $actionService = app(AutomationActionService::class);

            foreach ($automations as $automation) {
                $conditions = $automation->trigger_conditions ?? [];
                $match = true;

                // Verifica TODAS as conditions exigidas pela regra
                // Se o JSON for {"tag_id": 5}, o array $event->context OBRIGATORIAMENTE deve ter ['tag_id' => 5] ou a tag atrelada.
                foreach ($conditions as $key => $val) {
                    if (!isset($event->context[$key])) {
                        $match = false;
                        break;
                    }
                    if ($key === 'content') {
                        if (trim(strtolower($event->context[$key])) !== trim(strtolower($val))) {
                            $match = false;
                            break;
                        }
                    } else {
                        if ((string)$event->context[$key] !== (string)$val) {
                            $match = false;
                            break;
                        }
                    }
                }

                // Se as condições bateram, manda executar a payload
                if ($match) {
                    $actionService->execute($automation->action_type, $automation->action_payload, $event->context);
                }
            }
        } catch (\Exception $e) {
            Log::error("Erro no ProcessAutomations: " . $e->getMessage());
        }
    }
}
