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

    /**
     * Envia uma mensagem de texto simples.
     */
    public function sendText(string $instanceName, string $number, string $text)
    {
        $endpoint = rtrim($this->baseUrl, '/') . "/message/sendText/{$instanceName}";
        
        try {
            $response = Http::withHeaders([
                'apikey' => $this->globalApiKey,
                'Content-Type' => 'application/json'
            ])->post($endpoint, [
                'number' => $number,
                'text' => $text,
                'delay' => 1200, // delay to simulate typing
            ]);

            if ($response->failed()) {
                Log::error("Failed to send Evolution API message:", [
                    'endpoint' => $endpoint,
                    'status' => $response->status(),
                    'response' => $response->json(),
                ]);
            }

            return $response->json();
        } catch (\Exception $e) {
            Log::error("Evolution API Request Exception: " . $e->getMessage());
            return null;
        }
    }
}
