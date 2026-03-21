import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Edit3, MessageSquareQuote, Search, X, Save, Globe, User } from 'lucide-react';

const InputClass = 'w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent';

export default function QuickRepliesTab() {
    const [replies,     setReplies]     = useState([]);
    const [search,      setSearch]      = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId,   setEditingId]   = useState(null);
    const [loading,     setLoading]     = useState(false);
    const [fetching,    setFetching]    = useState(true);
    const [apiError,    setApiError]    = useState(null);
    const emptyForm = { title: '', content: '', category: '', is_global: false };
    const [form, setForm] = useState(emptyForm);

    useEffect(() => { fetchReplies(); }, []);

    const fetchReplies = async () => {
        setFetching(true);
        setApiError(null);
        try {
            const { data } = await axios.get('/api/quick-replies');
            setReplies(Array.isArray(data) ? data : []);
        } catch (e) {
            console.error(e);
            setApiError(e.response?.data?.message || e.message || 'Erro ao carregar frases rápidas. Verifique se as migrações foram executadas no servidor.');
        } finally {
            setFetching(false);
        }
    };

    const openCreate = () => { setEditingId(null); setForm(emptyForm); setIsModalOpen(true); };
    const openEdit   = (r) => { setEditingId(r.id); setForm({ title: r.title, content: r.content, category: r.category || '', is_global: r.user_id === null }); setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); setEditingId(null); setForm(emptyForm); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editingId) { await axios.put(`/api/quick-replies/${editingId}`, form); }
            else            { await axios.post('/api/quick-replies', form); }
            closeModal();
            fetchReplies();
        } catch (er) { alert('Erro: ' + (er.response?.data?.message || er.message)); }
        finally { setLoading(false); }
    };

    const handleDelete = async (id) => {
        if (!confirm('Excluir esta frase rápida?')) return;
        await axios.delete(`/api/quick-replies/${id}`);
        fetchReplies();
    };

    const filtered = replies.filter(r =>
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.content.toLowerCase().includes(search.toLowerCase())
    );

    // Group by category
    const grouped = filtered.reduce((acc, r) => {
        const cat = r.category || 'Sem categoria';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(r);
        return acc;
    }, {});

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center flex-shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <MessageSquareQuote className="w-6 h-6 text-indigo-500" /> Frases Rápidas
                    </h1>
                    <p className="text-sm text-gray-500 mt-0.5">Respostas prontas que os operadores podem inserir no chat com um clique.</p>
                </div>
                <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <Plus className="w-4 h-4" /> Nova Frase
                </button>
            </div>

            {/* Search */}
            <div className="px-8 pt-4 pb-2 flex-shrink-0">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Buscar por título ou conteúdo..." className={InputClass + ' pl-10'} value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-8 pt-4 space-y-6">
                {fetching ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                        <span className="ml-3 text-gray-500 text-sm">Carregando frases...</span>
                    </div>
                ) : apiError ? (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
                        <p className="text-red-700 dark:text-red-400 font-medium text-sm">⚠️ Erro ao carregar frases rápidas</p>
                        <p className="text-red-500 dark:text-red-500 text-xs mt-2">{apiError}</p>
                        <p className="text-gray-500 text-xs mt-3">Execute no servidor: <code className="font-mono bg-gray-100 px-1 rounded">git pull && php artisan migrate</code></p>
                        <button onClick={fetchReplies} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Tentar novamente</button>
                    </div>
                ) : Object.keys(grouped).length === 0 ? (
                    <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <MessageSquareQuote className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Nenhuma frase cadastrada</h3>
                        <p className="text-sm text-gray-500 mt-1">Crie respostas prontas para agilizar o atendimento no inbox.</p>
                    </div>
                ) : (
                    Object.entries(grouped).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                                <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                                {category}
                                <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                            </h3>
                            <div className="space-y-2">
                                {items.map(r => (
                                    <div key={r.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-start justify-between shadow-sm">
                                        <div className="flex-1 min-w-0 mr-4">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-indigo-700 dark:text-indigo-400 text-sm">/{r.title}</span>
                                                {r.user_id === null
                                                    ? <span className="flex items-center gap-1 text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded"><Globe className="w-3 h-3" /> Global</span>
                                                    : <span className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded"><User className="w-3 h-3" /> Minha</span>
                                                }
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">{r.content}</p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <button onClick={() => openEdit(r)} className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleDelete(r.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-2xl border border-gray-200 dark:border-gray-700">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{editingId ? 'Editar Frase Rápida' : 'Nova Frase Rápida'}</h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Atalho (sem espaço)</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">/</span>
                                        <input type="text" required placeholder="saudacao" className={InputClass + ' pl-6'}
                                            value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value.replace(/\s/g, '_') }))} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categoria (opcional)</label>
                                    <input type="text" placeholder="Ex: Vendas, Suporte" className={InputClass}
                                        value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Conteúdo da Mensagem</label>
                                <textarea required rows="5" placeholder="Olá! Seja bem-vindo à Elite Veículos. Como posso ajudá-lo hoje?" className={InputClass}
                                    value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} />
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                                <input type="checkbox" id="is_global" className="rounded accent-green-600 w-4 h-4" checked={form.is_global} onChange={e => setForm(f => ({ ...f, is_global: e.target.checked }))} />
                                <label htmlFor="is_global" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                                    <Globe className="inline w-3.5 h-3.5 text-green-600 mr-1" />
                                    Compartilhar com toda a equipe (Global)
                                </label>
                            </div>
                        </form>
                        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3">
                            <button onClick={closeModal} className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Cancelar</button>
                            <button onClick={handleSubmit} disabled={loading} className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium disabled:opacity-50">
                                <Save className="w-4 h-4" /> {loading ? 'Salvando...' : 'Salvar Frase'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
