import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { Briefcase, CheckSquare, Users, Award, Target, Plus, MoreHorizontal, Filter, Search, Calendar } from 'lucide-react';
import Contatos from './Tabs/Contatos';

export default function CRMIndex({ stages = [] }) {
    const [activeTab, setActiveTab] = useState('negociacoes');
    const [localStages, setLocalStages] = useState(stages);
    const [draggingDeal, setDraggingDeal] = useState(null);

    // Sync state if props change
    React.useEffect(() => {
        setLocalStages(stages);
    }, [stages]);

    const crmMenu = [
        { label: 'Negociações', icon: Briefcase, active: activeTab === 'negociacoes', id: 'negociacoes' },
        { label: 'Tarefas', icon: CheckSquare, active: activeTab === 'tarefas', id: 'tarefas' },
        { label: 'Contatos', icon: Users, active: activeTab === 'contatos', id: 'contatos' },
        { label: 'Campanhas', icon: Award, active: activeTab === 'campanhas', id: 'campanhas' },
        { label: 'Metas', icon: Target, active: activeTab === 'metas', id: 'metas' },
    ];

    const sidebarAction = {
        label: '+ Novo Negócio',
        icon: null,
        onClick: () => console.log('Add deal modal')
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
    };

    // Native HTML5 Drag and Drop Handlers
    const handleDragStart = (e, deal, sourceStageId) => {
        setDraggingDeal(deal.id);
        e.dataTransfer.effectAllowed = 'move';
        // Some browsers require data to be set
        e.dataTransfer.setData('text/plain', JSON.stringify({ dealId: deal.id, sourceStageId: sourceStageId }));
    };

    const handleDragEnd = () => {
        setDraggingDeal(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, destStageId) => {
        e.preventDefault();
        setDraggingDeal(null);

        const dataStr = e.dataTransfer.getData('text/plain');
        if (!dataStr) return;
        
        try {
            const { dealId, sourceStageId } = JSON.parse(dataStr);
            
            if (sourceStageId.toString() === destStageId.toString()) return;

            // Optimistic update
            let movedDeal = null;
            const newStages = localStages.map(stage => {
                if (stage.id.toString() === sourceStageId.toString()) {
                    const clonedDeals = [...(stage.deals || [])];
                    const index = clonedDeals.findIndex(d => d.id === dealId);
                    if (index > -1) {
                        movedDeal = clonedDeals.splice(index, 1)[0];
                        return { ...stage, deals: clonedDeals };
                    }
                }
                return stage;
            });

            if (movedDeal) {
                const finalStages = newStages.map(stage => {
                    if (stage.id.toString() === destStageId.toString()) {
                        return { ...stage, deals: [...(stage.deals || []), movedDeal] };
                    }
                    return stage;
                });
                
                setLocalStages(finalStages);

                // API Sync
                router.put(route('crm.deals.move', { deal: movedDeal.id }), {
                    deal_stage_id: destStageId
                }, { preserveScroll: true, preserveState: true });
            }
        } catch (error) {
            console.error("Drop syntax error:", error);
        }
    };

    // Subcomponents
    const renderNegociacoes = () => (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900/50">
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10 w-full">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Funil de Vendas</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Gerencie suas negociações arrastando os cards pelos estágios.</p>
                </div>
                
                <div className="flex space-x-3">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                        <input type="text" placeholder="Buscar negócio..." className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-64 dark:text-gray-200 transition-all font-medium" />
                    </div>
                    <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                        <Filter className="w-4 h-4 mr-2" /> Filtros
                    </button>
                    <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                        <Plus className="w-4 h-4 mr-2" /> Criar Funil
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-x-auto overflow-y-hidden p-8">
                <div className="flex space-x-6 h-full items-start">
                    {localStages.map((stage) => {
                        const stageTotal = stage.deals?.reduce((acc, deal) => acc + parseFloat(deal.value || 0), 0) || 0;
                        const dealCount = stage.deals?.length || 0;

                        return (
                            <div key={stage.id} className="flex-shrink-0 w-80 flex flex-col max-h-full">
                                <div 
                                    className="bg-white dark:bg-gray-800 p-4 rounded-t-xl border-t-4 shadow-sm mb-3 relative" 
                                    style={{ borderTopColor: stage.color || '#e5e7eb' }}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800 dark:text-white">{stage.name}</h3>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><MoreHorizontal className="w-5 h-5" /></button>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">{formatCurrency(stageTotal)}</span>
                                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">{dealCount} Negócios</span>
                                    </div>
                                </div>
                                
                                {/* Droppable Area */}
                                <div 
                                    className="flex-1 overflow-y-auto space-y-3 pb-4 pr-1 scrollbar-hide min-h-[100px]"
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, stage.id)}
                                >
                                    {stage.deals?.map((deal) => (
                                        <div 
                                            key={deal.id}
                                            draggable
                                            onDragStart={(e) => handleDragStart(e, deal, stage.id)}
                                            onDragEnd={handleDragEnd}
                                            className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border ${
                                                draggingDeal === deal.id ? 'opacity-50 border-indigo-400 shadow-lg scale-105' : 'border-gray-100 dark:border-gray-700'
                                            } cursor-grab active:cursor-grabbing hover:shadow-md hover:border-indigo-300 transition-all group`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded tracking-wider ${
                                                    deal.status === 'won' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' :
                                                    deal.status === 'lost' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' :
                                                    'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
                                                }`}>
                                                    {deal.status === 'open' ? 'Aberto' : deal.status}
                                                </span>
                                                <button className="text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal className="w-4 h-4" /></button>
                                            </div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 text-balance">
                                                {deal.vehicle ? `${deal.vehicle.make} ${deal.vehicle.model}` : deal.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 truncate">👥 {deal.contact?.name || 'Sem contato'}</p>
                                            <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">{formatCurrency(deal.value)}</p>
                                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400"><Calendar className="w-3 h-3 mr-1" /> {new Date(deal.created_at).toLocaleDateString()}</div>
                                                {deal.assignee && (
                                                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:text-indigo-300 ring-2 ring-white">
                                                        {deal.assignee.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* Invisible padding drop zone for empty columns */}
                                    <div className="h-20 w-full opacity-0 pointer-events-none"></div>
                                </div>
                            </div>
                        );
                    })}
                    
                    <div className="flex-shrink-0 w-80 flex flex-col pt-1">
                        <button className="flex items-center justify-center w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-500 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all font-medium">
                            <Plus className="w-5 h-5 mr-2" /> Adicionar Estágio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPlaceholder = (title, desc) => (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50 dark:bg-gray-950">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{title}</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">{desc}</p>
        </div>
    );

    return (
        <AuthenticatedLayout
            activeModule="crm"
            sidebarMenuItems={crmMenu.map(item => ({...item, onClick: () => setActiveTab(item.id)}))}
            sidebarAction={sidebarAction}
        >
            <Head title={`CRM - ${activeTab}`} />

            {activeTab === 'negociacoes' && renderNegociacoes()}
            {activeTab === 'contatos' && <Contatos />}
            {activeTab === 'tarefas' && renderPlaceholder('Gerenciamento de Tarefas', 'Agendamentos e to-dos focados em lembretes para ações e follow-ups com contatos.')}
            {activeTab === 'campanhas' && renderPlaceholder('Disparos de Campanhas Outbound', 'Fluxo Wizard Modal de + Nova Campanha com canais WhatsApp, E-mail ou SMS integrados.')}
            {activeTab === 'metas' && renderPlaceholder('Metas do Equipe', 'Indicadores Gauge e Termômetros avaliando performance da equipe via R$.')}
        </AuthenticatedLayout>
    );
}
