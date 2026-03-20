<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Limpar o cache do Spatie
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Criar Cargos (Roles)
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $agenteRole = Role::firstOrCreate(['name' => 'agente']);

        // Descobrir o Primeiro Usuário Super Admin que registrou o sistema (ex: Alceu)
        $firstUser = User::first();
        if ($firstUser) {
            $firstUser->assignRole($adminRole);
        }
    }
}
