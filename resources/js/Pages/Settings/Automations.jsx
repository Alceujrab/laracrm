import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Settings2, Trash2, Power, Zap, Activity, ChevronRight } from 'lucide-react';

const TRIGGER_OPTIONS = [
    { value: 'new_chat',       label: '💬 Nova Conversa / Ticket Iniciado' },
    { value: 'new_message',    label: '📩 Nova Mensagem do Cliente' },
    { value: 'stage_changed',  label: '🔄 Negociação Movida de Estágio (CRM)' },
    { value: 'deal_closed',    label: '🏆 Negócio Marcado como Ganho ou Perdido' },
    { value: 'tag_added',      label: '🏷️ Etiqueta Adicionada à Conversa' },
];

const ACTION_OPTIONS = [
    { value: 'send_message',      label: '💬 Enviar Mensagem Automática ao Cliente' },
    { value: 'assign_user',       label: '👤 Atribuir Atendimento a um Usuário' },
    { value: 'transfer_group',    label: '📂 Transferir para Fila / Setor' },
    { value: 'change_deal_stage', label: '🔄 Mover Negócio para outro Estágio' },
];

const getTriggerLabel = (type) => TRIGGER_OPTIONS.find(o => o.value === type)?.label || type;
const getActionLabel  = (type) => ACTION_OPTIONS.find(o => o.value === type)?.label || type;

const InputClass = 'w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent';
const SelectClass = InputClass;
const LabelClass  = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1';

