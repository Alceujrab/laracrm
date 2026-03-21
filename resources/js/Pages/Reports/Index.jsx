import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    LayoutDashboard, Eye, Activity, Share2, MessageCircle, Clock, Star, PhoneCall,
    Download, Calendar as CalendarIcon, TrendingUp, Users, Briefcase, Percent,
    CheckCircle, Inbox, Trophy, BarChart2
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
    ResponsiveContainer, PieChart, Pie, Cell, Legend,
    BarChart, Bar, LabelList
} from 'recharts';



const ICON_MAP = {
    'briefcase':     Briefcase,
    'trending-up':   TrendingUp,
    'percent':       Percent,
    'users':         Users,
    'message-circle': MessageCircle,
    'check-circle':  CheckCircle,
    'inbox':         Inbox,
    'trophy':        Trophy,
};

const KpiCard = ({ title, value, trend, trendUp, icon }) => {
    const Icon = ICON_MAP[icon] || BarChart2;
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</p>
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                    <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
            </div>
            <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
                {trend && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        trendUp
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                            : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400'
                    }`}>
                        {trend}
                    </span>
                )}
            </div>
        </div>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 text-sm">
                <p className="font-bold text-gray-700 dark:text-gray-200 mb-2">{label}</p>
                {payload.map((entry, i) => (
                    <div key={i} className="flex items-center gap-2 mt-1">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-gray-600 dark:text-gray-400">{entry.name}:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-3 text-sm">
                <p className="font-bold" style={{ color: payload[0].payload.color }}>{payload[0].name}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-0.5">{payload[0].value} negócios</p>
            </div>
        );
    }
    return null;
};

export default function ReportsIndex({ stats = {} }) {
    const [activeTab, setActiveTab] = useState('dashboards');
    const [dateRange, setDateRange] = useState('14');

    const {
        kpiCards    = [],
        timelineData = [],
        pieData      = [],
        funnelData   = [],
        operatorStats = [],
    } = stats;

    const reportsMenu = [
        { label: 'Dashboards',   icon: LayoutDashboard, id: 'dashboards' },
        { label: 'Visão Geral',  icon: Eye,             id: 'visao-geral' },
        { label: 'Produtividade',icon: Activity,        id: 'produtividade' },
        { label: 'Atribuição',   icon: Share2,          id: 'atribuicao' },
        { label: 'Interação',    icon: MessageCircle,   id: 'interacao' },
        { label: 'Presença',     icon: Clock,           id: 'presenca' },
        { label: 'Avaliação',    icon: Star,            id: 'avaliacao' },
        { label: 'Ligações',     icon: PhoneCall,       id: 'ligacoes' },
    ].map(item => ({ ...item, active: activeTab === item.id, onClick: () => setActiveTab(item.id) }));

    const filteredTimeline = dateRange === '7' ? timelineData.slice(-7) : timelineData;
    const totalDeals = pieData.reduce((sum, d) => sum + d.value, 0);

    const renderDashboards = () => (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-wrap gap-3 justify-between items-center shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Visão Geral de Atendimento</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Acompanhe as métricas em tempo real.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 text-sm">
                        {['7', '14'].map(d => (
                            <button
                                key={d}
                                onClick={() => setDateRange(d)}
                                className={`px-4 py-1.5 font-medium transition-colors ${
                                    dateRange === d
                                        ? 'bg-indigo-600 text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                            >
                                {d} dias
                            </button>
                        ))}
                    </div>
                    <button 
                        onClick={() => window.location.href = '/reports/export'}
                        className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                    >
                        <Download className="w-4 h-4 mr-2" /> Exportar PDF
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 xl:p-8 space-y-6">

                {/* KPI Grid - Negócios */}
                <div>
                    <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 px-0.5">CRM & Pipeline</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {kpiCards.slice(0, 4).map((kpi, i) => <KpiCard key={i} {...kpi} />)}
                    </div>
                </div>

                {/* KPI Grid - Atendimento */}
                <div>
                    <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 px-0.5">Atendimento ao Cliente</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {kpiCards.slice(4, 8).map((kpi, i) => <KpiCard key={i} {...kpi} />)}
                    </div>
                </div>

                {/* Charts Row 1: Area + Pie */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Area Chart - Timeline */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Evolução do Período</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Negócios criados e atendimentos iniciados</p>
                            </div>
                        </div>
                        {filteredTimeline.length > 0 ? (
                            <ResponsiveContainer width="100%" height={260}>
                                <AreaChart data={filteredTimeline} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorDeals" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorConversas" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="dark:stroke-gray-700" />
                                    <XAxis dataKey="time" tick={{ fontSize: 11 }} stroke="#9CA3AF" />
                                    <YAxis allowDecimals={false} tick={{ fontSize: 11 }} stroke="#9CA3AF" />
                                    <RechartsTooltip content={<CustomTooltip />} />
                                    <Legend wrapperStyle={{ fontSize: 12, paddingTop: 16 }} />
                                    <Area type="monotone" dataKey="deals" name="Negócios" stroke="#6366F1" strokeWidth={2.5} fill="url(#colorDeals)" dot={false} activeDot={{ r: 5 }} />
                                    <Area type="monotone" dataKey="conversas" name="Conversas" stroke="#10B981" strokeWidth={2.5} fill="url(#colorConversas)" dot={false} activeDot={{ r: 5 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-64 flex items-center justify-center text-gray-400 text-sm">Nenhum dado para o período.</div>
                        )}
                    </div>

                    {/* Donut Chart - Pipeline por etapa */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 flex flex-col">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Pipeline por Etapa</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Distribuição de negócios ativos</p>
                        {pieData.some(d => d.value > 0) ? (
                            <>
                                <ResponsiveContainer width="100%" height={180}>
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={50}
                                            outerRadius={75}
                                            paddingAngle={3}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, i) => (
                                                <Cell key={i} fill={entry.color} stroke="transparent" />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip content={<PieTooltip />} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="mt-4 space-y-2">
                                    {pieData.map((entry, i) => (
                                        <div key={i} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
                                                <span className="text-gray-700 dark:text-gray-300 truncate">{entry.name}</span>
                                            </div>
                                            <span className="font-semibold text-gray-900 dark:text-white ml-2">
                                                {entry.value}
                                                <span className="text-gray-400 font-normal ml-1 text-xs">
                                                    ({totalDeals > 0 ? Math.round((entry.value / totalDeals) * 100) : 0}%)
                                                </span>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">Nenhum negócio no funil ainda.</div>
                        )}
                    </div>
                </div>

                {/* Charts Row 2: Funnel Value + Operator Leaderboard */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Horizontal Bar - Valor por Etapa */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Valor por Etapa do Funil</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">Volume financeiro em cada estágio</p>
                        {funnelData.some(d => d.value > 0) ? (
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart data={funnelData} layout="vertical" margin={{ left: 10, right: 40 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="dark:stroke-gray-700" horizontal={false} />
                                    <XAxis type="number" tick={{ fontSize: 10 }} stroke="#9CA3AF" tickFormatter={v => `R$${(v/1000).toFixed(0)}k`} />
                                    <YAxis type="category" dataKey="stage" tick={{ fontSize: 11 }} stroke="#9CA3AF" width={85} />
                                    <RechartsTooltip
                                        formatter={(v) => [`R$ ${Number(v).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, 'Volume']}
                                        contentStyle={{ fontSize: 12 }}
                                    />
                                    <Bar dataKey="value" fill="#6366F1" radius={[0, 6, 6, 0]}>
                                        <LabelList dataKey="count" position="right" style={{ fontSize: 11, fill: '#6B7280' }} formatter={v => `${v} neg.`} />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-56 flex flex-col items-center justify-center text-gray-400 gap-2">
                                <BarChart2 className="w-10 h-10 text-gray-200 dark:text-gray-700" />
                                <span className="text-sm">Crie negócios no CRM para ver os dados aqui.</span>
                            </div>
                        )}
                    </div>

                    {/* Operator Leaderboard */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Ranking de Operadores</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">Conversas resolvidas nos últimos 30 dias</p>
                        {operatorStats.length > 0 ? (
                            <div className="space-y-3">
                                {operatorStats.map((op, i) => {
                                    const max = operatorStats[0]?.resolved_count || 1;
                                    const pct = Math.round((op.resolved_count / max) * 100);
                                    const medals = ['🥇', '🥈', '🥉'];
                                    return (
                                        <div key={op.id} className="flex items-center gap-3">
                                            <span className="text-lg w-6 text-center flex-shrink-0">{medals[i] ?? `#${i + 1}`}</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{op.name}</span>
                                                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 ml-2 flex-shrink-0">{op.resolved_count}</span>
                                                </div>
                                                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                                                        style={{ width: `${pct}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="h-56 flex flex-col items-center justify-center text-gray-400 gap-2">
                                <Users className="w-10 h-10 text-gray-200 dark:text-gray-700" />
                                <span className="text-sm text-center">Nenhum atendimento resolvido ainda.<br />Comece a resolver conversas na Caixa de Entrada!</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );

    const renderProdutividade = () => (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950 p-6 xl:p-8 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Produtividade da Equipe</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Desempenho individual e tempo de resposta.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase">TMR Médio Global</p>
                    <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{stats.avgResponseTime || '---'}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-6">Mensagens Enviadas vs Resoluções</h3>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={stats.productivity}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" className="dark:stroke-gray-700" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                            <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6', opacity: 0.4 }} />
                            <Legend />
                            <Bar dataKey="messages_count" name="Mensagens" fill="#6366F1" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="resolved_count" name="Resoluções" fill="#10B981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );

    const renderAtribuicao = () => (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950 p-6 xl:p-8 space-y-6 overflow-y-auto">
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Canais e Atribuição</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Origem das conversas e volume por plataforma.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-6">Distribuição por Canal</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={stats.attribution}
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="count"
                                nameKey="name"
                            >
                                {stats.attribution?.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={['#6366F1', '#10B981', '#F59E0B', '#F43F5E'][index % 4]} />
                                ))}
                            </Pie>
                            <RechartsTooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">Volume por Canal</h3>
                    <div className="space-y-4">
                        {stats.attribution?.map((channel, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold uppercase">
                                        {channel.type?.charAt(0) || 'C'}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">{channel.name}</p>
                                        <p className="text-xs text-gray-500 uppercase">{channel.type}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">{channel.count}</p>
                                    <p className="text-xs text-gray-400">conversas</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout
            activeModule="reports"
            sidebarMenuItems={reportsMenu}
        >
            <Head title={`Relatórios - ${activeTab}`} />

            <div className="flex-1 overflow-hidden h-full">
                {activeTab === 'dashboards' && renderDashboards()}
                {activeTab === 'produtividade' && renderProdutividade()}
                {activeTab === 'atribuicao' && renderAtribuicao()}
                
                {['dashboards', 'produtividade', 'atribuicao'].indexOf(activeTab) === -1 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50 dark:bg-gray-950">
                        <BarChart2 className="w-14 h-14 text-gray-200 dark:text-gray-700 mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Módulo em Construção</h2>
                        <p className="text-gray-400 dark:text-gray-500 max-w-xs">O painel de <strong>{activeTab}</strong> estará disponível em breve.</p>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
