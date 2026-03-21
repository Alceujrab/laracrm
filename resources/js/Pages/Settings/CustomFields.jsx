import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Edit3, TextCursorInput, ChevronDown, Hash, AlignLeft, Calendar, List, X, Save } from 'lucide-react';

const FIELD_TYPES = [
    { value: 'text',   label: 'Texto livre',   icon: AlignLeft },
    { value: 'number', label: 'Número',         icon: Hash },
    { value: 'date',   label: 'Data',           icon: Calendar },
    { value: 'select', label: 'Lista suspensa', icon: List },
];

const InputClass = 'w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent';

export default function CustomFieldsTab() {
    const [fields,      setFields]      = useState([]);
    const [entityType,  setEntityType]  = useState('contact');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId,   setEditingId]   = useState(null);
    const [loading,     setLoading]     = useState(false);
    const emptyForm = { entity_type: 'contact', label: '', field_type: 'text', options: [], is_required: false };
    const [form, setForm] = useState(emptyForm);
    const [newOption, setNewOption] = useState('');

    useEffect(() => { fetchFields(); }, [entityType]);

    const fetchFields = async () => {
        try {
            const { data } = await axios.get('/api/custom-fields', { params: { entity_type: entityType } });
            setFields(data);
        } catch (e) { console.error(e); }
    };

    const openCreate = () => { setEditingId(null); setForm({ ...emptyForm, entity_type: entityType }); setIsModalOpen(true); };
    const openEdit   = (f) => { setEditingId(f.id); setForm({ entity_type: f.entity_type, label: f.label, field_type: f.field_type, options: f.options || [], is_required: f.is_required }); setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); setEditingId(null); setForm(emptyForm); setNewOption(''); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editingId) { await axios.put(`/api/custom-fields/${editingId}`, form); }
            else            { await axios.post('/api/custom-fields', form); }
            closeModal();
            fetchFields();
        } catch (er) { alert('Erro: ' + (er.response?.data?.message || er.message)); }
        finally { setLoading(false); }
    };

    const handleDelete = async (id) => {
        if (!confirm('Excluir este campo e todos os seus valores?')) return;
        await axios.delete(`/api/custom-fields/${id}`);
        fetchFields();
    };

    const addOption = () => { if (newOption.trim()) { setForm(f => ({ ...f, options: [...f.options, newOption.trim()] })); setNewOption(''); } };
    const removeOption = (i) => setForm(f => ({ ...f, options: f.options.filter((_, idx) => idx !== i) }));

    const TypeIcon = ({ type }) => {
        const t = FIELD_TYPES.find(t => t.value === type);
        const Icon = t?.icon || AlignLeft;
        return <Icon className="w-4 h-4" />;
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center flex-shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <TextCursorInput className="w-6 h-6 text-indigo-500" /> Campos Customizados
                    </h1>
                    <p className="text-sm text-gray-500 mt-0.5">Adicione campos extras para seus contatos e negócios.</p>
                </div>
                <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <Plus className="w-4 h-4" /> Novo Campo
                </button>
            </div>

            {/* Entity Type Tabs */}
            <div className="px-8 flex gap-1 pt-4 flex-shrink-0">
                {['contact', 'deal'].map(t => (
                    <button key={t} onClick={() => setEntityType(t)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${entityType === t ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                        {t === 'contact' ? '👤 Contatos' : '💼 Negócios (CRM)'}
                    </button>
                ))}
            </div>

            {/* Fields List */}
            <div className="flex-1 overflow-y-auto p-8 pt-4">
                {fields.length === 0 ? (
                    <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <TextCursorInput className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Nenhum campo criado</h3>
                        <p className="text-sm text-gray-500 mt-1">Crie campos extras para enriquecer os dados dos seus {entityType === 'contact' ? 'contatos' : 'negócios'}.</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {fields.map(f => (
                            <div key={f.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                        <TypeIcon type={f.field_type} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">{f.label}</p>
                                        <p className="text-xs text-gray-400">{FIELD_TYPES.find(t => t.value === f.field_type)?.label} {f.is_required ? '• Obrigatório' : ''}</p>
                                        {f.options?.length > 0 && <p className="text-xs text-gray-400 mt-0.5">Opções: {f.options.join(', ')}</p>}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => openEdit(f)} className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                                        <Edit3 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleDelete(f.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors">
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
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-2xl border border-gray-200 dark:border-gray-700">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{editingId ? 'Editar Campo' : 'Novo Campo Customizado'}</h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome do Campo</label>
                                <input type="text" required placeholder="Ex: CPF, Código do Cliente" className={InputClass}
                                    value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo do Campo</label>
                                    <select className={InputClass} value={form.field_type} onChange={e => setForm(f => ({ ...f, field_type: e.target.value, options: [] }))}>
                                        {FIELD_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Entidade</label>
                                    <select className={InputClass} value={form.entity_type} onChange={e => setForm(f => ({ ...f, entity_type: e.target.value }))}>
                                        <option value="contact">Contato</option>
                                        <option value="deal">Negócio (CRM)</option>
                                    </select>
                                </div>
                            </div>
                            {form.field_type === 'select' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Opções da Lista</label>
                                    <div className="flex gap-2 mb-2">
                                        <input type="text" placeholder="Ex: Ativo" className={InputClass} value={newOption} onChange={e => setNewOption(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addOption())} />
                                        <button type="button" onClick={addOption} className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">Adicionar</button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {form.options.map((o, i) => (
                                            <span key={i} className="flex items-center gap-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-lg text-xs font-medium">
                                                {o} <button type="button" onClick={() => removeOption(i)}><X className="w-3 h-3" /></button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="is_required" className="rounded" checked={form.is_required} onChange={e => setForm(f => ({ ...f, is_required: e.target.checked }))} />
                                <label htmlFor="is_required" className="text-sm text-gray-700 dark:text-gray-300">Campo obrigatório</label>
                            </div>
                        </form>
                        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3">
                            <button onClick={closeModal} className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Cancelar</button>
                            <button onClick={handleSubmit} disabled={loading} className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium disabled:opacity-50">
                                <Save className="w-4 h-4" /> {loading ? 'Salvando...' : 'Salvar Campo'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
