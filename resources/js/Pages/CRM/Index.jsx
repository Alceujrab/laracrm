import React, { useState, useEffect, useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import {
    LayoutDashboard, Users, User, Phone, Mail, Calendar,
    Search, Filter, Plus, ChevronRight, MoreHorizontal,
    MessageCircle, Clock, AlertCircle, TrendingUp,
    CheckCircle2, GripVertical, Settings, X
} from 'lucide-react';
import Contatos from './Tabs/Contatos';
import DealSlideOver from '@/Components/Deal/DealSlideOver';
import CreateDealModal from '@/Components/Deal/CreateDealModal';
import ConfiguracoesFunil from './Tabs/ConfiguracoesFunil';
import Sortable from 'sortablejs';

export default function CRMIndex({ stages = [], contacts = [], filters = {}, closedDeals = [], closedStats = {} }) {
    const [activeTab, setActiveTab] = useState('negociacoes');
    const [selectedDealId, setSelectedDealId] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [errorToast, setErrorToast] = useState(null);
    const [closedFilter, setClosedFilter] = useState('all'); // all, won, lost
    const [closedSearch, setClosedSearch] = useState('');
    const containerRefs = useRef([]);
    const sortablesRefs = useRef([]);

    const crmMenu = [
        { label: 'Negociações', icon: LayoutDashboard, active: activeTab === 'negociacoes', id: 'negociacoes' },
        { label: 'Propostas', icon: TrendingUp, active: activeTab === 'propostas', id: 'propostas' },
        { label: 'Ganhos', icon: CheckCircle2, active: activeTab === 'ganhos', id: 'ganhos' },
        { label: 'Configurações', icon: Settings, active: activeTab === 'configuracoes', id: 'configuracoes' },
    ];

    const sidebarAction = {
        label: '+ Novo Negócio',
        icon: null,
        onClick: () => setIsCreateModalOpen(true)
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
    };

    useEffect(() => {
        if (activeTab !== 'negociacoes') return;

        // Cleanup function for first initialization and subsequent stage updates
        const cleanup = () => {
            if (sortablesRefs.current) {
                sortablesRefs.current.forEach(s => {
                    if (s && typeof s.destroy === 'function') {
                        try { s.destroy(); } catch (e) { console.warn("Sortable cleanup error:", e); }
                    }
                });
            }
            sortablesRefs.current = [];
        };

        cleanup();

        // Initialize Sortable on every container
        containerRefs.current.forEach((container, index) => {
            if (container && container.nodeType === 1) { // Ensure it's a DOM element
                try {
                    sortablesRefs.current[index] = new Sortable(container, {
                        group: 'shared-deals',
                        animation: 150,
                        ghostClass: 'opacity-50',
                        dragClass: 'shadow-2xl',
                        onEnd: (evt) => {
                            const itemEl = evt.item;
                            const dealId = itemEl.dataset.dealId;
                            const destStageId = evt.to.dataset.stageId;
                            const sourceStageId = evt.from.dataset.stageId;

                            if (sourceStageId !== destStageId && dealId && destStageId) {
                                // Sync API - Sortable already moved the DOM element
                                router.put(route('crm.deals.move', { deal: dealId }), {
                                    deal_stage_id: destStageId
                                }, { 
                                    preserveScroll: true, 
                                    preserveState: false, // Força re-render para recuar o card ao lugar certo se falhar
                                    onError: (errors) => {
                                        if (errors.message) {
                                            setErrorToast(errors.message);
                                            setTimeout(() => setErrorToast(null), 6000);
                                        }
                                    }
                                });
                            }
                        }
                    });
                } catch (err) {
                    console.error("Sortable init error at index " + index, err);
                }
            }
        });

        return cleanup;
    }, [stages, activeTab]);

    // Search Debounce Logic
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            router.get(route('crm.index'),
                { search: searchTerm },
                {
                    preserveState: true,
                    replace: true,
                    preserveScroll: true
                }
            );
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

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
                        <input
                            type="text"
                            placeholder="Buscar negócio..."
                            className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-64 dark:text-gray-200 transition-all font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                        <Filter className="w-4 h-4 mr-2" /> Filtros
                    </button>
                    <button onClick={() => setActiveTab('configuracoes')} className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                        <Settings className="w-4 h-4 mr-2" /> Configurar Funil
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-x-auto overflow-y-hidden p-8">
                <div className="flex space-x-6 h-full items-start">
                    {stages.map((stage, index) => {
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
                                
                                {/* Droppable Area Managed by SortableJS */}
                                <div 
                                    ref={el => containerRefs.current[index] = el}
                                    data-stage-id={stage.id}
                                    className="flex-1 overflow-y-auto space-y-3 pb-4 pr-1 scrollbar-hide min-h-[150px]"
                                >
                                    {stage.deals?.map((deal) => (
                                        <div 
                                            key={deal.id}
                                            data-deal-id={deal.id}
                                            onClick={() => setSelectedDealId(deal.id)}
                                            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 cursor-grab active:cursor-grabbing hover:shadow-md hover:border-indigo-300 transition-all group"
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
                                </div>
                            </div>
                        );
                    })}
                    
                    <div className="flex-shrink-0 w-80 flex flex-col pt-1">
                        <button 
                            onClick={() => setActiveTab('configuracoes')}
                            className="flex items-center justify-center w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-500 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all font-medium"
                        >
                            <Plus className="w-5 h-5 mr-2" /> Adicionar Estágio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPropostas = () => (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50 dark:bg-gray-950">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Módulo de Propostas</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">Em breve: crie e gerencie propostas comerciais integradas ao funil.</p>
        </div>
    );

    const renderConfiguracoes = () => (
        <ConfiguracoesFunil stages={stages} />
    );

    const renderGanhos = () => {
        const fmt = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0);
        const { wonTotal = 0, lostTotal = 0, wonCount = 0, lostCount = 0, winRate = 0 } = closedStats;
        
        const filtered = closedDeals
            .filter(d => closedFilter === 'all' || d.status === closedFilter)
            .filter(d => {
                if (!closedSearch) return true;
                const term = closedSearch.toLowerCase();
                return (
                    (d.title || '').toLowerCase().includes(term) ||
                    (d.contact?.name || '').toLowerCase().includes(term) ||
                    (d.vehicle ? `${d.vehicle.make} ${d.vehicle.model}`.toLowerCase().includes(term) : false)
                );
            });

        return (
            <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
                {/* Header */}
                <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center shadow-sm">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Negócios Encerrados</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Histórico de negociações ganhas e perdidas.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar negócio ou contato..."
                                className="pl-9 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-56 dark:text-gray-200"
                                value={closedSearch}
                                onChange={e => setClosedSearch(e.target.value)}
                            />
                        </div>
                        <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden text-sm bg-white dark:bg-gray-800">
                            {[['all', 'Todos'], ['won', '🏆 Ganhos'], ['lost', '❌ Perdidos']].map(([val, label]) => (
                                <button
                                    key={val}
                                    onClick={() => setClosedFilter(val)}
                                    className={`px-3 py-1.5 font-medium transition-colors text-xs ${
                                        closedFilter === val
                                            ? val === 'won' ? 'bg-green-600 text-white'
                                              : val === 'lost' ? 'bg-red-500 text-white'
                                              : 'bg-indigo-600 text-white'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 xl:p-8 space-y-6">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Negócios Ganhos</p>
                            <p className="text-2xl font-black text-green-600 dark:text-green-400">{wonCount}</p>
                            <p className="text-xs text-gray-500 mt-1">{fmt(wonTotal)}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Negócios Perdidos</p>
                            <p className="text-2xl font-black text-red-500 dark:text-red-400">{lostCount}</p>
                            <p className="text-xs text-gray-500 mt-1">{fmt(lostTotal)}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Taxa de Vitória</p>
                            <p className={`text-2xl font-black ${winRate >= 50 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>{winRate}%</p>
                            <p className="text-xs text-gray-500 mt-1">{wonCount + lostCount} negócios avaliados</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Receita Gerada</p>
                            <p className="text-xl font-black text-indigo-600 dark:text-indigo-400">{fmt(wonTotal)}</p>
                            <p className="text-xs text-gray-500 mt-1">Total acumulado</p>
                        </div>
                    </div>

                    {/* Win Rate Bar */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <div className="flex justify-between items-baseline mb-3">
                            <h3 className="font-bold text-gray-800 dark:text-white text-sm">Proporção Ganhos vs. Perdidos</h3>
                            <span className="text-xs text-gray-500">{wonCount} ganhos · {lostCount} perdidos</span>
                        </div>
                        <div className="h-4 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden flex">
                            <div
                                className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 rounded-l-full"
                                style={{ width: `${winRate}%` }}
                            />
                            <div
                                className="h-full bg-gradient-to-r from-red-400 to-red-500 transition-all duration-700 rounded-r-full"
                                style={{ width: `${100 - winRate}%` }}
                            />
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full inline-block"/> Ganhos ({winRate}%)</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full inline-block"/> Perdidos ({100 - winRate}%)</span>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                            <h3 className="font-bold text-gray-800 dark:text-white">Histórico de Negócios</h3>
                            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full font-medium">{filtered.length} registros</span>
                        </div>
                        {filtered.length === 0 ? (
                            <div className="py-16 text-center text-gray-400 dark:text-gray-500">
                                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-gray-200 dark:text-gray-700" />
                                <p className="font-medium">Nenhum negócio encerrado encontrado.</p>
                                <p className="text-sm mt-1">Marque negócios como Ganhos ou Perdidos no funil.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-900/50 text-left">
                                            <th className="px-6 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Negócio</th>
                                            <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contato</th>
                                            <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Estágio</th>
                                            <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Valor</th>
                                            <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                            <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Responsável</th>
                                            <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Encerrado em</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {filtered.map(deal => (
                                            <tr
                                                key={deal.id}
                                                onClick={() => setSelectedDealId(deal.id)}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors group"
                                            >
                                                <td className="px-6 py-4">
                                                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                        {deal.vehicle ? `${deal.vehicle.make} ${deal.vehicle.model}` : deal.title}
                                                    </p>
                                                    {deal.vehicle && <p className="text-xs text-gray-400 mt-0.5">{deal.title}</p>}
                                                </td>
                                                <td className="px-4 py-4 text-gray-600 dark:text-gray-400">{deal.contact?.name || '—'}</td>
                                                <td className="px-4 py-4">
                                                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md font-medium">
                                                        {deal.stage?.name || '—'}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 font-bold text-gray-900 dark:text-white">{fmt(deal.value)}</td>
                                                <td className="px-4 py-4">
                                                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase ${
                                                        deal.status === 'won'
                                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                                                            : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                                                    }`}>
                                                        {deal.status === 'won' ? '✓ Ganho' : '✗ Perdido'}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-gray-600 dark:text-gray-400">{deal.assignee?.name || '—'}</td>
                                                <td className="px-4 py-4 text-gray-500 dark:text-gray-400 text-xs">{deal.closed_at || '—'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const renderContent = () => {
        switch(activeTab) {
            case 'negociacoes': return renderNegociacoes();
            case 'propostas': return renderPropostas();
            case 'configuracoes': return renderConfiguracoes();
            case 'ganhos': return renderGanhos();
            default: return renderNegociacoes();
        }
    };

    return (
        <AuthenticatedLayout
            activeModule="crm"
            sidebarMenuItems={crmMenu.map(item => ({...item, onClick: () => setActiveTab(item.id)}))}
            sidebarAction={sidebarAction}
        >
            <Head title={`CRM - ${activeTab}`} />

            {errorToast && (
                <div className="fixed top-4 right-4 z-[100] animate-in slide-in-from-top-2 fade-in duration-300">
                    <div className="bg-red-50 dark:bg-red-900/50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-xl flex items-center max-w-md">
                        <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                        <p className="text-sm font-medium text-red-800 dark:text-red-200 leading-tight">{errorToast}</p>
                        <button onClick={() => setErrorToast(null)} className="ml-3 text-red-500 hover:text-red-700 bg-red-100 dark:bg-red-900 rounded-full p-1 opacity-80 hover:opacity-100 transition-opacity">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {renderContent()}

            <DealSlideOver 
                isOpen={!!selectedDealId} 
                dealId={selectedDealId} 
                onClose={() => setSelectedDealId(null)} 
            />

            <CreateDealModal 
                isOpen={isCreateModalOpen} 
                onClose={() => setIsCreateModalOpen(false)} 
                stages={stages} 
                contacts={contacts}
            />
        </AuthenticatedLayout>
    );
}
