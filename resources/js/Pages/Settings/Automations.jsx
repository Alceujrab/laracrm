import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Settings2, Trash2, Power, Zap, Activity } from 'lucide-react';

export default function AutomationsSettings() {
    const [automations, setAutomations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Form State
    const [form, setForm] = useState({
        name: '',
        trigger_type: '',
        trigger_conditions: {},
        action_type: '',
        action_payload: {}
    });

    useEffect(() => {
        fetchAutomations();
    }, []);

    const fetchAutomations = async () => {
        try {
            const { data } = await axios.get('/api/automations');
            setAutomations(data);
        } catch (error) {
            console.error('Erro ao buscar automações:', error);
        }
    };

    const handleToggle = async (id) => {
        try {
            const { data } = await axios.post(`/api/automations/${id}/toggle`);
            setAutomations(automations.map(a => a.id === id ? data : a));
        } catch (error) {
            alert('Falha ao alternar status.');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Deseja realmente apagar esta regra de automação?')) return;
        try {
            await axios.delete(`/api/automations/${id}`);
            fetchAutomations();
        } catch (error) {
            alert('Falha ao excluir.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.trigger_type || !form.action_type) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                ...form,
                trigger_conditions: Object.keys(form.trigger_conditions).length > 0 ? form.trigger_conditions : null,
                action_payload: Object.keys(form.action_payload).length > 0 ? form.action_payload : null,
                priority: 0,
                is_active: true
            };
            await axios.post('/api/automations', payload);
            setIsModalOpen(false);
            setForm({ name: '', trigger_type: '', trigger_conditions: {}, action_type: '', action_payload: {} });
            fetchAutomations();
        } catch (error) {
            alert('Falha ao criar automação: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    // UI Helpers
    const parseTriggerLabel = (type) => {
        switch(type) {
            case 'new_chat': return 'Nova Conversa (Ticket Iniciado)';
            case 'new_message': return 'Nova Mensagem Recebida';
            case 'stage_changed': return 'Negociação Movida de Estágio';
            case 'tag_added': return 'Etiqueta (Tag) Adicionada';
            default: return type;
        }
    };

    const parseActionLabel = (type) => {
        switch(type) {
            case 'transfer_group': return 'Transferir para Fila/Setor';
            case 'assign_user': return 'Atribuir a um Usuário Específico';
            case 'send_message': return 'Enviar Mensagem Automática';
            case 'add_tag': return 'Adicionar Etiqueta (Tag)';
            default: return type;
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900/50">
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Zap className="mr-3 w-6 h-6 text-yellow-500" /> Automações IF-THIS-THEN-THAT
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Crie lógicas de auto-atendimento baseadas em eventos do CRM e do chat.</p>
                </div>
                
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                    <Plus className="w-4 h-4 mr-2" /> 
                    Criar Nova Automação
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
                {automations.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                        <Settings2 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sem Regras Ativas</h3>
                        <p className="text-gray-500 max-w-sm mx-auto">O CRM ainda não está automatizando nenhuma tarefa para você. Que tal criar a primeira regra?</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {automations.map(a => (
                            <div key={a.id} className={`bg-white dark:bg-gray-800 rounded-xl border p-5 flex items-center justify-between shadow-sm transition-all ${a.is_active ? 'border-indigo-200 dark:border-indigo-900 shadow-indigo-100 dark:shadow-none' : 'border-gray-200 dark:border-gray-700 opacity-60'}`}>
                                <div className="flex items-start">
                                    <div className={`mt-1 mr-4 p-2 rounded-lg ${a.is_active ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'}`}>
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{a.name}</h3>
                                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex items-center flex-wrap gap-2">
                                            <span className="font-semibold text-gray-500">SE:</span>
                                            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-600">{parseTriggerLabel(a.trigger_type)}</span>
                                            
                                            {Object.keys(a.trigger_conditions || {}).map((k) => (
                                                <span key={k} className="text-xs italic text-gray-500">[{k}: {a.trigger_conditions[k]}]</span>
                                            ))}

                                            <span className="font-semibold text-gray-500 mx-2">ENTÃO:</span>
                                            <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">{parseActionLabel(a.action_type)}</span>
                                            
                                            {Object.keys(a.action_payload || {}).map((k) => (
                                                <span key={k} className="text-xs italic text-gray-500">[{k}: {a.action_payload[k]}]</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button 
                                        onClick={() => handleToggle(a.id)} 
                                        className={`p-2 rounded-full transition-colors ${a.is_active ? 'text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                        title={a.is_active ? 'Desativar Automação' : 'Ativar Automação'}
                                    >
                                        <Power className="w-5 h-5" />
                                    </button>
                                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
                                    <button onClick={() => handleDelete(a.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-colors">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Nova Regra Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col max-h-[90vh]">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-t-xl">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-yellow-500" /> Criar Regra de Automação
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">&times;</button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome da Automação</label>
                                <input 
                                    type="text" required placeholder="Ex: Roteamento Padrão de Leads"
                                    className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                    value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                                />
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900/50 -mx-6 px-6 py-6 border-y border-gray-100 dark:border-gray-800">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 text-indigo-600 dark:text-indigo-400">1. O Gatilho</h4>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Quando isso acontecer...</label>
                                        <select 
                                            required
                                            className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                            value={form.trigger_type} onChange={(e) => {
                                                setForm({...form, trigger_type: e.target.value, trigger_conditions: {}});
                                            }}
                                        >
                                            <option value="">Selecione o Gatilho</option>
                                            <option value="new_chat">Nova Conversa/Ticket Iniciado</option>
                                            <option value="new_message">Nova Mensagem Recebida</option>
                                            <option value="stage_changed">Negociação Movida no CRM</option>
                                        </select>
                                    </div>
                                    
                                    {/* Campos dinâmicos de condição baseados no gatilho */}
                                    {form.trigger_type === 'stage_changed' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E a Etapa Destino for (ID)...</label>
                                            <input 
                                                type="number" required placeholder="ID do Stage"
                                                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                                value={form.trigger_conditions.stage_id || ''} 
                                                onChange={(e) => setForm({...form, trigger_conditions: { ...form.trigger_conditions, stage_id: e.target.value }})}
                                            />
                                        </div>
                                    )}

                                    {form.trigger_type === 'new_message' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E o texto da mensagem for EXATAMENTE:</label>
                                            <input 
                                                type="text" required placeholder="Ex: 1"
                                                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                                value={form.trigger_conditions.content || ''} 
                                                onChange={(e) => setForm({...form, trigger_conditions: { ...form.trigger_conditions, content: e.target.value, sender_type: 'contact' }})}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Isso só acionará se o cliente digitar exatamente esta palavra/número.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="pt-2">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 text-emerald-600 dark:text-emerald-400">2. A Ação a ser Excutada</h4>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Então o sistema deve...</label>
                                        <select 
                                            required
                                            className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                            value={form.action_type} onChange={(e) => {
                                                setForm({...form, action_type: e.target.value, action_payload: {}});
                                            }}
                                        >
                                            <option value="">Selecione a Ação</option>
                                            <option value="transfer_group">Transferir para Fila/Setor</option>
                                            <option value="assign_user">Atribuir a um Usuário</option>
                                            <option value="send_message">Enviar Mensagem Automática</option>
                                        </select>
                                    </div>

                                    {form.action_type === 'transfer_group' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Para qual Fila (ID)?</label>
                                            <input 
                                                type="number" required placeholder="ID do Setor (Ex: 2)"
                                                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                                value={form.action_payload.group_id || ''} 
                                                onChange={(e) => setForm({...form, action_payload: { group_id: e.target.value }})}
                                            />
                                        </div>
                                    )}

                                    {form.action_type === 'assign_user' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Para qual Usuário (ID)?</label>
                                            <input 
                                                type="number" required placeholder="ID do Usuário"
                                                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                                value={form.action_payload.user_id || ''} 
                                                onChange={(e) => setForm({...form, action_payload: { user_id: e.target.value }})}
                                            />
                                        </div>
                                    )}

                                    {form.action_type === 'send_message' && (
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Texto da Mensagem</label>
                                            <textarea 
                                                required placeholder="Ex: Olá! Bem-vindo à Elite Veículos. Digite a opção desejada..."
                                                rows="4"
                                                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5"
                                                value={form.action_payload.message || ''} 
                                                onChange={(e) => setForm({...form, action_payload: { message: e.target.value }})}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                        </form>
                        
                        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end bg-white dark:bg-gray-800 rounded-b-xl">
                            <button type="button" onClick={() => setIsModalOpen(false)} className="mr-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
                            <button onClick={handleSubmit} disabled={loading} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm font-medium text-sm flex items-center">
                                {loading ? 'Carregando...' : 'Salvar Automação'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
