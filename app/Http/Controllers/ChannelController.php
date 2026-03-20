<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Channel;
use App\Services\EvolutionApiService;
use Illuminate\Support\Str;

class ChannelController extends Controller
{
    protected EvolutionApiService $evolution;

    public function __construct(EvolutionApiService $evolution)
    {
        $this->evolution = $evolution;
    }

    public function index()
    {
        return response()->json(Channel::orderBy('created_at', 'desc')->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'api_url' => 'required|url',
            'api_key' => 'required|string',
            'instance_name' => 'required|string',
        ]);

        $apiUrl = $request->api_url;
        $apiKey = $request->api_key;
        $identifier = $request->instance_name;

        // 1. Tentar Criar a Instância na Evolution API
        $createData = $this->evolution->createInstance($apiUrl, $apiKey, $identifier);

        // Se o erro for que já existe, ignoramos e prosseguimos
        $errorMsg = $createData['message'] ?? '';
        if (isset($createData['error']) && $createData['error'] === true) {
            if (is_string($errorMsg) && stripos($errorMsg, 'already exists') === false && stripos($errorMsg, 'já existe') === false && stripos($errorMsg, 'exist') === false) {
                return response()->json(['error' => 'Falha ao criar/acessar instância na Evolution API', 'details' => $createData], 500);
            }
        }

        // 2. Configurar o Webhook Automaticamente
        $webhookUrl = url('/api/webhooks/evolution');
        $this->evolution->setWebhook($apiUrl, $apiKey, $identifier, $webhookUrl);

        // 3. Checar se já está Open para não pedir QR Code
        $status = 'connecting';
        $connectData = $this->evolution->connectInstance($apiUrl, $apiKey, $identifier);
        if (isset($connectData['instance']['state']) && $connectData['instance']['state'] === 'open') {
            $status = 'connected';
        }

        // 4. Salvar no Banco
        $channel = Channel::create([
            'name' => $request->name,
            'type' => 'whatsapp',
            'identifier' => $identifier,
            'status' => $status,
            'credentials' => [
                'evolution_url' => $apiUrl,
                'api_key' => $apiKey
            ]
        ]);

        return response()->json([
            'channel' => $channel,
            'webhook_url' => $webhookUrl
        ], 201);
    }

    public function update(Request $request, Channel $channel)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'api_url' => 'required|url',
            'api_key' => 'required|string',
            'instance_name' => 'required|string',
        ]);

        $channel->update([
            'name' => $request->name,
            'identifier' => $request->instance_name,
            'credentials' => [
                'evolution_url' => $request->api_url,
                'api_key' => $request->api_key
            ]
        ]);

        return response()->json(['message' => 'Canal atualizado', 'channel' => $channel], 200);
    }

    public function qrCode(Channel $channel)
    {
        $credentials = $channel->credentials ?? [];
        $apiUrl = $credentials['evolution_url'] ?? '';
        $apiKey = $credentials['api_key'] ?? '';

        // 1. Puxar o status e o QR code atualizado da Evolution API
        $data = $this->evolution->connectInstance($apiUrl, $apiKey, $channel->identifier);
        
        // Se a API retornar que já está conectado, atualizamos o banco.
        $instanceData = $data['instance'] ?? [];
        if (isset($instanceData['state']) && $instanceData['state'] === 'open') {
            $channel->update(['status' => 'connected']);
        }

        return response()->json($data);
    }

    public function destroy(Channel $channel)
    {
        $credentials = $channel->credentials ?? [];
        $apiUrl = $credentials['evolution_url'] ?? '';
        $apiKey = $credentials['api_key'] ?? '';

        // 1. Deletar na Evolution API
        if ($apiUrl && $apiKey) {
            $this->evolution->deleteInstance($apiUrl, $apiKey, $channel->identifier);
        }

        // 2. Deletar no Banco
        $channel->delete();

        return response()->json(['message' => 'Canal removido com sucesso']);
    }

    public function updateAiSettings(Request $request, Channel $channel)
    {
        $request->validate([
            'ai_enabled' => 'required|boolean',
            'ai_prompt' => 'nullable|string'
        ]);

        $channel->update([
            'ai_enabled' => $request->ai_enabled,
            'ai_prompt' => $request->ai_prompt
        ]);

        return response()->json(['message' => 'Configurações de IA atualizadas com sucesso', 'channel' => $channel]);
    }
}