export default function AutomationsSettings() {
    const [automations, setAutomations] = useState([]);
    const [users,       setUsers]       = useState([]);
    const [groups,      setGroups]      = useState([]);
    const [stages,      setStages]      = useState([]);
    const [loading,     setLoading]     = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId,   setEditingId]   = useState(null);

    const emptyForm = { name: '', trigger_type: '', trigger_conditions: {}, action_type: '', action_payload: {} };
    const [form, setForm] = useState(emptyForm);

    useEffect(() => { fetchAll(); }, []);

    const fetchAll = async () => {
        try {
            const { data } = await axios.get('/api/automations');
            setAutomations(data.automations ?? data);
            setUsers(data.users   ?? []);
            setGroups(data.groups ?? []);
            setStages(data.stages ?? []);
        } catch (e) {
            console.error('Erro ao buscar automações:', e);
        }
    };

    const handleToggle = async (id) => {
        try {
            const { data } = await axios.post(`/api/automations/${id}/toggle`);
            setAutomations(prev => prev.map(a => a.id === id ? data : a));
        } catch { alert('Falha ao alternar status.'); }
    };

    const handleDelete = async (id) => {
        if (!confirm('Deseja realmente apagar esta regra de automação?')) return;
        try {
            await axios.delete(`/api/automations/${id}`);
            fetchAll();
        } catch { alert('Falha ao excluir.'); }
    };

    const openEdit = (automation) => {
        setEditingId(automation.id);
        setForm({
            name:               automation.name,
            trigger_type:       automation.trigger_type,
            trigger_conditions: typeof automation.trigger_conditions === 'string' ? JSON.parse(automation.trigger_conditions) : (automation.trigger_conditions || {}),
            action_type:        automation.action_type,
            action_payload:     typeof automation.action_payload === 'string'     ? JSON.parse(automation.action_payload)     : (automation.action_payload     || {}),
        });
        setIsModalOpen(true);
    };

    const closeModal = () => { setIsModalOpen(false); setEditingId(null); setForm(emptyForm); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.trigger_type || !form.action_type) { alert('Preencha todos os campos obrigatórios.'); return; }
        setLoading(true);
        try {
            const payload = {
                ...form,
                trigger_conditions: Object.keys(form.trigger_conditions).length > 0 ? form.trigger_conditions : null,
                action_payload:     Object.keys(form.action_payload).length     > 0 ? form.action_payload     : null,
                priority: 0,
                is_active: true
            };
            if (editingId) { await axios.put(`/api/automations/${editingId}`, payload); }
            else           { await axios.post('/api/automations', payload); }
            closeModal();
            fetchAll();
        } catch (e) {
            alert('Falha ao salvar: ' + (e.response?.data?.message || e.message));
        } finally { setLoading(false); }
    };

    const setTrigger = (val) => setForm(f => ({ ...f, trigger_type: val, trigger_conditions: {} }));
    const setAction  = (val) => setForm(f => ({ ...f, action_type:  val, action_payload:     {} }));
    const setTC = (key, val) => setForm(f => ({ ...f, trigger_conditions: { ...f.trigger_conditions, [key]: val } }));
    const setAP = (key, val) => setForm(f => ({ ...f, action_payload:     { ...f.action_payload,     [key]: val } }));

    // Resolve human-readable labels for list display
    const resolveLabel = (type, payload = {}) => {
        if (!payload || Object.keys(payload).length === 0) return '';
        if (type === 'assign_user')       { const u = users.find(u => u.id == payload.user_id);   return u ? `→ ${u.name}` : `ID ${payload.user_id}`; }
        if (type === 'transfer_group')    { const g = groups.find(g => g.id == payload.group_id); return g ? `→ ${g.name}` : `ID ${payload.group_id}`; }
        if (type === 'change_deal_stage') { const s = stages.find(s => s.id == payload.stage_id); return s ? `→ ${s.name}` : `ID ${payload.stage_id}`; }
        if (type === 'send_message')      return `"${(payload.message || '').substring(0, 50)}${(payload.message||'').length > 50 ? '…' : ''}"`;
        return '';
    };

    const resolveTriggerLabel = (type, cond = {}) => {
        if (!cond || Object.keys(cond).length === 0) return '';
        if (type === 'stage_changed')    { const s = stages.find(s => s.id == cond.stage_id); return s ? `→ ${s.name}` : ''; }
        if (type === 'new_message')      return cond.content ? `"${cond.content}"` : '';
        if (type === 'deal_closed')      return cond.outcome ? `Resultado: ${cond.outcome === 'won' ? 'Ganho' : 'Perdido'}` : '';
        return '';
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900/50">
            {/* Header */}
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Zap className="mr-3 w-6 h-6 text-yellow-500" /> Automações IF-THIS-THEN-THAT
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Crie lógicas de auto-atendimento baseadas em eventos do CRM e do chat.</p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <Plus className="w-4 h-4 mr-2" /> Criar Automação
                </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-8">
                {automations.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                        <Settings2 className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sem Regras Ativas</h3>
                        <p className="text-gray-500 max-w-sm mx-auto text-sm">O CRM ainda não está automatizando nenhuma tarefa. Crie a primeira regra!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {automations.map(a => (
                            <div key={a.id} className={`bg-white dark:bg-gray-800 rounded-xl border p-5 flex items-center justify-between shadow-sm transition-all ${a.is_active ? 'border-indigo-200 dark:border-indigo-900' : 'border-gray-200 dark:border-gray-700 opacity-60'}`}>
                                <div className="flex items-start gap-4 flex-1 min-w-0">
                                    <div className={`mt-1 p-2 rounded-lg flex-shrink-0 ${a.is_active ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'}`}>
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white">{a.name}</h3>
                                        <div className="mt-2 flex items-center flex-wrap gap-2 text-sm">
                                            <span className="font-semibold text-gray-500 text-xs uppercase tracking-wide">SE:</span>
                                            <span className="bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {getTriggerLabel(a.trigger_type)}
                                            </span>
                                            {resolveTriggerLabel(a.trigger_type, a.trigger_conditions) && (
                                                <span className="text-xs text-gray-400 italic">{resolveTriggerLabel(a.trigger_type, a.trigger_conditions)}</span>
                                            )}
                                            <ChevronRight className="w-3 h-3 text-gray-300" />
                                            <span className="font-semibold text-gray-500 text-xs uppercase tracking-wide">ENTÃO:</span>
                                            <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-800 text-xs font-medium">
                                                {getActionLabel(a.action_type)}
                                            </span>
                                            {resolveLabel(a.action_type, a.action_payload) && (
                                                <span className="text-xs text-gray-400 italic">{resolveLabel(a.action_type, a.action_payload)}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 ml-4">
                                    <button onClick={() => openEdit(a)} className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors" title="Editar">
                                        <Settings2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleToggle(a.id)} className={`p-2 rounded-lg transition-colors ${a.is_active ? 'text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`} title={a.is_active ? 'Desativar' : 'Ativar'}>
                                        <Power className="w-4 h-4" />
                                    </button>
                                    <div className="w-px h-5 bg-gray-200 dark:bg-gray-700" />
                                    <button onClick={() => handleDelete(a.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors" title="Excluir">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col max-h-[92vh]">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-t-2xl">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                                {editingId ? 'Editar Regra de Automação' : 'Criar Nova Regra'}
                            </h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl leading-none">&times;</button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-5">
                            {/* Name */}
                            <div>
                                <label className={LabelClass}>Nome da Automação</label>
                                <input type="text" required placeholder="Ex: Boas-vindas para novos leads" className={InputClass}
                                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                            </div>

                            {/* Trigger Section */}
                            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4 space-y-4 border border-blue-100 dark:border-blue-900">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">1. Gatilho — Quando isso acontecer...</h4>

                                <div>
                                    <label className={LabelClass}>Evento Disparador</label>
                                    <select required className={SelectClass} value={form.trigger_type} onChange={e => setTrigger(e.target.value)}>
                                        <option value="">Selecione o Gatilho</option>
                                        {TRIGGER_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                    </select>
                                </div>

                                {/* Trigger Conditions */}
                                {form.trigger_type === 'stage_changed' && (
                                    <div>
                                        <label className={LabelClass}>E o Estágio de Destino for...</label>
                                        <select className={SelectClass} value={form.trigger_conditions.stage_id || ''} onChange={e => setTC('stage_id', e.target.value)}>
                                            <option value="">Qualquer estágio</option>
                                            {stages.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                        </select>
                                    </div>
                                )}

                                {form.trigger_type === 'new_message' && (
                                    <div>
                                        <label className={LabelClass}>E o texto da mensagem for exatamente:</label>
                                        <input type="text" placeholder="Ex: 1" className={InputClass}
                                            value={form.trigger_conditions.content || ''}
                                            onChange={e => setTC('content', e.target.value)} />
                                        <p className="text-xs text-gray-500 mt-1">Só acionará se o cliente digitar exatamente este texto.</p>
                                    </div>
                                )}

                                {form.trigger_type === 'deal_closed' && (
                                    <div>
                                        <label className={LabelClass}>Com o resultado...</label>
                                        <select className={SelectClass} value={form.trigger_conditions.outcome || ''} onChange={e => setTC('outcome', e.target.value)}>
                                            <option value="">Qualquer (Ganho ou Perdido)</option>
                                            <option value="won">🏆 Apenas Ganhos</option>
                                            <option value="lost">❌ Apenas Perdidos</option>
                                        </select>
                                    </div>
                                )}
                            </div>

                            {/* Action Section */}
                            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-4 space-y-4 border border-green-100 dark:border-green-900">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">2. Ação — Então o sistema deve...</h4>

                                <div>
                                    <label className={LabelClass}>Ação a Executar</label>
                                    <select required className={SelectClass} value={form.action_type} onChange={e => setAction(e.target.value)}>
                                        <option value="">Selecione a Ação</option>
                                        {ACTION_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                    </select>
                                </div>

                                {form.action_type === 'send_message' && (
                                    <div>
                                        <label className={LabelClass}>Texto da Mensagem</label>
                                        <textarea required rows="4" placeholder="Ex: Olá! Bem-vindo. Em que posso ajudar?" className={InputClass}
                                            value={form.action_payload.message || ''}
                                            onChange={e => setAP('message', e.target.value)} />
                                    </div>
                                )}

                                {form.action_type === 'assign_user' && (
                                    <div>
                                        <label className={LabelClass}>Atribuir ao Usuário</label>
                                        <select required className={SelectClass} value={form.action_payload.user_id || ''} onChange={e => setAP('user_id', e.target.value)}>
                                            <option value="">Selecione um usuário</option>
                                            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                                        </select>
                                    </div>
                                )}

                                {form.action_type === 'transfer_group' && (
                                    <div>
                                        <label className={LabelClass}>Transferir para a Fila</label>
                                        <select required className={SelectClass} value={form.action_payload.group_id || ''} onChange={e => setAP('group_id', e.target.value)}>
                                            <option value="">Selecione um setor</option>
                                            {groups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                                        </select>
                                    </div>
                                )}

                                {form.action_type === 'change_deal_stage' && (
                                    <div>
                                        <label className={LabelClass}>Mover para o Estágio</label>
                                        <select required className={SelectClass} value={form.action_payload.stage_id || ''} onChange={e => setAP('stage_id', e.target.value)}>
                                            <option value="">Selecione um estágio</option>
                                            {stages.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </form>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3 bg-white dark:bg-gray-800 rounded-b-2xl">
                            <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">
                                Cancelar
                            </button>
                            <button onClick={handleSubmit} disabled={loading} className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm font-medium text-sm disabled:opacity-50 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                {loading ? 'Salvando...' : 'Salvar Automação'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
