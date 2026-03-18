import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { 
    Inbox, User, Clock, Archive, Plus, Search, MoreVertical, 
    FileText, Check, Paperclip, Smile, Zap, List, Mic, Info,
    Phone, MessageSquare, Tag, Briefcase, Calendar, Car
} from 'lucide-react';

export default function InboxIndex() {
    const [isContactPanelOpen, setIsContactPanelOpen] = useState(true);

    // Sidebar items for Inbox module
    const inboxMenu = [
        { label: 'Entrada', icon: Inbox, active: true, badge: '12' },
        { label: 'Meus', icon: User, active: false, badge: '3' },
        { label: 'Seguindo', icon: Clock, active: false },
        { label: 'Arquivados', icon: Archive, active: false },
    ];

    const sidebarAction = {
        label: '+ Add Filtro',
        icon: null,
        onClick: () => console.log('Add filter modal')
    };

    return (
        <AuthenticatedLayout
            activeModule="inbox"
            sidebarMenuItems={inboxMenu}
            sidebarAction={sidebarAction}
        >
            <Head title="Caixa de Entrada" />

            <div className="flex h-full w-full overflow-hidden">
                
                {/* 1. Lista de Conversas (Sub-sidebar) */}
                <div className="w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Conversas</h2>
                            <div className="flex space-x-2">
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500 transition-colors">
                                    <Plus className="w-5 h-5" />
                                </button>
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500 transition-colors">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Pesquisar..." 
                                className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-md text-sm focus:ring-1 focus:ring-indigo-500 dark:text-gray-200"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {/* Mock Chat Card */}
                        {[1, 2, 3, 4, 5].map((chat, i) => (
                            <div key={i} className={`p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer ${i === 0 ? 'bg-indigo-50/50 dark:bg-indigo-900/20' : ''}`}>
                                <div className="flex items-start">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
                                            CL
                                        </div>
                                        {i === 0 && (
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                                        )}
                                    </div>
                                    <div className="ml-3 flex-1 overflow-hidden">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Cliente Exemplo {chat}</h3>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">15m</span>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">Olá, gostaria de saber sobre o financiamento...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Área de Chat Master (Centro) */}
                <div className="flex-1 flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] relative min-w-0">
                    {/* Header Chat */}
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between shadow-sm z-10">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
                                CL
                            </div>
                            <div className="ml-3">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                                    Cliente Exemplo 1
                                    <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">WhatsApp</span>
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-green-400 rounded-md transition-colors text-sm font-medium">
                                <Check className="w-4 h-4 mr-1.5" /> Resolver
                            </button>
                            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" title="Atribuir">
                                <User className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" title="Pasta">
                                <FileText className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" title="Mais Opções">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>
                            <button 
                                onClick={() => setIsContactPanelOpen(!isContactPanelOpen)}
                                className={`p-2 rounded-md transition-colors ${isContactPanelOpen ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`} 
                                title="Informações"
                            >
                                <Info className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Mensagem Cliente */}
                        <div className="flex items-end">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex-shrink-0 flex items-center justify-center text-xs text-indigo-700 dark:text-indigo-300 font-bold mr-2">
                                CL
                            </div>
                            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-3 rounded-2xl rounded-bl-none shadow-sm max-w-lg">
                                <p className="text-sm text-gray-800 dark:text-gray-200">Olá, gostaria de saber sobre o financiamento do Jeep Renegade 2022 que vi no site.</p>
                                <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 block right-0 text-right">10:45</span>
                            </div>
                        </div>

                        {/* Nota Interna */}
                        <div className="flex justify-center max-w-2xl mx-auto">
                            <div className="bg-yellow-50 dark:bg-[#332a11] border border-yellow-200 dark:border-yellow-900/50 p-2.5 rounded-lg w-full flex items-start">
                                <Info className="w-4 h-4 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-2" />
                                <div>
                                    <p className="text-xs font-semibold text-yellow-800 dark:text-yellow-400">Nota Interna - João (Vendas)</p>
                                    <p className="text-sm text-yellow-900 dark:text-yellow-200 mt-0.5">Cliente tem um Honda Civic 2018 para dar na troca.</p>
                                </div>
                            </div>
                        </div>

                        {/* Mensagem Agente */}
                        <div className="flex items-end justify-end">
                            <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-none shadow-sm max-w-lg text-left">
                                <p className="text-sm">Olá! Claro, o Renegade está disponível. Sobre o financiamento, podemos fazer em até 60x. Aceitamos seu Civic na troca sim. Deseja que eu envie uma simulação?</p>
                                <span className="text-[10px] text-indigo-200 mt-1 block right-0 text-right">10:50</span>
                            </div>
                        </div>
                    </div>

                    {/* Composer Inferior */}
                    <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex items-end bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
                            <textarea 
                                className="w-full max-h-32 min-h-[50px] bg-transparent border-none focus:ring-0 resize-none py-3 px-4 text-sm dark:text-gray-200"
                                placeholder="Shift + Enter para nova linha. '/' para frase rápida."
                            />
                        </div>
                        <div className="flex items-center justify-between mt-2 px-1">
                            <div className="flex space-x-1">
                                <button className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors" title="Áudio"><Mic className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors" title="Frases Rápidas"><List className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors" title="Macros/Automação"><Zap className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors" title="Emoji"><Smile className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors" title="Anexo"><Paperclip className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors" title="Catálogo de Veículos"><Car className="w-5 h-5" /></button>
                            </div>
                            <div>
                                <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium text-sm shadow-sm">
                                    Enviar
                                    <svg className="w-4 h-4 ml-2 transform rotate-45 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Painel de Detalhes do Contato (Direita) */}
                {isContactPanelOpen && (
                    <div className="w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0 animate-in slide-in-from-right-10 duration-200">
                        {/* Ações Cross-Channel */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-3xl font-bold mb-4 shadow-sm">
                                CL
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Cliente Exemplo 1</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">+55 11 99999-9999</p>
                            
                            <div className="flex w-full space-x-2">
                                <button className="flex-1 flex justify-center items-center py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md transition-colors text-sm font-medium">
                                    <Phone className="w-4 h-4 mr-2" /> Ligar
                                </button>
                                <button className="flex-1 flex justify-center items-center py-2 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/50 text-green-700 dark:text-green-400 rounded-md transition-colors text-sm font-medium">
                                    <MessageSquare className="w-4 h-4 mr-2" /> Whats
                                </button>
                            </div>
                        </div>

                        {/* Acordeões / Tabs (Mock simples por enquanto) */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {/* Sobre o Contato */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-100 dark:border-gray-800">
                                <h4 className="flex items-center text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wider">
                                    <User className="w-4 h-4 mr-2 text-indigo-500" /> Sobre
                                </h4>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">E-mail</p>
                                        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium truncate">cliente@exemplo.com.br</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Tags</p>
                                        <div className="flex flex-wrap gap-1">
                                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-[10px] rounded font-medium flex items-center">
                                                <Tag className="w-3 h-3 mr-1" /> Venda
                                            </span>
                                            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-[10px] rounded font-medium flex items-center">
                                                <Tag className="w-3 h-3 mr-1" /> Financiamento
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Negociações */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-100 dark:border-gray-800">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="flex items-center text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                                        <Briefcase className="w-4 h-4 mr-2 text-indigo-500" /> Negócios
                                    </h4>
                                    <button className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"><Plus className="w-4 h-4" /></button>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Interesse: Jeep Renegade</p>
                                    <p className="text-xs text-gray-500 mt-1">Status: Em negociação</p>
                                    <p className="text-xs text-green-600 font-bold mt-2">R$ 95.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
