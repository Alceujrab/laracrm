<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DealStage;
use App\Models\Vehicle;
use App\Models\Deal;
use App\Models\Contact;
use App\Models\User;

class CrmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stages = [
            ['name' => 'Novos Leads', 'order' => 1, 'color' => '#3B82F6'], // Blue
            ['name' => 'Acompanhamento', 'order' => 2, 'color' => '#8B5CF6'], // Purple
            ['name' => 'Proposta', 'order' => 3, 'color' => '#F59E0B'], // Amber
            ['name' => 'Em Negociação', 'order' => 4, 'color' => '#EF4444'], // Red
            ['name' => 'Fechado/Ganho', 'order' => 5, 'color' => '#10B981'], // Green
        ];

        foreach ($stages as $stage) {
            DealStage::firstOrCreate(['name' => $stage['name']], $stage);
        }

        $v1 = Vehicle::create([
            'make' => 'Jeep', 'model' => 'Renegade Longitude 1.8 Flex', 'year' => 2022, 
            'price' => 105000, 'km' => 35000, 'plate' => 'ABC1234', 'status' => 'available'
        ]);
        
        $v2 = Vehicle::create([
            'make' => 'Honda', 'model' => 'Civic EXL 2.0', 'year' => 2021, 
            'price' => 135000, 'km' => 28000, 'plate' => 'XYZ9876', 'status' => 'available'
        ]);

        $v3 = Vehicle::create([
            'make' => 'Toyota', 'model' => 'Corolla XEI 2.0', 'year' => 2023, 
            'price' => 150000, 'km' => 15000, 'plate' => 'QWE5555', 'status' => 'reserved'
        ]);

        $v4 = Vehicle::create([
            'make' => 'Hyundai', 'model' => 'Creta Prestige', 'year' => 2020, 
            'price' => 95000, 'km' => 55000, 'plate' => 'HYU0000', 'status' => 'sold'
        ]);

        $user = User::first();
        // Pegar pelo menos dois contatos diferentes, se existirem
        $contacts = Contact::take(2)->get();
        
        $stageProps = DealStage::where('name', 'Proposta')->first();
        $stageNew = DealStage::where('name', 'Novos Leads')->first();
        $stageNeg = DealStage::where('name', 'Em Negociação')->first();

        if ($contacts->count() > 0 && $user && $stageProps && $stageNew && $stageNeg) {
            Deal::create([
                'title' => 'Interesse no Renegade - Financiamento',
                'contact_id' => $contacts[0]->id,
                'vehicle_id' => $v1->id,
                'deal_stage_id' => $stageProps->id,
                'assigned_to' => $user->id,
                'value' => 105000,
            ]);

            if(isset($contacts[1])) {
                Deal::create([
                    'title' => 'Troca pelo Civic',
                    'contact_id' => $contacts[1]->id,
                    'vehicle_id' => $v2->id,
                    'deal_stage_id' => $stageNew->id,
                    'assigned_to' => $user->id,
                    'value' => 135000,
                ]);

                Deal::create([
                    'title' => 'Corolla para Frotista',
                    'contact_id' => $contacts[1]->id,
                    'vehicle_id' => $v3->id,
                    'deal_stage_id' => $stageNeg->id,
                    'assigned_to' => $user->id,
                    'value' => 150000,
                ]);
            }
        }
    }
}
