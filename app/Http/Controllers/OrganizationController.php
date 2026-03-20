<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Group;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class OrganizationController extends Controller
{
    public function index()
    {
        $users = User::with(['roles', 'groups'])->get();
        $groups = Group::all();
        $roles = Role::all();

        return Inertia::render('Settings/Organization', [
            'users' => $users,
            'groups' => $groups,
            'roles' => $roles
        ]);
    }

    public function storeMember(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'role' => 'required|string',
            'groups' => 'array'
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password'])
        ]);

        $user->assignRole($validated['role']);

        if (!empty($validated['groups'])) {
            $user->groups()->sync($validated['groups']);
        }

        return redirect()->back()->with('success', 'Membro adicionado com sucesso!');
    }

    public function updateMember(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string',
            'groups' => 'array'
        ]);

        $user->update(['name' => $validated['name']]);
        
        // Sincronizar permissões
        $user->syncRoles([$validated['role']]);
        
        // Sincronizar grupos
        $user->groups()->sync($validated['groups'] ?? []);

        return redirect()->back()->with('success', 'Perfil do Membro atualizado.');
    }

    public function storeGroup(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:groups,name',
            'description' => 'nullable|string'
        ]);

        Group::create($validated);

        return redirect()->back()->with('success', 'Setor de Contato criado.');
    }

    public function updateGroup(Request $request, Group $group)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:groups,name,'.$group->id,
            'description' => 'nullable|string',
            'is_active' => 'boolean'
        ]);

        $group->update($validated);

        return redirect()->back()->with('success', 'Setor atualizado.');
    }

    public function destroyGroup(Group $group)
    {
        $group->delete();
        return redirect()->back()->with('success', 'Setor removido.');
    }
}
