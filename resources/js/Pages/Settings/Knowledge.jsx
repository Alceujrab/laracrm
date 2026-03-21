import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { 
    Brain, Plus, Trash2, CheckCircle, XCircle, Pencil, 
    Save, X, Wand2, Link as LinkIcon, FileText, Loader2 
} from 'lucide-react';
import axios from 'axios';

export default function Knowledge({ knowledgeItems = [] }) {
    const [isAdding, setIsAdding] = useState(false);
    const [isImporting, setIsImporting] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);

    const { data, setData, post, delete: destroy, processing, reset } = useForm({
        question: '',
        answer: '',
        keywords: '',
        // Para importação
        import_type: 'link',
        import_url: '',
        import_file: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.knowledge.store'), {
            onSuccess: () => {
                setIsAdding(false);
                reset();
            }
        });
    };

    const handleImport = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('type', data.import_type);
        if (data.import_type === 'link') formData.append('url', data.import_url);
        if (data.import_type === 'file') formData.append('file', data.import_file);

        post(route('settings.knowledge.import'), {
            onSuccess: () => {
                setIsImporting(false);
                reset();
            }
        });
    };

    const fetchSuggestions = async () => {
        setLoadingSuggestions(true);
        try {
            const { data } = await axios.get(route('settings.knowledge.suggestions'));
            setSuggestions(data);
        } catch (error) {
            alert('Falha ao obter sugestões da IA.');
        } finally {
            setLoadingSuggestions(false);
        }
    };

    const acceptSuggestion = (suggestion) => {
        setData({
            ...data,
            question: suggestion.question,
            answer: suggestion.answer
        });
        setIsAdding(true);
        setSuggestions(suggestions.filter(s => s !== suggestion));
    };

    const handleDelete = (id) => {
        if (confirm('Excluir este item de conhecimento?')) {
            destroy(route('settings.knowledge.destroy', { id }));
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">Treinamento do Chatbot (IA)</h2>}
        >
            <Head title="Base de Conhecimento" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Coluna Principal: Lista de Conhecimento */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                        <Brain className="w-5 h-5 text-indigo-500" />
                                        Itens de Conhecimento
                                    </h3>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={fetchSuggestions}
                                            disabled={loadingSuggestions}
                                            className="px-4 py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 transition flex items-center gap-2 border border-emerald-200 dark:border-emerald-800"
                                        >
                                            {loadingSuggestions ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                                            Sugerir com IA
                                        </button>
                                        <button
                                            onClick={() => setIsAdding(true)}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                                        >
                                            <Plus className="w-4 h-4" /> Novo Item
                                        </button>
                                    </div>
                                </div>

                                {suggestions.length > 0 && (
                                    <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/30 rounded-xl">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400">Sugestões Geradas pela IA (Clique para Revisar e Salvar)</h4>
                                            <button onClick={() => setSuggestions([])} className="text-emerald-600 hover:text-emerald-700"><X className="w-4 h-4"/></button>
                                        </div>
                                        <div className="space-y-3">
                                            {suggestions.map((s, i) => (
                                                <div key={i} className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{s.question}</span>
                                                    <button onClick={() => acceptSuggestion(s)} className="text-xs bg-emerald-600 text-white px-2 py-1 rounded hover:bg-emerald-700 transition">Usar</button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {isAdding && (
                                    <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-indigo-100 dark:border-indigo-900/30 animate-in slide-in-from-top-4">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pergunta ou Tópico</label>
                                                <input type="text" value={data.question} onChange={e => setData('question', e.target.value)} required className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm sm:text-sm" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Resposta da IA</label>
                                                <textarea value={data.answer} onChange={e => setData('answer', e.target.value)} rows={4} required className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm sm:text-sm"></textarea>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-2">
                                            <button type="submit" disabled={processing} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">Salvar Item</button>
                                            <button type="button" onClick={() => {setIsAdding(false); reset();}} className="px-4 py-2 text-gray-600 dark:text-gray-400">Cancelar</button>
                                        </div>
                                    </form>
                                )}

                                <div className="space-y-4">
                                    {knowledgeItems.map((item) => (
                                        <div key={item.id} className="p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-900 dark:text-white">{item.question}</h4>
                                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{item.answer}</p>
                                                </div>
                                                <button onClick={() => handleDelete(item.id)} className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                    ))}
                                    {knowledgeItems.length === 0 && !isAdding && (
                                        <div className="text-center py-12 text-gray-500">Nenhum item cadastrado. Use o botão acima ou importe dados.</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Coluna Lateral: Importação */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                                    <LinkIcon className="w-5 h-5 text-blue-500" />
                                    Importação Rápida
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">Importe textos, links ou arquivos para treinar sua IA automaticamente.</p>
                                
                                <form onSubmit={handleImport} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Tipo de Fonte</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button 
                                                type="button" 
                                                onClick={() => setData('import_type', 'link')}
                                                className={`p-2 rounded-lg border text-sm flex items-center justify-center gap-2 ${data.import_type === 'link' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/30' : 'border-gray-200 dark:border-gray-700 dark:text-white'}`}
                                            >
                                                <LinkIcon className="w-4 h-4" /> Link/URL
                                            </button>
                                            <button 
                                                type="button" 
                                                onClick={() => setData('import_type', 'file')}
                                                className={`p-2 rounded-lg border text-sm flex items-center justify-center gap-2 ${data.import_type === 'file' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/30' : 'border-gray-200 dark:border-gray-700 dark:text-white'}`}
                                            >
                                                <FileText className="w-4 h-4" /> Arquivo
                                            </button>
                                        </div>
                                    </div>

                                    {data.import_type === 'link' ? (
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">URL Completa</label>
                                            <input 
                                                type="url" 
                                                value={data.import_url}
                                                onChange={e => setData('import_url', e.target.value)}
                                                placeholder="https://exemplo.com/faq"
                                                className="w-full text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md"
                                                required={data.import_type === 'link'}
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Upload de Arquivo (TXT, XML, HTML)</label>
                                            <input 
                                                type="file" 
                                                onChange={e => setData('import_file', e.target.files[0])}
                                                accept=".txt,.xml,.html"
                                                className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                                required={data.import_type === 'file'}
                                            />
                                        </div>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={processing}
                                        className="w-full py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-bold hover:bg-black transition disabled:opacity-50"
                                    >
                                        {processing ? 'Processando Fonte...' : 'Importar e Treinar'}
                                    </button>
                                </form>

                                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-lg">
                                    <p className="text-[10px] text-yellow-800 dark:text-yellow-400 leading-relaxed uppercase font-bold">Aviso de IA</p>
                                    <p className="text-xs text-yellow-700 dark:text-yellow-500 mt-1">Nossa IA resumirá o conteúdo da fonte em perguntas e respostas curtas. Revise os itens gerados na lista ao lado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
