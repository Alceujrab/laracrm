import React, { useState, useEffect, useRef } from 'react';
import { useForm, router } from '@inertiajs/react';
import { 
    Settings, Plus, GripVertical, Pencil, Trash2, X, Check,
    AlertCircle, Palette
} from 'lucide-react';
import Sortable from 'sortablejs';

const PRESET_COLORS = [
    { label: 'Azul Indigo', value: '#6366F1' },
    { label: 'Esmeralda', value: '#10B981' },
    { label: 'Ouro', value: '#F59E0B' },
    { label: 'Rosa-choque', value: '#EC4899' },
    { label: 'Violeta', value: '#8B5CF6' },
    { label: 'Cinza', value: '#6B7280' },
    { label: 'Vermelha', value: '#EF4444' },
    { label: 'Ciano', value: '#06B6D4' },
];

export default function ConfiguracoesFunil({ stages = [] }) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingStage, setEditingStage] = useState(null);
    const listRef = useRef(null);
    const sortableRef = useRef(null);

    const { data, setData, post, put, delete: destroy, processing, reset, errors } = useForm({
        name: '',
        color: '#6366F1',
        rules: {
            require_phone: false,
            require_tasks_completed: false
        }
    });

    useEffect(() => {
        if (listRef.current && !sortableRef.current) {
            sortableRef.current = new Sortable(listRef.current, {
                handle: '.drag-handle',
                animation: 150,
                onEnd: (evt) => {
                    const rows = Array.from(listRef.current.children);
                    const newOrder = rows.map((row, index) => ({
                        id: row.dataset.id,
                        order: index + 1
                    }));
                    
                    router.put(route('crm.stages.reorder'), {
                        stages: newOrder
                    }, { preserveScroll: true });
                }
            });
        }
        return () => {
            if (sortableRef.current) {
                sortableRef.current.destroy();
                sortableRef.current = null;
            }
        };
    }, [stages]);

    const handleAdd = (e) => {
        e.preventDefault();
        post(route('crm.stages.store'), {
            onSuccess: () => {
                setIsAdding(false);
                reset();
            }
        });
    };

    const handleEdit = (stage) => {
        setEditingStage(stage);
        setData({
            name: stage.name,
            color: stage.color || '#6366F1',
            rules: stage.rules || {
                require_phone: false,
                require_tasks_completed: false
            }
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        put(route('crm.stages.update', { stage: editingStage.id }), {
            onSuccess: () => {
                setEditingStage(null);
                reset();
            }
        });
    };

    const handleDelete = (id) => {
        if (confirm('Tem certeza que deseja excluir este estágio? Esta ação só será permitida se não houver negociações vinculadas.')) {
            destroy(route('crm.stages.destroy', { stage: id }));
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Settings className="w-6 h-6 text-indigo-500" />
                        Configurações do Funil
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Gerencie as etapas e cores do seu processo de vendas.</p>
                </div>
                <button 
                    onClick={() => { setIsAdding(true); reset(); }}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm shadow-indigo-200"
                >
                    <Plus className="w-4 h-4" />
                    Novo Estágio
                </button>
            </div>

            {/* Stage List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 px-6 py-3 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="col-span-1">Ordem</div>
                    <div className="col-span-6">Nome do Estágio</div>
                    <div className="col-span-2 text-center">Cor</div>
                    <div className="col-span-3 text-right">Ações</div>
                </div>
                
                <div ref={listRef}>
                    {stages.map((stage, index) => (
                        <div 
                            key={stage.id} 
                            data-id={stage.id}
                            className="grid grid-cols-12 px-6 py-4 items-center border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700 group transition-colors"
                        >
                            <div className="col-span-1 flex items-center">
                                <GripVertical className="w-5 h-5 text-gray-300 dark:text-gray-600 drag-handle cursor-grab active:cursor-grabbing group-hover:text-gray-400" />
                                <span className="ml-2 text-sm text-gray-500">{index + 1}</span>
                            </div>
                            <div className="col-span-6">
                                <span className="font-medium text-gray-900 dark:text-white">{stage.name}</span>
                            </div>
                            <div className="col-span-2 flex justify-center">
                                <div 
                                    className="w-4 h-4 rounded-full ring-2 ring-offset-2 ring-transparent" 
                                    style={{ backgroundColor: stage.color, ringColor: stage.color }}
                                ></div>
                            </div>
                            <div className="col-span-3 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                    onClick={() => handleEdit(stage)}
                                    className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
                                    title="Editar"
                                >
                                    <Pencil className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={() => handleDelete(stage.id)}
                                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                                    title="Excluir"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Add/Edit */}
            {(isAdding || editingStage) && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {isAdding ? 'Novo Estágio' : 'Editar Estágio'}
                            </h3>
                            <button onClick={() => { setIsAdding(false); setEditingStage(null); reset(); }} className="text-gray-400 hover:text-gray-500">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <form onSubmit={isAdding ? handleAdd : handleUpdate} className="p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome do Estágio</label>
                                <input 
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
                                    placeholder="Ex: Proposta Enviada"
                                    autoFocus
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                    <Palette className="w-4 h-4" /> Cor de Identificação
                                </label>
                                <div className="grid grid-cols-4 gap-3">
                                    {PRESET_COLORS.map(color => (
                                        <button
                                            key={color.value}
                                            type="button"
                                            onClick={() => setData('color', color.value)}
                                            className={`h-10 rounded-xl border-2 transition-all flex items-center justify-center ${data.color === color.value ? 'border-indigo-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                            style={{ backgroundColor: color.value }}
                                        >
                                            {data.color === color.value && <Check className="w-5 h-5 text-white drop-shadow-sm" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Regras Dinâmicas do Estágio */}
                            <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-4">
                                    Regras e Restrições do Estágio
                                </label>
                                
                                <div className="space-y-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="relative flex items-center justify-center mt-1">
                                            <input 
                                                type="checkbox" 
                                                checked={data.rules.require_phone}
                                                onChange={e => setData('rules', { ...data.rules, require_phone: e.target.checked })}
                                                className="peer sr-only" 
                                            />
                                            <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">Exigir Telefone Cadastrado</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Impede que o negócio seja movido para cá se o contato não possuir número de telefone.</p>
                                        </div>
                                    </label>

                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="relative flex items-center justify-center mt-1">
                                            <input 
                                                type="checkbox" 
                                                checked={data.rules.require_tasks_completed}
                                                onChange={e => setData('rules', { ...data.rules, require_tasks_completed: e.target.checked })}
                                                className="peer sr-only" 
                                            />
                                            <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">Exigir Tarefas Concluídas</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Bloqueia a mudança de estágio se houver atividades/tarefas pendentes no card.</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Info Alert if deleting isn't possible (conceptual for now) */}
                            {!isAdding && editingStage && (
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg flex gap-3 text-xs text-blue-700 dark:text-blue-300">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>Ao mudar o nome deste estágio, todos os cards existentes serão atualizados automaticamente.</span>
                                </div>
                            )}

                            <div className="flex gap-3 pt-2">
                                <button 
                                    type="button"
                                    onClick={() => { setIsAdding(false); setEditingStage(null); reset(); }}
                                    className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit"
                                    disabled={processing || !data.name}
                                    className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-medium transition-all shadow-sm shadow-indigo-200"
                                >
                                    {processing ? 'Salvando...' : 'Salvar Alterações'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
