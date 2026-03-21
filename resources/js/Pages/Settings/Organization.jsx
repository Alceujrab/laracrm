import React, { useState } from 'react';
import { useForm, router } from '@inertiajs/react';
import { 
    Users, ShieldAlert, GitMerge, Plus, Edit, Trash2, X, Check, Shield
} from 'lucide-react';

export default function OrganizationTab({ users = [], groups = [], roles = [] }) {
    const [activeTab, setActiveTab] = useState('members'); // 'members' | 'groups'
    
    // Form do Membro
    const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const { data: memberData, setData: setMemberData, post: postMember, put: putMember, processing: memberProcessing, reset: resetMember } = useForm({
        name: '', email: '', password: '', role: 'agente', groups: []
    });

    // Form do Grupo
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
    const [editingGroup, setEditingGroup] = useState(null);
    const { data: groupData, setData: setGroupData, post: postGroup, put: putGroup, processing: groupProcessing, reset: resetGroup } = useForm({
        name: '', description: '', is_active: true
    });

    // Handlers de Modal de Membro
    const openNewMember = () => {
        setEditingUser(null);
        resetMember();
        setIsMemberModalOpen(true);
    };

    const openEditMember = (u) => {
        setEditingUser(u);
        setMemberData({
            name: u.name,
            email: u.email,
            password: '', // não preencher
            role: u.roles && u.roles.length > 0 ? u.roles[0].name : 'agente',
            groups: u.groups ? u.groups.map(g => g.id) : []
        });
        setIsMemberModalOpen(true);
    };

    const submitMember = (e) => {
        e.preventDefault();
        if (editingUser) {
            putMember(route('settings.members.update', editingUser.id), {
                onSuccess: () => setIsMemberModalOpen(false)
            });
        } else {
            postMember(route('settings.members.store'), {
                onSuccess: () => setIsMemberModalOpen(false)
            });
        }
    };

    const toggleGroupSelection = (groupId) => {
        const current = [...memberData.groups];
        if (current.includes(groupId)) {
            setMemberData('groups', current.filter(id => id !== groupId));
        } else {
            setMemberData('groups', [...current, groupId]);
        }
    };

    // Handlers de Modal de Grupo
    const openNewGroup = () => {
        setEditingGroup(null);
        resetGroup();
        setIsGroupModalOpen(true);
    };

    const openEditGroup = (g) => {
        setEditingGroup(g);
        setGroupData({
            name: g.name,
            description: g.description || '',
            is_active: !!g.is_active
        });
        setIsGroupModalOpen(true);
    };

    const submitGroup = (e) => {
        e.preventDefault();
        if (editingGroup) {
            putGroup(route('settings.groups.update', editingGroup.id), {
                onSuccess: () => setIsGroupModalOpen(false)
            });
        } else {
            postGroup(route('settings.groups.store'), {
                onSuccess: () => setIsGroupModalOpen(false)
            });
        }
    };

    const deleteGroup = (id) => {
        if(confirm('Atenção: Destruir uma Fila de Atendimento é uma ação drástica. Os membros dessa fila serão deslocados da atribuição. Continuar?')){
            router.delete(route('settings.groups.destroy', id));
        }
    };

    return (
        <div className="flex flex-col h-full overflow-y-auto bg-gray-50 dark:bg-gray-950">
            <div className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header Principal */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                            <ShieldAlert className="w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400" />
                            Gestão de Equipe e Permissões
                        </h1>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Central de comando (RBAC) para delegar Acessos (Administrativo x Operacional) e Filas Setoriais (Ex: Vendas, Suporte).
                        </p>
                    </div>

                    {flash?.success && (
                        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                            <p className="text-sm font-medium text-green-800">{flash.success}</p>
                        </div>
                    )}

                    {/* Navbar de Navegação Interna */}
                    <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8">
                            <button
                                onClick={() => setActiveTab('members')}
                                className={`${
                                    activeTab === 'members'
                                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 font-medium'
                                } whitespace-nowrap py-4 px-1 border-b-2 text-sm flex items-center transition-colors`}
                            >
                                <Users className="w-4 h-4 mr-2" />
                                Lista de Atendentes
                            </button>
                            <button
                                onClick={() => setActiveTab('groups')}
                                className={`${
                                    activeTab === 'groups'
                                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 font-medium'
                                } whitespace-nowrap py-4 px-1 border-b-2 text-sm flex items-center transition-colors`}
                            >
                                <GitMerge className="w-4 h-4 mr-2" />
                                Setores & Filas
                            </button>
                        </nav>
                    </div>

                    {/* ABA DE MEMBROS */}
                    {activeTab === 'members' && (
                        <div>
                            <div className="mb-4 flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Controles de Acesso (Login)</h3>
                                <button onClick={openNewMember} className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors">
                                    <Plus className="w-4 h-4 mr-2" /> Adicionar Conta
                                </button>
                            </div>

                            <div className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-900/50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Identidade</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cargo de Acesso</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Setores Puxados</th>
                                            <th className="relative px-6 py-3"><span className="sr-only">Ações</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                        {(users || []).map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                                                            {(user?.name || '?').charAt(0).toUpperCase()}
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {(user?.roles || []).map(r => (
                                                        <span key={r.id} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold leading-5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                            {r.name === 'admin' ? <Shield className="w-3 h-3 mr-1"/> : null}
                                                            {(r?.name || 'Vazio').toUpperCase()}
                                                        </span>
                                                    ))}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="flex flex-wrap gap-1">
                                                        {user?.groups && user.groups.length > 0 ? user.groups.map(g => (
                                                            <span key={g.id} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                                                {g?.name || 'Desconhecido'}
                                                            </span>
                                                        )) : (
                                                            <span className="text-gray-400 italic text-xs">Sem Fila Fixa</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button onClick={() => openEditMember(user)} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                                                        Configurar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* ABA DE GRUPOS */}
                    {activeTab === 'groups' && (
                        <div>
                            <div className="mb-4 flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Setores Puxados pelo Bot</h3>
                                <button onClick={openNewGroup} className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors">
                                    <Plus className="w-4 h-4 mr-2" /> Novo Setor
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {(groups || []).map((g) => (
                                    <div key={g.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 relative group overflow-hidden">
                                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => openEditGroup(g)} className="text-gray-400 hover:text-indigo-600"><Edit className="w-4 h-4"/></button>
                                            <button onClick={() => deleteGroup(g.id)} className="text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4"/></button>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mr-4">
                                                <GitMerge className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                                    {g.name}
                                                    <span className="ml-3 font-mono text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-600">ID: {g.id}</span>
                                                    {!g.is_active && <span className="ml-2 text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded uppercase font-bold tracking-widest">Inativo</span>}
                                                </h4>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                                    {g.description || 'Sem descrição.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {groups.length === 0 && (
                                    <div className="col-span-full text-center py-12 text-gray-500 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                                        Nenhuma fila de setor foi arquitetada ainda. Construa grupos para dividir o fluxo do WhatsApp.
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* MODAL DE MEMBRO */}
            {isMemberModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {editingUser ? 'Credenciais e Atribuições' : 'Novo Assinante da Plataforma'}
                            </h3>
                            <button onClick={() => setIsMemberModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5"/></button>
                        </div>
                        <form onSubmit={submitMember}>
                            <div className="p-6 space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label className="block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300">Nome Oficial</label>
                                        <input type="text" value={memberData.name} onChange={e => setMemberData('name', e.target.value)} required className="mt-1 w-full text-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300">Email de Login</label>
                                        <input type="email" value={memberData.email} onChange={e => setMemberData('email', e.target.value)} disabled={!!editingUser} required className="mt-1 w-full text-sm rounded-lg border-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300">Senha Padrão</label>
                                        <input type="password" value={memberData.password} onChange={e => setMemberData('password', e.target.value)} required={!editingUser} placeholder={editingUser ? 'Deixe em branco para manter' : 'Min. 6 caracteres'} className="mt-1 w-full text-sm rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-2">
                                    <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                        <Shield className="w-4 h-4 mr-2 text-indigo-500"/> Privilégio de Sistema (Cargo)
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className={`cursor-pointer border-2 rounded-xl p-4 flex items-start ${memberData.role === 'admin' ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                                            <input type="radio" name="role" value="admin" checked={memberData.role === 'admin'} onChange={e => setMemberData('role', e.target.value)} className="sr-only"/>
                                            <div className="flex-1">
                                                <span className="block text-sm font-bold text-gray-900 dark:text-white uppercase">Gestor / Admin</span>
                                                <span className="block text-xs text-gray-500 mt-1 leading-relaxed">Pode destruir canais, montar funis e deletar usuários.</span>
                                            </div>
                                            {memberData.role === 'admin' && <Check className="w-5 h-5 text-indigo-600 ml-2"/>}
                                        </label>
                                        <label className={`cursor-pointer border-2 rounded-xl p-4 flex items-start ${memberData.role === 'agente' ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                                            <input type="radio" name="role" value="agente" checked={memberData.role === 'agente'} onChange={e => setMemberData('role', e.target.value)} className="sr-only"/>
                                            <div className="flex-1">
                                                <span className="block text-sm font-bold text-gray-900 dark:text-white uppercase">Operacional / Agente</span>
                                                <span className="block text-xs text-gray-500 mt-1 leading-relaxed">Fica focado na Inbox e Kanbans de trabalho apenas.</span>
                                            </div>
                                            {memberData.role === 'agente' && <Check className="w-5 h-5 text-indigo-600 ml-2"/>}
                                        </label>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-2">
                                    <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                                        <GitMerge className="w-4 h-4 mr-2 text-indigo-500"/> Filas Alocadas (Participação)
                                    </label>
                                    <p className="text-xs text-gray-500 mb-3">Marque as filas que esta pessoa vai receber as mensagens.</p>
                                    <div className="flex flex-wrap gap-2">
                                        {(groups || []).map(g => (
                                            <button 
                                                key={g.id} type="button" 
                                                onClick={() => toggleGroupSelection(g.id)}
                                                className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                                                    (memberData?.groups || []).includes(g.id) 
                                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' 
                                                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
                                                }`}
                                            >
                                                {g?.name || 'Fila sem nome'}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                                <button type="button" onClick={() => setIsMemberModalOpen(false)} className="mr-3 text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300">Cancelar</button>
                                <button type="submit" disabled={memberProcessing} className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm">
                                    {memberProcessing ? 'Comitando...' : 'Salvar Arquitetura do Membro'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL DE GRUPO */}
            {isGroupModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {editingGroup ? 'Gerenciar Fila Base' : 'Abraçar Novo Setor'}
                            </h3>
                            <button onClick={() => setIsGroupModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5"/></button>
                        </div>
                        <form onSubmit={submitGroup}>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300">Nome da Fila (Tag)</label>
                                    <input type="text" value={groupData.name} onChange={e => setGroupData('name', e.target.value)} required placeholder="Ex: Financeiro" className="mt-1 w-full text-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300">Descrição (Uso Opcional)</label>
                                    <textarea value={groupData.description} onChange={e => setGroupData('description', e.target.value)} rows="2" className="mt-1 w-full text-sm rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                                </div>
                                {editingGroup && (
                                    <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
                                        <input type="checkbox" checked={groupData.is_active} onChange={e => setGroupData('is_active', e.target.checked)} className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                        Manter esta Fila ativa no roteador base.
                                    </div>
                                )}
                            </div>
                            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                                <button type="button" onClick={() => setIsGroupModalOpen(false)} className="mr-3 text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300">Cancelar</button>
                                <button type="submit" disabled={groupProcessing} className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm">
                                    {groupProcessing ? 'Construindo Fila...' : 'Registrar Setor'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
