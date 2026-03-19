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
        ]);

        // Gerar um identificador único para a instância
        $identifier = 'crm_whatsapp_' . Str::random(6);

        // 1. Criar a Instância na Evolution API
        $createData = $this->evolution->createInstance($identifier);

        if (isset($createData['error']) && $createData['error'] === true) {
            return response()->json(['error' => 'Falha ao criar instância na Evolution API', 'details' => $createData], 500);
        }

        // 2. Configurar o Webhook
        $webhookUrl = url('/api/webhooks/evolution');
        $this->evolution->setWebhook($identifier, $webhookUrl);

        // 3. Salvar no Banco
        $channel = Channel::create([
            'name' => $request->name,
            'type' => 'whatsapp',
            'identifier' => $identifier,
            'status' => 'connecting', // Precisa ler QR code ainda
        ]);

        return response()->json($channel, 201);
    }

    public function qrCode(Channel $channel)
    {
        // 1. Puxar o status e o QR code atualizado da Evolution API
        $data = $this->evolution->connectInstance($channel->identifier);
        
        // Se a API retornar que já está conectado, atualizamos o banco.
        $instanceData = $data['instance'] ?? [];
        if (isset($instanceData['state']) && $instanceData['state'] === 'open') {
            $channel->update(['status' => 'connected']);
        }

        return response()->json($data);
    }

    public function destroy(Channel $channel)
    {
        // 1. Deletar na Evolution API
        $this->evolution->deleteInstance($channel->identifier);

        // 2. Deletar no Banco
        $channel->delete();

        return response()->json(['message' => 'Canal removido com sucesso']);
    }
}
