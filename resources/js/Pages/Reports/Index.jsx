import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { 
    LayoutDashboard, Eye, Activity, Share2, MessageCircle, Clock, Star, PhoneCall,
    Plus, Download, Calendar as CalendarIcon, MoreVertical
} from 'lucide-react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';

export default function ReportsIndex() {
    const [activeTab, setActiveTab] = useState('dashboards');

    // Sidebar
    const reportsMenu = [
        { label: 'Dashboards', icon: LayoutDashboard, active: activeTab === 'dashboards', id: 'dashboards' },
        { label: 'Visão Geral', icon: Eye, active: activeTab === 'visao-geral', id: 'visao-geral' },
        { label: 'Produtividade', icon: Activity, active: activeTab === 'produtividade', id: 'produtividade' },
        { label: 'Atribuição', icon: Share2, active: activeTab === 'atribuicao', id: 'atribuicao' },
        { label: 'Interação', icon: MessageCircle, active: activeTab === 'interacao', id: 'interacao' },
        { label: 'Presença', icon: Clock, active: activeTab === 'presenca', id: 'presenca' },
        { label: 'Avaliação', icon: Star, active: activeTab === 'avaliacao', id: 'avaliacao' },
        { label: 'Ligações', icon: PhoneCall, active: activeTab === 'ligacoes', id: 'ligacoes' },
    ];

    const sidebarAction = {
        label: '+ Novo Dashboard',
        icon: null,
        onClick: () => console.log('Novo Dashboard Modal')
    };

    // Chart Data
    const timelineData = [
        { time: '08:00', whatsapp: 12, instagram: 5, facebook: 2 },
        { time: '10:00', whatsapp: 30, instagram: 15, facebook: 8 },
        { time: '12:00', whatsapp: 25, instagram: 10, facebook: 6 },
        { time: '14:00', whatsapp: 45, instagram: 22, facebook: 12 },
        { time: '16:00', whatsapp: 35, instagram: 18, facebook: 9 },
        { time: '18:00', whatsapp: 15, instagram: 8, facebook: 3 },
    ];

    const pieData = [
        { name: 'WhatsApp', value: 400, color: '#25D366' },
        { name: 'Instagram', value: 300, color: '#E1306C' },
        { name: 'Facebook', value: 100, color: '#1877F2' },
        { name: 'Site Chat', value: 50, color: '#6366F1' },
    ];

    const kpiCards = [
        { title: 'Conversas Ativas', value: '1.248', trend: '+12%', trendUp: true },
        { title: 'Tempo Médio Resposta', value: '4m 32s', trend: '-8%', trendUp: true }, // less is better
        { title: 'Tempo Médio Resolução', value: '1h 15m', trend: '+2%', trendUp: false },
        { title: 'Satisfação (CSAT)', value: '4.8', trend: '+0.2', trendUp: true },
    ];

    const renderDashboards = () => (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900/50">
            {/* Header */}
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Visão Geral de Atendimento</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Acompanhe as métricas de inbound em tempo real.</p>
                </div>
                
                <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Últimos 7 dias
                    </button>
                    <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Exportar PDF
                    </button>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
                
                {/* KPIs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kpiCards.map((kpi, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{kpi.title}</h3>
                            <div className="flex items-end justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{kpi.value}</span>
                                <span className={`flex items-center text-sm font-semibold px-2 py-1 rounded bg-opacity-10 ${
                                    kpi.trendUp ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400' : 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                    {kpi.trend}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Timeline Chart */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Volume de Mensagens (Timeline)</h3>
                            <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-5 h-5" /></button>
                        </div>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorWhatsapp" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#25D366" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#25D366" stopOpacity={0}/>
                                        </linearGradient>
                                        <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#E1306C" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#E1306C" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                                    <RechartsTooltip 
                                        contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area type="monotone" dataKey="whatsapp" stroke="#25D366" strokeWidth={3} fillOpacity={1} fill="url(#colorWhatsapp)" />
                                    <Area type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={3} fillOpacity={1} fill="url(#colorInstagram)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Canais</h3>
                            <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-5 h-5" /></button>
                        </div>
                        <div className="flex-1 min-h-[250px] relative flex flex-col items-center justify-center">
                            <ResponsiveContainer width="100%" height={220}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip 
                                        contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '8px' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none pb-4">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">850</span>
                                <span className="text-xs text-gray-500">Tickets</span>
                            </div>
                            
                            {/* Legend */}
                            <div className="flex flex-wrap justify-center gap-3 mt-4 w-full">
                                {pieData.map((channel, i) => (
                                    <div key={i} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                                        <div className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: channel.color }}></div>
                                        {channel.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout
            activeModule="reports"
            sidebarMenuItems={reportsMenu.map(item => ({...item, onClick: () => setActiveTab(item.id)}))}
            sidebarAction={sidebarAction}
        >
            <Head title={`Relatórios - ${activeTab}`} />
            
            {activeTab === 'dashboards' ? renderDashboards() : (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50 dark:bg-gray-950">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Construção Analítica ({activeTab})</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">Esta visão conterá gráficos Recharts específicos filtrados por este contexto analítico.</p>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
