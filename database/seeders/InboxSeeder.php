<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Channel;
use App\Models\Contact;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;

class InboxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pega o primeiro usuário ou cria um manualmente (sem usar factory/faker)
        $user = User::first();
        if (!$user) {
            $user = User::create([
                'name' => 'Admin User', 
                'email' => 'admin@cfauto.com.br',
                'password' => \Illuminate\Support\Facades\Hash::make('Apjbr@1981')
            ]);
        }

        $whatsapp = Channel::create(['name' => 'WhatsApp Oficial', 'type' => 'whatsapp', 'identifier' => '+55 11 99999-9999', 'status' => 'connected']);
        $instagram = Channel::create(['name' => 'Instagram DM', 'type' => 'instagram', 'identifier' => '@cfautocrm', 'status' => 'connected']);
        $site = Channel::create(['name' => 'Site Chat', 'type' => 'widget', 'identifier' => 'website-1', 'status' => 'connected']);

        $contact1 = Contact::create(['name' => 'João Silva', 'phone' => '+55 11 98888-7777', 'email' => 'joao@email.com', 'tags' => ['VIP', 'Lead Quente']]);
        $contact2 = Contact::create(['name' => 'Maria Souza', 'phone' => '+55 11 95555-4444', 'email' => 'maria@email.com', 'tags' => ['Proposta', 'Financiamento']]);
        $contact3 = Contact::create(['name' => 'Cliente Anônimo', 'phone' => null, 'email' => null, 'tags' => ['Dúvida']]);

        $conv1 = Conversation::create(['channel_id' => $whatsapp->id, 'contact_id' => $contact1->id, 'assigned_to' => $user->id, 'status' => 'open', 'last_message_at' => now()->subMinutes(5)]);
        $conv2 = Conversation::create(['channel_id' => $instagram->id, 'contact_id' => $contact2->id, 'assigned_to' => null, 'status' => 'open', 'last_message_at' => now()->subMinutes(12)]);
        $conv3 = Conversation::create(['channel_id' => $site->id, 'contact_id' => $contact3->id, 'assigned_to' => $user->id, 'status' => 'resolved', 'last_message_at' => now()->subDays(1)]);

        Message::create(['conversation_id' => $conv1->id, 'sender_type' => 'contact', 'content' => 'Olá, tenho interesse no Jeep Compass 2023.', 'read_at' => now()]);
        Message::create(['conversation_id' => $conv1->id, 'sender_type' => 'user', 'sender_id' => $user->id, 'content' => 'Olá João! Claro, o Jeep Compass está disponível na nossa loja central. Gostaria de agendar um test drive?', 'read_at' => now()]);
        Message::create(['conversation_id' => $conv1->id, 'sender_type' => 'contact', 'content' => 'Qual o valor de entrada mínimo sugerido?', 'read_at' => null]);
        
        Message::create(['conversation_id' => $conv1->id, 'sender_type' => 'system', 'type' => 'internal_note', 'sender_id' => $user->id, 'content' => 'Cliente tem alto potencial de financiamento, oferecer taxa zero do banco parceiro.']);

        Message::create(['conversation_id' => $conv2->id, 'sender_type' => 'contact', 'content' => 'Vocês aceitam carro na troca? Tenho um HB20 2019.', 'read_at' => null]);

        Message::create(['conversation_id' => $conv3->id, 'sender_type' => 'contact', 'content' => 'Onde fica a loja de vocês?', 'read_at' => now()]);
        Message::create(['conversation_id' => $conv3->id, 'sender_type' => 'user', 'sender_id' => $user->id, 'content' => 'Ficamos na Av. Principal, 1000 - Centro.', 'read_at' => now()]);
    }
}
