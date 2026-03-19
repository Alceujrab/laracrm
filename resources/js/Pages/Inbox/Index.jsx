import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { 
    Inbox, User, Clock, Archive, Plus, Search, MoreVertical, 
    FileText, Check, Paperclip, Smile, Zap, List, Mic, Info,
    Phone, MessageSquare, Tag, Briefcase, Calendar, Car, X
} from 'lucide-react';
import CreateDealModal from '@/Components/Deal/CreateDealModal';

export default function InboxIndex({ conversations: initialConversations = [], users = [], deals = [], contacts = [], stages = [] }) {
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
            <Head title="Caixa de Entrada" />

            <div className="flex h-[calc(100vh-4rem)] w-full overflow-hidden">
                
                {/* 1. Lista de Conversas */}
                <div className="w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Conversas</h2>
                            <div className="flex space-x-2">
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500 transition-colors">
                                    <Plus className="w-5 h-5" />
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
                                className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-md text-sm focus:ring-1 focus:ring-indigo-500 dark:text-gray-200"
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
                    <div className="flex-1 flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] relative min-w-0">
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
                                    className="text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md py-1.5 pl-3 pr-8 focus:ring-indigo-500" 
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
                                            <div className="bg-yellow-50 dark:bg-[#332a11] border border-yellow-200 dark:border-yellow-900/50 p-2.5 rounded-lg w-full flex items-start">
                                                <Info className="w-4 h-4 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-2" />
                                                <div>
                                                    <p className="text-xs font-semibold text-yellow-800 dark:text-yellow-400">Nota Interna</p>
                                                    <p className="text-sm text-yellow-900 dark:text-yellow-200 mt-0.5 whitespace-pre-line">{message.content}</p>
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
                                            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-3 rounded-2xl rounded-bl-none shadow-sm max-w-lg">
                                                <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">{message.content}</p>
                                                <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 block right-0 text-right">{formatTime(message.created_at)}</span>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={message.id} className="flex items-end justify-end">
                                        <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-none shadow-sm max-w-lg text-left">
                                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                                            <span className="text-[10px] text-indigo-200 mt-1 block right-0 text-right">{formatTime(message.created_at)}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

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
                                    placeholder={isInternalNote ? "Escreva uma nota interna para a equipe..." : "Escreva sua mensagem para o cliente..."}
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage(e);
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-between mt-2 px-1">
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-200">
                                        <input 
                                            type="checkbox" 
                                            checked={isInternalNote} 
                                            onChange={() => setIsInternalNote(!isInternalNote)} 
                                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                        <span>🔒 Nota Interna</span>
                                    </label>
                                </div>
                                <button type="submit" disabled={sending} className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors font-medium text-sm shadow-sm disabled:opacity-50 ${
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

                {/* 3. Painel Lateral Direito (CRM & Detalhes) */}
                {isContactPanelOpen && activeConv && (
                    <div className="w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-3xl font-bold mb-4">
                                {getInitials(activeConv.contact?.name)}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{activeConv.contact?.name || 'Desconhecido'}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{activeConv.contact?.phone || 'Sem número'}</p>
                            
                            <div className="w-full mt-2">
                                <button 
                                    onClick={() => setIsCreateDealModalOpen(true)}
                                    className="w-full flex justify-center items-center py-2.5 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:border-indigo-800/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 rounded-lg transition-colors text-sm font-semibold shadow-sm"
                                >
                                    <Briefcase className="w-4 h-4 mr-2" /> 
                                    + Negócio no CRM
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            
                            {/* Tags Section */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-100 dark:border-gray-800">
                                <h4 className="flex items-center text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wider">
                                    <Tag className="w-4 h-4 mr-2 text-indigo-500" /> Etiquetas (Tags)
                                </h4>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {activeConv.contact?.tags ? activeConv.contact.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-xs rounded-md font-medium flex items-center">
                                            {tag}
                                            <button onClick={() => handleRemoveTag(tag)} className="ml-1 hover:text-red-500"><X className="w-3 h-3"/></button>
                                        </span>
                                    )) : <span className="text-xs text-gray-400">Nenhuma tag...</span>}
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
                    </div>
                )}
            </div>

            {/* Modal de Criação de Negócio reaproveitando do CRM */}
            <CreateDealModal 
                isOpen={isCreateDealModalOpen} 
                onClose={() => setIsCreateDealModalOpen(false)}
                contacts={contacts}
                stages={stages}
            />

        </AuthenticatedLayout>
    );
}
