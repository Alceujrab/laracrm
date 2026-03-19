import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { X, DollarSign, Type, User } from 'lucide-react';

export default function CreateDealModal({ isOpen, onClose, stages = [], contacts = [] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        value: '',
        deal_stage_id: '',
        contact_id: '',
        status: 'open',
    });

    // Auto-select the first stage when modal opens if not selected
    useEffect(() => {
        if (isOpen && !data.deal_stage_id && stages.length > 0) {
            setData('deal_stage_id', stages[0].id);
        }
    }, [isOpen, stages]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('crm.deals.store'), {
            onSuccess: () => {
                reset();
                onClose();
            }
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Novo Negócio</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Título da Negociação *</label>
                        <div className="relative">
                            <Type className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                            <input 
                                type="text"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
                                placeholder="Ex: Venda Honda Civic"
                                required
                            />
                        </div>
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contato Associado *</label>
                        <div className="relative">
                            <User className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                            <select 
                                value={data.contact_id}
                                onChange={e => setData('contact_id', e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none"
                                required
                            >
                                <option value="" disabled>Selecione um Cliente</option>
                                {contacts.map(c => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        {errors.contact_id && <p className="text-red-500 text-xs mt-1">{errors.contact_id}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Valor Previsto (R$)</label>
                        <div className="relative">
                            <DollarSign className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                            <input 
                                type="number"
                                step="0.01"
                                value={data.value}
                                onChange={e => setData('value', e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
                                placeholder="Ex: 85000.00"
                            />
                        </div>
                        {errors.value && <p className="text-red-500 text-xs mt-1">{errors.value}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estágio Inicial *</label>
                        <select 
                            value={data.deal_stage_id}
                            onChange={e => setData('deal_stage_id', e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
                            required
                        >
                            <option value="" disabled>Selecione um Estágio</option>
                            {stages.map(stage => (
                                <option key={stage.id} value={stage.id}>{stage.name}</option>
                            ))}
                        </select>
                        {errors.deal_stage_id && <p className="text-red-500 text-xs mt-1">{errors.deal_stage_id}</p>}
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit"
                            disabled={processing || !data.title || !data.deal_stage_id || !data.contact_id}
                            className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-medium transition-all shadow-sm shadow-indigo-200"
                        >
                            {processing ? 'Criando...' : 'Criar Negócio'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
