<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class EvolutionApiService
{
    private function getHeaders(string $apiKey)
    {
        return [
            'apikey' => $apiKey,
            'Content-Type' => 'application/json'
        ];
    }

    /**
     * Cria uma nova instância no Evolution API
     */
    public function createInstance(string $apiUrl, string $apiKey, string $instanceName)
    {
        $endpoint = rtrim($apiUrl, '/') . "/instance/create";
        
        try {
            $response = Http::withHeaders($this->getHeaders($apiKey))->post($endpoint, [
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
    public function setWebhook(string $apiUrl, string $apiKey, string $instanceName, string $webhookUrl)
    {
        $endpoint = rtrim($apiUrl, '/') . "/webhook/set/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders($apiKey))->post($endpoint, [
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
    public function connectInstance(string $apiUrl, string $apiKey, string $instanceName)
    {
        $endpoint = rtrim($apiUrl, '/') . "/instance/connect/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders($apiKey))->get($endpoint);
            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Connect Instance Exception: " . $e->getMessage());
            return ['error' => true, 'message' => $e->getMessage()];
        }
    }

    /**
     * Deleta (ou desconecta) uma instancia
     */
    public function deleteInstance(string $apiUrl, string $apiKey, string $instanceName)
    {
        $endpoint = rtrim($apiUrl, '/') . "/instance/delete/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders($apiKey))->delete($endpoint);
            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Delete Instance Exception: " . $e->getMessage());
            return ['error' => true, 'message' => $e->getMessage()];
        }
    }

    /**
     * Envia uma mensagem de texto simples.
     */
    public function sendText(string $apiUrl, string $apiKey, string $instanceName, string $number, string $text)
    {
        $endpoint = rtrim($apiUrl, '/') . "/message/sendText/{$instanceName}";
        
        try {
            $response = Http::withHeaders($this->getHeaders($apiKey))->post($endpoint, [
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
