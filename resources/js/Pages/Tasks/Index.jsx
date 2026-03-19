import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
import { 
    CheckSquare, Calendar, AlertCircle, Clock, 
    CheckCircle2, Plus, CalendarDays, MoreVertical, Loader2
} from 'lucide-react';
import CreateTaskModal from '@/Components/Task/CreateTaskModal';

export default function TasksIndex({ tasks = [], deals = [], contacts = [] }) {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [togglingTaskId, setTogglingTaskId] = useState(null);

    // Sidebar Config
    const sidebarMenuItems = [
        { label: 'Painel Visão Geral', icon: Clock, active: true },
    ];

    const sidebarAction = {
        label: 'Nova Tarefa',
        icon: <Plus className="w-5 h-5" />,
        onClick: () => setIsCreateModalOpen(true)
    };

    // Hoje à meia-noite para comparação
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isToday = (dateString) => {
        if (!dateString) return false;
        const d = new Date(dateString);
        return d.getDate() === today.getDate() && 
               d.getMonth() === today.getMonth() && 
               d.getFullYear() === today.getFullYear();
    };

    const isOverdue = (dateString) => {
        if (!dateString) return false;
        const d = new Date(dateString);
        return d < today && !isToday(dateString);
    };

    const isUpcoming = (dateString) => {
        if (!dateString) return true; // sem data fica pra frente
        const d = new Date(dateString);
        return d > today && !isToday(dateString);
    };

    // Agrupamento
    const overdueTasks = tasks.filter(t => !t.is_completed && isOverdue(t.due_date));
    const todayTasks = tasks.filter(t => !t.is_completed && isToday(t.due_date));
    const upcomingTasks = tasks.filter(t => !t.is_completed && isUpcoming(t.due_date));
    const completedTasks = tasks.filter(t => t.is_completed);

    const toggleTask = (task) => {
        setTogglingTaskId(task.id);
        
        axios.put(route('api.tasks.toggle', task.id))
            .then(() => {
                router.reload({ preserveScroll: true, preserveState: true });
            })
            .finally(() => {
                setTogglingTaskId(null);
            });
    };

    const TaskCard = ({ task, late = false }) => (
        <div className={`p-4 rounded-xl border transition-all hover:shadow-md bg-white dark:bg-gray-800 flex items-start gap-4 group ${task.is_completed ? 'opacity-60 border-gray-100 dark:border-gray-800' : (late ? 'border-red-100 dark:border-red-900/40 bg-red-50/30' : 'border-gray-200 dark:border-gray-700')}`}>
            {/* Checkbox Action */}
            <div className="pt-0.5">
                <button 
                    onClick={() => toggleTask(task)}
                    disabled={togglingTaskId === task.id}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                        task.is_completed 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-indigo-500 text-transparent hover:text-indigo-100'
                    }`}
                >
                    {togglingTaskId === task.id ? (
                        <Loader2 className="w-3 h-3 animate-spin text-indigo-500" />
                    ) : (
                        <CheckSquare className={`w-3.5 h-3.5 ${task.is_completed ? 'opacity-100' : 'opacity-0'}`} />
                    )}
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-semibold truncate ${task.is_completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-100'}`}>
                    {task.title}
                </h4>
                
                {/* Meta Data */}
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    {task.due_date && (
                        <span className={`inline-flex items-center gap-1 font-medium ${task.is_completed ? 'text-gray-400' : (late ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400')}`}>
                            <CalendarDays className="w-3.5 h-3.5" />
                            {new Date(task.due_date).toLocaleDateString()}
                        </span>
                    )}

                    {task.deal && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 truncate max-w-[150px]">
                            💼 {task.deal.title}
                        </span>
                    )}

                    {task.contact && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 truncate max-w-[150px]">
                            👤 {task.contact.name}
                        </span>
                    )}
                </div>
            </div>

            {/* Actions Menu */}
            <div>
                <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout
            activeModule="tasks"
            sidebarMenuItems={sidebarMenuItems}
            sidebarAction={sidebarAction}
        >
            <Head title="Tarefas Globais" />

            <div className="h-full bg-gray-50/50 dark:bg-gray-900/20 overflow-y-auto">
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    
                    <div className="mb-8 flex justify-between items-end">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl flex items-center gap-3">
                                <CheckSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-500" />
                                Minhas Tarefas
                            </h1>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Acompanhe seus follow-ups e ligações diárias para nunca perder um negócio.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                        
                        {/* Atrasadas */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b-2 border-red-500/20">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-red-500" />
                                    Atrasadas
                                </h3>
                                <span className="bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 py-0.5 px-2 rounded-full text-xs font-bold">
                                    {overdueTasks.length}
                                </span>
                            </div>
                            <div className="space-y-3">
                                {overdueTasks.map(task => <TaskCard key={task.id} task={task} late={true} />)}
                                {overdueTasks.length === 0 && (
                                    <div className="text-sm text-gray-400 dark:text-gray-500 italic text-center py-4">Nenhuma tarefa atrasada! 🎉</div>
                                )}
                            </div>
                        </div>

                        {/* Hoje */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b-2 border-emerald-500/20">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-emerald-500" />
                                    Para Hoje
                                </h3>
                                <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 py-0.5 px-2 rounded-full text-xs font-bold">
                                    {todayTasks.length}
                                </span>
                            </div>
                            <div className="space-y-3">
                                {todayTasks.map(task => <TaskCard key={task.id} task={task} />)}
                                {todayTasks.length === 0 && (
                                    <div className="text-sm text-gray-400 dark:text-gray-500 italic text-center py-4">Tudo limpo por hoje.</div>
                                )}
                            </div>
                        </div>

                        {/* Próximas */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b-2 border-indigo-500/20">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-indigo-500" />
                                    Próximas
                                </h3>
                                <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 py-0.5 px-2 rounded-full text-xs font-bold">
                                    {upcomingTasks.length}
                                </span>
                            </div>
                            <div className="space-y-3">
                                {upcomingTasks.map(task => <TaskCard key={task.id} task={task} />)}
                                {upcomingTasks.length === 0 && (
                                    <div className="text-sm text-gray-400 dark:text-gray-500 italic text-center py-4">Nenhuma tarefa agendada.</div>
                                )}
                            </div>
                        </div>

                        {/* Concluídas */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b-2 border-gray-500/20 opacity-70">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-gray-500" />
                                    Concluídas
                                </h3>
                                <span className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-0.5 px-2 rounded-full text-xs font-bold">
                                    {completedTasks.length}
                                </span>
                            </div>
                            <div className="space-y-3">
                                {completedTasks.map(task => <TaskCard key={task.id} task={task} />)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <CreateTaskModal 
                isOpen={isCreateModalOpen} 
                onClose={() => setIsCreateModalOpen(false)}
                deals={deals}
                contacts={contacts}
            />
        </AuthenticatedLayout>
    );
}
