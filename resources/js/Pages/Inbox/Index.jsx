import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { 
    Inbox, User, Clock, Archive, Plus, Search, MoreVertical, 
    FileText, Check, Paperclip, Smile, Zap, List, Mic, Info,
    Phone, MessageSquare, Tag, Briefcase, Calendar, Car, X, Edit, ChevronDown, ChevronUp
} from 'lucide-react';
import CreateDealModal from '@/Components/Deal/CreateDealModal';
import NewConversationModal from '@/Components/Inbox/NewConversationModal';

/* Macros pre-definidas */
const MACROS = [
    { title: 'Saudação Padrão', text: 'Olá! Como vai? Sou seu consultor da CF Auto. Como posso te auxiliar com seu novo veículo hoje?' },
    { title: 'Localização', text: 'Nossa loja fica muito bem localizada! Venha tomar um café conosco e conhecer nosso estoque: [Link do Maps]' },
    { title: 'Financiamento', text: 'Trabalhamos com todas as financeiras e garantimos as melhores taxas do mercado. Vamos fazer uma simulação sem compromisso?' }
];

const Accordion = ({ title, icon: Icon, defaultOpen = false, children }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800 mb-4 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/80 transition-colors"
            >
                <div className="flex items-center text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                    {Icon && <Icon className="w-4 h-4 mr-2 text-indigo-500" />} {title}
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {isOpen && <div className="p-4 border-t border-gray-100 dark:border-gray-800">{children}</div>}
        </div>
    );
};

