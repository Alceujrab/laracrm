<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class EvolutionApiService
{
    protected string $baseUrl;
    protected string $globalApiKey;

    public function __construct()
    {
        $this->baseUrl = config('services.evolution.url', env('EVOLUTION_API_URL', 'http://localhost:8080'));
        $this->globalApiKey = config('services.evolution.token', env('EVOLUTION_API_TOKEN', 'your-global-apikey'));
    }

    private function getHeaders()
    {
        return [
            'apikey' => $this->globalApiKey,
            'Content-Type' => 'application/json'
        ];
    }

    /**
     * Cria uma nova instância no Evolution API
     */
    public function createInstance(string $instanceName)
    {
        $endpoint = rtrim($this->baseUrl, '/') . "/instance/create";
        
        try {
            $response = Http::withHeaders($this->getHeaders())->post($endpoint, [
                'instanceName' => $instanceName,
                'qrcode' => true,
                'integration' => 'WHATSAPP-BAILEYS'
            ]);

            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Create Instance Exception: " . $e->getMessage());
            return ['error' => true, 'message' => $e->getMessage()];
        }
    }

    /**
     * Configura o Webhook de uma instância
     */
    public function setWebhook(string $instanceName, string $webhookUrl)
    {
        $endpoint = rtrim($this->baseUrl, '/') . "/webhook/set/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders())->post($endpoint, [
                'webhook' => [
                    'enabled' => true,
                    'url' => $webhookUrl,
                    'byEvents' => false,
                    'base64' => false,
                    'events' => [
                        "MESSAGES_UPSERT",
                        "MESSAGES_UPDATE",
                        "SEND_MESSAGE"
                    ]
                ]
            ]);

            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Set Webhook Exception: " . $e->getMessage());
            return ['error' => true, 'message' => $e->getMessage()];
        }
    }

    /**
     * Recupera o estado da conexao / QR Code
     */
    public function connectInstance(string $instanceName)
    {
        $endpoint = rtrim($this->baseUrl, '/') . "/instance/connect/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders())->get($endpoint);
            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Connect Instance Exception: " . $e->getMessage());
            return ['error' => true, 'message' => $e->getMessage()];
        }
    }

    /**
     * Deleta (ou desconecta) uma instancia
     */
    public function deleteInstance(string $instanceName)
    {
        $endpoint = rtrim($this->baseUrl, '/') . "/instance/delete/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders())->delete($endpoint);
            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Delete Instance Exception: " . $e->getMessage());
            return ['error' => true, 'message' => $e->getMessage()];
        }
    }

    /**
     * Envia uma mensagem de texto simples.
     */
    public function sendText(string $instanceName, string $number, string $text)
    {
        $endpoint = rtrim($this->baseUrl, '/') . "/message/sendText/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders())->post($endpoint, [
                'number' => $number,
                'text' => $text,
                'delay' => 1200, // delay to simulate typing
            ]);

            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Request Exception: " . $e->getMessage());
            return null;
        }
    }
}
