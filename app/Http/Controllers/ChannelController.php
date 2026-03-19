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

        // 1. Criar a Instância na Evolution API
        $createData = $this->evolution->createInstance($apiUrl, $apiKey, $identifier);

        if (isset($createData['error']) && $createData['error'] === true) {
            return response()->json(['error' => 'Falha ao criar instância na Evolution API', 'details' => $createData], 500);
        }

        // 2. Configurar o Webhook
        $webhookUrl = url('/api/webhooks/evolution');
        $this->evolution->setWebhook($apiUrl, $apiKey, $identifier, $webhookUrl);

        // 3. Salvar no Banco
        $channel = Channel::create([
            'name' => $request->name,
            'type' => 'whatsapp',
            'identifier' => $identifier,
            'status' => 'connecting', // Precisa ler QR code ainda
            'credentials' => [
                'evolution_url' => $apiUrl,
                'api_key' => $apiKey
            ]
        ]);

        return response()->json($channel, 201);
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
}
