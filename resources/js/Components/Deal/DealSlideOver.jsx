import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, User, Car, Calendar, DollarSign, CheckSquare, MessageSquare, Loader2, Tag } from 'lucide-react';

export default function DealSlideOver({ isOpen, onClose, dealId }) {
<<<<<<< HEAD
    const [deal, setDeal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('resumo'); // resumo, tarefas, historico
=======
>>>>>>> c339cb3aa57c6e21cdbc12c0a878389398fc0767
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDueDate, setNewTaskDueDate] = useState('');
    const [actionLoading, setActionLoading] = useState(null); // stores taskId being toggled/deleted

    useEffect(() => {
        if (isOpen && dealId) {
            setLoading(true);
            axios.get(route('api.crm.deals.show', { deal: dealId }))
                .then(response => {
                    setDeal(response.data);
                })
                .catch(error => console.error("Error fetching deal details:", error))
                .finally(() => setLoading(false));
        }
    }, [isOpen, dealId]);

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;

        try {
            const response = await axios.post(route('api.tasks.store', { deal: dealId }), {
                title: newTaskTitle,
                due_date: newTaskDueDate || null
            });
            
            // Update local state
            setDeal(prev => ({
                ...prev,
                tasks: [response.data, ...(prev.tasks || [])]
            }));
            
            setNewTaskTitle('');
            setNewTaskDueDate('');
            setIsAddingTask(false);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleToggleTask = async (taskId) => {
        setActionLoading(taskId);
        try {
            const response = await axios.put(route('api.tasks.toggle', { task: taskId }));
            setDeal(prev => ({
                ...prev,
                tasks: prev.tasks.map(t => t.id === taskId ? response.data : t)
            }));
        } catch (error) {
            console.error("Error toggling task:", error);
        } finally {
            setActionLoading(null);
        }
    };

    const handleDeleteTask = async (taskId) => {
        if (!confirm('Excluir esta tarefa?')) return;
        
        setActionLoading(taskId);
        try {
            await axios.delete(route('api.tasks.destroy', { task: taskId }));
            setDeal(prev => ({
                ...prev,
                tasks: prev.tasks.filter(t => t.id !== taskId)
            }));
        } catch (error) {
            console.error("Error deleting task:", error);
        } finally {
            setActionLoading(null);
        }
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Slide-over panel */}
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="w-screen max-w-md transform transition ease-in-out duration-300 sm:duration-500">
                    <div className="flex h-full flex-col bg-white dark:bg-gray-900 shadow-2xl">
                        
                        {/* Header */}
                        <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80">
                            <div className="flex items-start justify-between">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {loading ? 'Carregando...' : (deal?.vehicle ? `${deal.vehicle.make} ${deal.vehicle.model}` : deal?.title || 'Detalhes da Negociação')}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            
                            {!loading && deal && (
                                <div className="mt-4 flex items-center space-x-3">
                                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                        Fase: {deal.dealStage?.name || 'Desconhecido'}
                                    </span>
                                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                        deal.status === 'won' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                                        deal.status === 'lost' ? 'bg-red-50 text-red-700 ring-red-600/10' :
                                        'bg-blue-50 text-blue-700 ring-blue-700/10'
                                    }`}>
                                        {deal.status === 'open' ? 'Em Andamento' : deal.status === 'won' ? 'Ganho' : 'Perdido'}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-gray-200 dark:border-gray-800 px-6">
                            <nav className="-mb-px flex space-x-6">
                                {['resumo', 'tarefas', 'historico'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`whitespace-nowrap px-1 py-4 border-b-2 font-medium text-sm capitalize ${
                                            activeTab === tab 
                                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Content */}
                        <div className="relative flex-1 overflow-y-auto px-6 py-6">
                            {loading ? (
                                <div className="flex justify-center items-center h-full">
                                    <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                                </div>
                            ) : deal ? (
                                <>
                                    {activeTab === 'resumo' && (
                                        <div className="space-y-8">
                                            {/* Valor */}
                                            <div>
                                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Dados Financeiros</h3>
                                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between border border-gray-100 dark:border-gray-700">
                                                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                                                        <DollarSign className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                                                        <span className="font-medium">Valor do Negócio</span>
                                                    </div>
                                                    <span className="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(deal.value)}</span>
                                                </div>
                                            </div>

                                            {/* Contato */}
                                            {deal.contact && (
                                                <div>
                                                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Cliente / Contato</h3>
                                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
                                                        <div className="flex items-center text-gray-900 dark:text-white font-medium text-lg">
                                                            <User className="w-5 h-5 mr-3 text-indigo-500" />
                                                            {deal.contact.name}
                                                        </div>
                                                        {(deal.contact.phone || deal.contact.email) && (
                                                            <div className="pl-8 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                                                {deal.contact.phone && <p>📞 {deal.contact.phone}</p>}
                                                                {deal.contact.email && <p>✉️ {deal.contact.email}</p>}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Veículo */}
                                            {deal.vehicle && (
                                                <div>
                                                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Veículo de Interesse</h3>
                                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
                                                        <div className="flex items-center text-gray-900 dark:text-white font-medium text-lg">
                                                            <Car className="w-5 h-5 mr-3 text-indigo-500" />
                                                            {deal.vehicle.make} {deal.vehicle.model}
                                                        </div>
                                                        <div className="pl-8 flex space-x-3 text-xs text-gray-500 dark:text-gray-400">
                                                            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{deal.vehicle.year}</span>
                                                            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{deal.vehicle.mileage} km</span>
                                                            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{deal.vehicle.condition === 'new' ? '0km' : 'Seminovos'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Meta */}
                                            <div>
                                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Informações do Sistema</h3>
                                                <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                                    <li className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> Criado em {new Date(deal.created_at).toLocaleDateString()}</li>
                                                    <li className="flex items-center"><Tag className="w-4 h-4 mr-2" /> ID do CRM: #{deal.id}</li>
                                                    {deal.assignee && <li className="flex items-center"><User className="w-4 h-4 mr-2" /> Vendedor: {deal.assignee.name}</li>}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'tarefas' && (
                                        <div className="space-y-4">
                                            {!isAddingTask ? (
                                                <button 
                                                    onClick={() => setIsAddingTask(true)}
                                                    className="w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                                                >
                                                    <CheckSquare className="w-4 h-4 mr-2" />
                                                    Adicionar Nova Tarefa
                                                </button>
                                            ) : (
                                                <form onSubmit={handleAddTask} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900/30 space-y-3">
                                                    <input 
                                                        autoFocus
                                                        type="text" 
                                                        placeholder="O que precisa ser feito?"
                                                        value={newTaskTitle}
                                                        onChange={(e) => setNewTaskTitle(e.target.value)}
                                                        className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-md text-sm focus:ring-indigo-500"
                                                    />
                                                    <div className="flex space-x-2">
                                                        <input 
                                                            type="date"
                                                            value={newTaskDueDate}
                                                            onChange={(e) => setNewTaskDueDate(e.target.value)}
                                                            className="flex-1 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-md text-xs focus:ring-indigo-500"
                                                        />
                                                        <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">Salvar</button>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setIsAddingTask(false)}
                                                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                                                        >
                                                            Cancelar
                                                        </button>
                                                    </div>
                                                </form>
                                            )}

                                            {deal.tasks && deal.tasks.length > 0 ? (
                                                <div className="space-y-3 mt-4">
                                                    {deal.tasks.map(task => (
                                                        <div key={task.id} className="flex items-start group bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-200 transition-colors">
                                                            <input 
                                                                type="checkbox" 
                                                                className="mt-1 flex-shrink-0 w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" 
                                                                checked={task.is_completed} 
                                                                onChange={() => handleToggleTask(task.id)}
                                                                disabled={actionLoading === task.id}
                                                            />
                                                            <div className="ml-3 flex-1 min-w-0">
                                                                <p className={`text-sm font-medium truncate ${task.is_completed ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'}`}>{task.title}</p>
                                                                {task.due_date && <p className="text-xs text-gray-500 mt-1 flex items-center"><Calendar className="w-3 h-3 mr-1" /> {new Date(task.due_date).toLocaleDateString()}</p>}
                                                            </div>
                                                            <button 
                                                                onClick={() => handleDeleteTask(task.id)}
                                                                className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-10">
                                                    <div className="mx-auto w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
                                                        <CheckSquare className="w-6 h-6 text-gray-400" />
                                                    </div>
                                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Sem tarefas</h3>
                                                    <p className="text-xs text-gray-500 mt-1">Crie tarefas como "Ligar para cliente" ou "Enviar proposta PDF".</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {activeTab === 'historico' && (
                                        <div className="text-center py-10">
                                            <div className="mx-auto w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
                                                <MessageSquare className="w-6 h-6 text-gray-400" />
                                            </div>
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Histórico e Anotações</h3>
                                            <p className="text-xs text-gray-500 mt-1">Anotações da negociação aparecerão aqui em breve.</p>
                                            <div className="mt-5">
                                                <textarea className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500" rows="3" placeholder="Digite uma anotação sobre essa venda..."></textarea>
                                                <button className="mt-2 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm py-2 rounded-lg">Salvar Anotação</button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center text-gray-500 py-10">Negociação não encontrada.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