export default function InboxIndex({ conversations: initialConversations = [], users = [], deals = [], contacts = [], stages = [], vehicles = [], channels = [] }) {
    const { auth } = usePage().props;
    const [conversations, setConversations] = useState(initialConversations);
    const [isContactPanelOpen, setIsContactPanelOpen] = useState(true);
    const [activeConvId, setActiveConvId] = useState(conversations.length > 0 ? conversations[0].id : null);
    const [newMessage, setNewMessage] = useState('');
    const [sending, setSending] = useState(false);
    
    // Novas features state
    const [isInternalNote, setIsInternalNote] = useState(false);
    const [filter, setFilter] = useState('all'); // all, mine, unassigned, waiting
    const [isCreateDealModalOpen, setIsCreateDealModalOpen] = useState(false);
    const [newTag, setNewTag] = useState('');
    const [internalNoteContent, setInternalNoteContent] = useState('');

    // V3 Modals and Popovers
    const [isNewConvOpen, setIsNewConvOpen] = useState(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [isMacroOpen, setIsMacroOpen] = useState(false);

    // Auto Refresh Polling (5s)
    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const { data } = await axios.get('/api/inbox/refresh');
                setConversations(data);
            } catch (error) {
                console.error("Erro no auto-refresh:", error);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !activeConvId || sending) return;
        
        setSending(true);
        try {
            await axios.post(`/api/inbox/${activeConvId}/message`, {
                content: newMessage,
                type: isInternalNote ? 'internal_note' : 'text'
            });
            setNewMessage('');
            if(isInternalNote) setIsInternalNote(false); // reseta após enviar
            const { data } = await axios.get('/api/inbox/refresh');
            setConversations(data);
        } catch (error) {
            alert('Falha ao enviar mensagem');
        } finally {
            setSending(false);
        }
    };

    const handleAssign = async (userId) => {
        try {
            await axios.put(`/api/inbox/${activeConvId}/assign`, { user_id: userId });
            const { data } = await axios.get('/api/inbox/refresh');
            setConversations(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleStatus = async (status) => {
        try {
            await axios.put(`/api/inbox/${activeConvId}/status`, { status });
            const { data } = await axios.get('/api/inbox/refresh');
            setConversations(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddTag = async (e) => {
        e.preventDefault();
        if (!newTag.trim() || !activeConv) return;
        
        const currentTags = activeConv.contact?.tags || [];
        if (currentTags.includes(newTag.trim())) {
            setNewTag('');
            return;
        }

        const updatedTags = [...currentTags, newTag.trim()];
        
        try {
            await axios.put(`/api/inbox/contact/${activeConv.contact_id}/tags`, { tags: updatedTags });
            setNewTag('');
            const { data } = await axios.get('/api/inbox/refresh');
            setConversations(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveTag = async (tagToRemove) => {
        if (!activeConv) return;
        const currentTags = activeConv.contact?.tags || [];
        const updatedTags = currentTags.filter(t => t !== tagToRemove);
        
        try {
            await axios.put(`/api/inbox/contact/${activeConv.contact_id}/tags`, { tags: updatedTags });
            const { data } = await axios.get('/api/inbox/refresh');
            setConversations(data);
        } catch (error) {
            console.error(error);
        }
    };

    const insertText = (text) => {
        setNewMessage(prev => prev + (prev.length > 0 ? '\n' : '') + text);
        setIsMacroOpen(false);
        setIsCatalogOpen(false);
    };

    const filteredConversations = conversations.filter(c => {
        if (filter === 'mine') return c.assigned_to === auth.user.id;
        if (filter === 'unassigned') return !c.assigned_to;
        return true; // all
    });

    const activeConv = conversations.find(c => c.id === activeConvId) || filteredConversations[0];
    useEffect(() => {
        if(filteredConversations.length > 0 && !filteredConversations.some(c => c.id === activeConvId)) {
            setActiveConvId(filteredConversations[0].id);
        }
    }, [filteredConversations.length]);


    const getInitials = (name) => {
        if (!name) return '??';
        const parts = name.split(' ');
        return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].substring(0, 2).toUpperCase();
    };

    const formatTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const inboxMenu = [
        { label: 'Entrada', icon: Inbox, active: true, badge: conversations.length.toString() }
    ];

    return (
        <AuthenticatedLayout
            activeModule="inbox"
            sidebarMenuItems={inboxMenu}
        >
            <Head title="Caixa de Entrada Premium" />

            <div className="flex h-[calc(100vh-4rem)] w-full overflow-hidden">
                
                {/* 1. Lista de Conversas */}
                <div className="w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0 z-20">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Conversas</h2>
                            <div className="flex space-x-2">
                                <button 
                                    onClick={() => setIsNewConvOpen(true)}
                                    className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 transition-colors"
                                    title="Nova Conversa"
                                >
                                    <Edit className="w-5 h-5" />
                                </button>
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500 transition-colors">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Filtros */}
                        <div className="flex space-x-1 overflow-x-auto pb-3 scrollbar-hide">
                            <button onClick={() => setFilter('all')} className={`whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full transition-colors ${filter === 'all' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400'}`}>Tudo</button>
                            <button onClick={() => setFilter('mine')} className={`whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full transition-colors ${filter === 'mine' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400'}`}>Meus</button>
                            <button onClick={() => setFilter('unassigned')} className={`whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full transition-colors ${filter === 'unassigned' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400'}`}>Aguardando</button>
                        </div>

                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Pesquisar..." 
                                className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:ring-1 focus:ring-indigo-500 dark:text-gray-200"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {filteredConversations.length === 0 ? (
                            <div className="p-8 text-center text-sm text-gray-400">Nenhuma conversa encontrada neste filtro.</div>
                        ) : (
                            filteredConversations.map((chat) => {
                                const contact = chat.contact;
                                const lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
                                const isActive = activeConv?.id === chat.id;

                                return (
                                    <div 
                                        key={chat.id} 
                                        onClick={() => setActiveConvId(chat.id)}
                                        className={`p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors ${isActive ? 'bg-indigo-50/50 dark:bg-indigo-900/20' : ''}`}
                                    >
                                        <div className="flex items-start">
                                            <div className="relative">
                                                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
                                                    {getInitials(contact?.name)}
                                                </div>
                                                {chat.channel?.type === 'whatsapp' && (
                                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                                                )}
                                                {chat.channel?.type === 'instagram' && (
                                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-pink-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                                                )}
                                            </div>
                                            <div className="ml-3 flex-1 overflow-hidden">
                                                <div className="flex justify-between items-baseline">
                                                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{contact?.name || 'Desconhecido'}</h3>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">{formatTime(chat.last_message_at)}</span>
                                                </div>
                                                <p className={`text-sm truncate mt-1 ${lastMessage?.type === 'internal_note' ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-500 dark:text-gray-400'}`}>
                                                    {lastMessage?.type === 'internal_note' && <span className="mr-1">🔒</span>}
                                                    {lastMessage ? lastMessage.content : 'Nova Conversa'}
                                                </p>
                                                {chat.assignee && (
                                                    <p className="text-[10px] text-gray-400 mt-1">Atribuído a: {chat.assignee.name.split(' ')[0]}</p>
                                                )}
                                            </div>
                                            {chat.status === 'resolved' && (
                                                <div className="flex items-center ml-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* 2. Área de Chat Master */}
                {activeConv ? (
                    <div className="flex-1 flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] relative min-w-0 z-10">
                        {/* Header Chat */}
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between shadow-sm z-10">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
                                    {getInitials(activeConv.contact?.name)}
                                </div>
                                <div className="ml-3">
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                                        {activeConv.contact?.name || 'Desconhecido'}
                                        <span className={`ml-2 px-2 py-0.5 rounded text-[10px] font-medium ${
                                            activeConv.channel?.type === 'whatsapp' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {activeConv.channel?.name}
                                        </span>
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {activeConv.status === 'open' ? 'Aberto' : 'Resolvido'} via {activeConv.channel?.identifier}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                
                                <select 
                                    className="text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md py-1.5 pl-3 pr-8 focus:ring-indigo-500 outline-none" 
                                    value={activeConv.assigned_to || ''}
                                    onChange={(e) => handleAssign(e.target.value)}
                                >
                                    <option value="">Atribuir a...</option>
                                    {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                                </select>

                                <button 
                                    onClick={() => handleStatus(activeConv.status === 'open' ? 'resolved' : 'open')}
                                    className={`flex items-center px-3 py-1.5 rounded-md transition-colors text-sm font-medium ${
                                        activeConv.status === 'open' 
                                        ? 'bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-green-400'
                                        : 'bg-green-600 hover:bg-green-700 text-white'
                                    }`}
                                >
                                    <Check className="w-4 h-4 mr-1.5" /> 
                                    {activeConv.status === 'open' ? 'Resolver' : 'Resolvido'}
                                </button>
                                
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
                            {activeConv.messages && activeConv.messages.map((message) => {
                                if (message.type === 'internal_note') {
                                    return (
                                        <div key={message.id} className="flex justify-center max-w-2xl mx-auto">
                                            <div className="bg-yellow-50 dark:bg-[#332a11] border border-yellow-200 dark:border-yellow-900/50 p-3 rounded-xl w-full flex items-start shadow-sm">
                                                <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs font-bold text-yellow-800 dark:text-yellow-400 uppercase tracking-widest">Nota Interna Visível Apenas Para a Equipe</p>
                                                    <p className="text-sm text-yellow-900 dark:text-yellow-200 mt-1 whitespace-pre-line">{message.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                if (message.sender_type === 'contact') {
                                    return (
                                        <div key={message.id} className="flex items-end">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex-shrink-0 flex items-center justify-center text-xs text-indigo-700 dark:text-indigo-300 font-bold mr-2">
                                                {getInitials(activeConv.contact?.name)}
                                            </div>
                                            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-3.5 rounded-2xl rounded-bl-none shadow-sm max-w-lg">
                                                <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">{message.content}</p>
                                                <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 block right-0 text-right">{formatTime(message.created_at)}</span>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={message.id} className="flex items-end justify-end">
                                        <div className="bg-indigo-600 text-white p-3.5 rounded-2xl rounded-br-none shadow-sm max-w-lg text-left">
                                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                                            <span className="text-[10px] text-indigo-200 mt-1 block right-0 text-right">{formatTime(message.created_at)}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Modais Inline da Toolbar (Ficam relativos ao footer) */}
                        {isMacroOpen && (
                            <div className="absolute bottom-[90px] left-6 z-50 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in slide-in-from-bottom-2 fade-in">
                                <div className="p-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 font-semibold text-sm flex justify-between">
                                    Respostas Rápidas
                                    <button onClick={() => setIsMacroOpen(false)} className="text-gray-400"><X className="w-4 h-4"/></button>
                                </div>
                                <div className="max-h-64 overflow-y-auto p-2">
                                    {MACROS.map((m, i) => (
                                        <button 
                                            key={i} 
                                            onClick={() => insertText(m.text)}
                                            className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors border-b border-transparent hover:border-gray-100 dark:hover:border-gray-600 mb-1"
                                        >
                                            <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">{m.title}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">{m.text}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {isCatalogOpen && (
                            <div className="absolute bottom-[90px] left-20 z-50 w-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in slide-in-from-bottom-2 fade-in">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/50 border-b border-indigo-100 dark:border-indigo-800 font-semibold text-sm flex justify-between text-indigo-800 dark:text-indigo-200">
                                    <div className="flex items-center"><Car className="w-4 h-4 mr-2"/> Catálogo de Veículos</div>
                                    <button onClick={() => setIsCatalogOpen(false)} className="text-indigo-400"><X className="w-4 h-4"/></button>
                                </div>
                                <div className="max-h-80 overflow-y-auto p-3 grid grid-cols-2 gap-3">
                                    {vehicles.map(v => (
                                        <div key={v.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group hover:border-indigo-500 cursor-pointer transition-colors"
                                             onClick={() => insertText(`*Confira este modelo que acabou de chegar!*\n\n🚘 ${v.make} ${v.model}\n📅 Ano: ${v.year}\n💰 Preço: R$ ${parseFloat(v.price).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`)}
                                        >
                                            {/* Preview Image mock */}
                                            <div className="h-24 bg-gray-100 dark:bg-gray-900 w-full flex items-center justify-center">
                                                <Car className="w-8 h-8 text-gray-300 dark:text-gray-700" />
                                            </div>
                                            <div className="p-2 bg-white dark:bg-gray-800">
                                                <p className="text-xs font-bold text-gray-800 dark:text-gray-200 truncate">{v.make} {v.model}</p>
                                                <p className="text-[10px] text-gray-500">{v.year}</p>
                                                <p className="text-xs font-bold text-green-600 dark:text-green-400 mt-1">R$ {parseFloat(v.price).toLocaleString('pt-BR')}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Composer Inferior */}
                        <form onSubmit={handleSendMessage} className={`p-4 border-t z-10 relative transition-colors ${
                            isInternalNote 
                            ? 'bg-yellow-50 dark:bg-[#332a11] border-yellow-200 dark:border-yellow-900/50' 
                            : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800'
                        }`}>
                            <div className={`flex items-end border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all ${
                                isInternalNote 
                                ? 'bg-white dark:bg-gray-800 border-yellow-300 dark:border-yellow-700' 
                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                            }`}>
                                <textarea 
                                    className="w-full max-h-32 min-h-[50px] bg-transparent border-none focus:ring-0 resize-none py-3 px-4 text-sm dark:text-gray-200"
                                    placeholder={isInternalNote ? "Escreva uma nota interna para a equipe..." : "Escreva sua mensagem para o cliente... ('/' p/ Atalhos)"}
                                    value={newMessage}
                                    onChange={(e) => {
                                        setNewMessage(e.target.value);
                                        // Simple quick reply trigger simulation
                                        if(e.target.value.endsWith('/')) {
                                            setIsMacroOpen(true);
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage(e);
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-between mt-2 px-1">
                                <div className="flex items-center space-x-1">
                                    <button type="button" onClick={() => { setIsMacroOpen(!isMacroOpen); setIsCatalogOpen(false); }} className={`p-2 rounded-full transition-colors ${isMacroOpen ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-indigo-600'}`} title="Respostas Rápidas"><List className="w-5 h-5" /></button>
                                    <button type="button" onClick={() => { setIsCatalogOpen(!isCatalogOpen); setIsMacroOpen(false); }} className={`p-2 rounded-full transition-colors ${isCatalogOpen ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-indigo-600'}`} title="Catálogo de Veículos"><Car className="w-5 h-5" /></button>
                                    <span className="w-px h-5 bg-gray-300 mx-2"></span>
                                    <button type="button" className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors"><Mic className="w-5 h-5" /></button>
                                    <button type="button" className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors"><Paperclip className="w-5 h-5" /></button>
                                    
                                    <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 ml-4 border-l pl-4 border-gray-300 dark:border-gray-700">
                                        <input 
                                            type="checkbox" 
                                            checked={isInternalNote} 
                                            onChange={() => setIsInternalNote(!isInternalNote)} 
                                            className="rounded border-gray-300 text-yellow-500 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                                        />
                                        <span className="font-semibold text-xs tracking-wide uppercase">Nota de Equipe</span>
                                    </label>
                                </div>
                                <button type="submit" disabled={sending} className={`flex items-center px-6 py-2 text-white rounded-lg transition-colors font-medium text-sm shadow-sm disabled:opacity-50 ${
                                    isInternalNote ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-indigo-600 hover:bg-indigo-700'
                                }`}>
                                    {sending ? 'Salvando...' : 'Enviar'}
                                    <svg className="w-4 h-4 ml-2 transform rotate-45 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center bg-[#F9FAFB] dark:bg-[#0B0F19]">
                        <Inbox className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-300">Nenhuma conversa selecionada</h3>
                        <p className="text-gray-500 mt-2">Escolha na barra lateral ou ajuste os filtros.</p>
                    </div>
                )}

                {/* 3. Painel Lateral Direito (CRM & Detalhes c/ Accordions) */}
                {isContactPanelOpen && activeConv && (
                    <div className="w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0 z-20">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col items-center bg-gray-50/50 dark:bg-gray-900">
                            <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-3xl font-bold mb-4 shadow-sm ring-4 ring-white dark:ring-gray-800">
                                {getInitials(activeConv.contact?.name)}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{activeConv.contact?.name || 'Desconhecido'}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{activeConv.contact?.phone || 'Sem número'}</p>
                            
                            <div className="w-full mt-2">
                                <button 
                                    onClick={() => setIsCreateDealModalOpen(true)}
                                    className="w-full flex justify-center items-center py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-semibold shadow-sm"
                                >
                                    <Briefcase className="w-4 h-4 mr-2" /> 
                                    Transformar em Negócio
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                            
                            {/* Accordion Contato */}
                            <Accordion title="Contato" icon={User} defaultOpen={true}>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">E-mail</p>
                                        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{activeConv.contact?.email || '--'}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Etiquetas (Tags)</p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {activeConv.contact?.tags ? activeConv.contact.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-xs rounded-md font-medium flex items-center">
                                                    {tag}
                                                    <button onClick={() => handleRemoveTag(tag)} className="ml-1 hover:text-red-500"><X className="w-3 h-3"/></button>
                                                </span>
                                            )) : <span className="text-xs text-gray-400 italic">Nenhuma tag...</span>}
                                        </div>

                                        <form onSubmit={handleAddTag} className="flex gap-2">
                                            <input 
                                                type="text" 
                                                placeholder="Nova Etiqueta" 
                                                value={newTag}
                                                onChange={e => setNewTag(e.target.value)}
                                                className="w-full text-xs px-2 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                            <button type="submit" className="px-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 transition-colors">
                                                +
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </Accordion>

                            {/* Accordion Negócios */}
                            <Accordion title="Negociações no CRM" icon={Briefcase}>
                                <div className="text-sm text-gray-500 text-center py-4 italic">
                                    Nenhuma negociação aberta identificada diretamente.
                                </div>
                            </Accordion>

                            {/* Accordion Notas */}
                            <Accordion title="Arquivo de Notas" icon={FileText}>
                                <div className="space-y-2">
                                    <textarea 
                                        className="w-full text-xs bg-gray-50 border border-gray-200 rounded p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        rows="4"
                                        placeholder="Anotações fixas do lead..."
                                    ></textarea>
                                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold py-1.5 rounded transition">Salvar Anotação</button>
                                </div>
                            </Accordion>

                        </div>
                    </div>
                )}
            </div>

            {/* Modais Globais */}
            <CreateDealModal 
                isOpen={isCreateDealModalOpen} 
                onClose={() => setIsCreateDealModalOpen(false)}
                contacts={contacts}
                stages={stages}
            />

            <NewConversationModal 
                isOpen={isNewConvOpen}
                onClose={() => setIsNewConvOpen(false)}
                contacts={contacts}
                channels={channels}
                onSuccess={(newConv) => {
                    setActiveConvId(newConv.id);
                    axios.get('/api/inbox/refresh').then(({data}) => setConversations(data));
                }}
            />

        </AuthenticatedLayout>
    );
}
