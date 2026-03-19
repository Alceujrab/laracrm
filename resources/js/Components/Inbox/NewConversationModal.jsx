import React from 'react';
import { useForm } from '@inertiajs/react';
import { X, User, Zap } from 'lucide-react';
import axios from 'axios';

export default function NewConversationModal({ isOpen, onClose, contacts = [], channels = [], onSuccess }) {
    const { data, setData, processing, errors, reset } = useForm({
        contact_id: '',
        channel_id: '',
    });

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/inbox/conversations', data);
            reset();
            onClose();
            if(onSuccess) onSuccess(response.data);
        } catch (error) {
            alert('Erro ao iniciar a conversa. Verifique se escolheu um contato e um canal ativo.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-indigo-500" /> Nova Conversa Ativa
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Escolha o Contato *</label>
                        <div className="relative">
                            <User className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                            <select 
                                value={data.contact_id}
                                onChange={e => setData('contact_id', e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none"
                                required
                            >
                                <option value="" disabled>Selecione da Agenda</option>
                                {contacts.map(c => (
                                    <option key={c.id} value={c.id}>{c.name} ({c.phone})</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Caminho de Disparo (Canal) *</label>
                        <select 
                            value={data.channel_id}
                            onChange={e => setData('channel_id', e.target.value)}
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none"
                            required
                        >
                            <option value="" disabled>Selecione um Botão de Saída</option>
                            {channels.map(ch => (
                                <option key={ch.id} value={ch.id}>{ch.identifier} ({ch.type})</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-gray-100 dark:border-gray-700 mt-6">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit"
                            disabled={processing || !data.contact_id || !data.channel_id}
                            className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-medium transition-all shadow-sm shadow-indigo-200"
                        >
                            {processing ? 'Iniciando...' : 'Iniciar Conversa'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
