import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Brain, Plus, Trash2, CheckCircle, XCircle, Pencil, Save, X } from 'lucide-react';

export default function Knowledge({ knowledgeItems = [] }) {
    const [isAdding, setIsAdding] = useState(false);
    const { data, setData, post, delete: destroy, processing, reset } = useForm({
        question: '',
        answer: '',
        keywords: ''
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
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                        <Brain className="w-5 h-5 text-indigo-500" />
                                        Base de Conhecimento
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Cadastre informações sobre sua loja para que o robô responda corretamente.</p>
                                </div>
                                <button
                                    onClick={() => setIsAdding(true)}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" /> Novo Item
                                </button>
                            </div>

                            {isAdding && (
                                <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tópico ou Pergunta Comum</label>
                                            <input
                                                type="text"
                                                value={data.question}
                                                onChange={e => setData('question', e.target.value)}
                                                placeholder="Ex: Qual o horário de atendimento?"
                                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Resposta da IA (Informação Base)</label>
                                            <textarea
                                                value={data.answer}
                                                onChange={e => setData('answer', e.target.value)}
                                                rows={4}
                                                placeholder="Ex: Funcionamos de segunda a sexta das 08h às 18h e aos sábados das 09h às 13h."
                                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                                        >
                                            Salvar Item
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsAdding(false)}
                                            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            Cancelar
                                        </button>
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
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {knowledgeItems.length === 0 && !isAdding && (
                                    <div className="text-center py-12 text-gray-500">
                                        Nenhum item de conhecimento cadastrado. Adicione informações para o bot aprender.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
