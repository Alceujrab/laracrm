import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { 
    User, Settings as SettingsIcon, Users, Shield, UsersRound, 
    TextCursorInput, Zap, MessageSquareQuote, Bot, Share2, 
    Plus, Search, Smartphone, Facebook, Instagram, Mail, LayoutTemplate
} from 'lucide-react';

export default function SettingsIndex() {
    const { user } = usePage().props.auth;
    const [activeTab, setActiveTab] = useState('canais');

    // Sidebar Items
    const settingsMenu = [
        { label: 'Perfil', icon: User, active: activeTab === 'perfil', id: 'perfil' },
        { label: 'Geral', icon: SettingsIcon, active: activeTab === 'geral', id: 'geral' },
        { label: 'Membros', icon: Users, active: activeTab === 'membros', id: 'membros' },
        { label: 'Permissões', icon: Shield, active: activeTab === 'permissoes', id: 'permissoes' },
        { label: 'Grupos', icon: UsersRound, active: activeTab === 'grupos', id: 'grupos' },
        { label: 'Campos Customizados', icon: TextCursorInput, active: activeTab === 'campos', id: 'campos' },
        { label: 'Frases Rápidas', icon: MessageSquareQuote, active: activeTab === 'frases', id: 'frases' },
        { label: 'Automações', icon: Zap, active: activeTab === 'automacoes', id: 'automacoes' },
        { label: 'Bot / Fluxos', icon: Bot, active: activeTab === 'bots', id: 'bots' },
        { label: 'Canais', icon: Share2, active: activeTab === 'canais', id: 'canais' },
    ];

    const channels = [
        { id: 1, name: 'WhatsApp Business', type: 'WhatsApp', status: 'connected', identifier: '+55 11 9999-9999', icon: Smartphone, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900' },
        { id: 2, name: 'Página Facebook', type: 'Messenger', status: 'connected', identifier: '@cfauto', icon: Facebook, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900' },
        { id: 3, name: 'Instagram DM', type: 'Instagram', status: 'error', identifier: '@cfautocrm', icon: Instagram, color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-900' },
        { id: 4, name: 'Suporte E-mail', type: 'IMAP', status: 'disconnected', identifier: 'suporte@cfauto.com', icon: Mail, color: 'text-gray-500', bg: 'bg-gray-100 dark:bg-gray-800' },
        { id: 5, name: 'Widget Site', type: 'Script', status: 'connected', identifier: 'website-widget-1', icon: LayoutTemplate, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900' },
    ];

    const renderCanais = () => (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900/50">
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Canais de Atendimento</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Conecte os canais Omnichannel por onde sua equipe receberá mensagens.</p>
                </div>
                
                <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                        <Plus className="w-4 h-4 mr-2" /> 
                        Conectar Canal
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {channels.map(channel => {
                        const Icon = channel.icon;
                        return (
                            <div key={channel.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-lg ${channel.bg}`}>
                                        <Icon className={`w-6 h-6 ${channel.color}`} />
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                                        channel.status === 'connected' ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400' :
                                        channel.status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400' :
                                        'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                                    }`}>
                                        {channel.status === 'connected' ? 'Conectado' : channel.status === 'error' ? 'Erro' : 'Desconectado'}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{channel.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{channel.identifier}</p>
                                
                                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end space-x-2">
                                    <button className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">Configurar</button>
                                    <button className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors">Desconectar</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const renderBotBuilderMockup = () => (
        <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-950">
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10 shadow-sm relative">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Editor de Fluxo (Bot)</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Node-based builder (React Flow Canvas Mockup).</p>
                </div>
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                    Salvar e Publicar
                </button>
            </div>
            {/* Canvas Area Mockup */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
                {/* Nodes Mock */}
                <div className="absolute top-20 left-40 bg-white dark:bg-gray-800 border-l-4 border-indigo-500 p-4 rounded shadow-lg w-64 z-10 border dark:border-gray-700">
                    <h4 className="font-bold text-sm mb-2 text-gray-800 dark:text-gray-200">Gatilho: Início</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Qualquer mensagem nova.</p>
                </div>

                <div className="absolute top-48 left-96 bg-white dark:bg-gray-800 border-l-4 border-green-500 p-4 rounded shadow-lg w-64 z-10 border dark:border-gray-700">
                    <h4 className="font-bold text-sm mb-2 text-gray-800 dark:text-gray-200">Enviar Mensagem</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">"Olá! Escolha uma opção..."</p>
                </div>

                {/* SVG connection lines mock */}
                <svg className="absolute inset-0 pointer-events-none w-full h-full z-0">
                    <path d="M 400 120 C 450 120, 420 230, 480 230" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="5,5" />
                </svg>

                {/* Toolbox */}
                <div className="absolute right-8 top-8 bottom-8 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col z-20">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                        <h3 className="font-bold text-gray-800 dark:text-white text-sm">Paleta de Nós</h3>
                    </div>
                    <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded cursor-grab flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                            <MessageSquareQuote className="w-4 h-4 mr-2 text-blue-500" /> Mensagem
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded cursor-grab flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Share2 className="w-4 h-4 mr-2 text-purple-500" /> Ramificação
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded cursor-grab flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Zap className="w-4 h-4 mr-2 text-yellow-500" /> Requisição HTTP
                        </div>
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
            activeModule="settings"
            sidebarMenuItems={settingsMenu.map(item => ({...item, onClick: () => setActiveTab(item.id)}))}
        >
            <Head title={`Configurações - ${activeTab}`} />

            {activeTab === 'canais' && renderCanais()}
            {activeTab === 'bots' && renderBotBuilderMockup()}
            {activeTab === 'perfil' && renderPlaceholder('Perfil do Usuário Logado', 'Gerenciamento de Avatar, Nome, E-mail, Senha e seletor global do Tema (Light / Dark).')}
            {activeTab === 'geral' && renderPlaceholder('Configurações Gerais', 'Upload da Logo, Fuso Horário, e Moeda Oficial do ambiente.')}
            {activeTab === 'membros' && renderPlaceholder('Gerenciamento de Equipe', 'Tabela de agentes e botão Cadastrar Operador.')}
            {activeTab === 'permissoes' && renderPlaceholder('Permissões RBAC', 'Toggles lógicos sobre restrições de Caixa de Entrada e Negócios.')}
            {activeTab === 'grupos' && renderPlaceholder('Grupos de Departamentos', 'Vendas / Suporte / Onboarding para roteamento.')}
            {activeTab === 'campos' && renderPlaceholder('Campos Personalizados', 'Construtor DropDown de metadados extra no BD.')}
            {activeTab === 'frases' && renderPlaceholder('Frases Rápidas (Macros)', 'CRUD ativado p/ digitação / no chat com suporte text-rico e variáveis.')}
            {activeTab === 'automacoes' && renderPlaceholder('Regras IF-THIS-THEN-THAT', 'Gatilhos (Tag Adicionada) => Ação (Atribuir a Usuário).')}
        </AuthenticatedLayout>
    );
}
