import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';
import { 
    User, Settings as SettingsIcon, Users, Shield, UsersRound, 
    TextCursorInput, Zap, MessageSquareQuote, Bot, Share2, 
    Plus, Search, Smartphone, Facebook, Instagram, Mail, LayoutTemplate,
    BrainCircuit
} from 'lucide-react';
import AutomationsSettings from './Automations';
import ProfileTab from './Profile';
import CustomFieldsTab from './CustomFields';
import QuickRepliesTab from './QuickReplies';
import OrganizationTab from './Organization';

export default function SettingsIndex({ orgUsers = [], orgGroups = [], orgRoles = [] }) {
    const { user } = usePage().props.auth;
    const [activeTab, setActiveTab] = useState('canais');

    // Sidebar Items
    const settingsMenu = [
        { label: 'Perfil Mestre', icon: User, active: activeTab === 'perfil', id: 'perfil' },
        { label: 'Geral', icon: SettingsIcon, active: activeTab === 'geral', id: 'geral' },
        { label: 'Organização (Acessos)', icon: Shield, active: activeTab === 'org', id: 'org' },
        { label: 'Canais', icon: Share2, active: activeTab === 'canais', id: 'canais' },
        { label: 'Campos Customizados', icon: TextCursorInput, active: activeTab === 'campos', id: 'campos' },
        { label: 'Frases Rápidas', icon: MessageSquareQuote, active: activeTab === 'frases', id: 'frases' },
        { label: 'Automações', icon: Zap, active: activeTab === 'automacoes', id: 'automacoes' },
        { label: 'Bot / Fluxos', icon: Bot, active: activeTab === 'bots', id: 'bots' },
    ];

    const [channels, setChannels] = useState([]);
    const [isAddRouteOpen, setIsAddRouteOpen] = useState(false);
    const [editingChannelId, setEditingChannelId] = useState(null);
    const [newChannelForm, setNewChannelForm] = useState({
        name: '',
        api_url: 'https://api.elitesuporte.com.br',
        api_key: '',
        instance_name: ''
    });
    const [qrCodeData, setQrCodeData] = useState(null);
    const [loading, setLoading] = useState(false);

    // AI Settings State
    const [isAiSettingsOpen, setIsAiSettingsOpen] = useState(null);
    const [aiForm, setAiForm] = useState({ ai_enabled: false, ai_prompt: '' });
    const [aiSaving, setAiSaving] = useState(false);

    useEffect(() => {
        if (activeTab === 'canais') {
            fetchChannels();
        }
    }, [activeTab]);

    const fetchChannels = async () => {
        try {
            const { data } = await axios.get('/api/channels');
            setChannels(data);
        } catch (error) {
            console.error(error);
        }
    };

    const openEditChannel = (channel) => {
        setEditingChannelId(channel.id);
        setNewChannelForm({
            name: channel.name,
            api_url: channel.credentials?.evolution_url || 'https://api.elitesuporte.com.br',
            api_key: channel.credentials?.api_key || '',
            instance_name: channel.identifier || ''
        });
        setIsAddRouteOpen(true);
    };

    const closeChannelModal = () => {
        setIsAddRouteOpen(false);
        setEditingChannelId(null);
        setNewChannelForm({ name: '', api_url: 'https://api.elitesuporte.com.br', api_key: '', instance_name: '' });
    };

    const handleCreateChannel = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editingChannelId) {
                const { data } = await axios.put(`/api/channels/${editingChannelId}`, newChannelForm);
                setChannels(channels.map(c => c.id === editingChannelId ? data.channel : c));
                alert('Canal de Atendimento atualizado com sucesso!');
                closeChannelModal();
            } else {
                const { data } = await axios.post('/api/channels', newChannelForm);
                setChannels([data.channel, ...channels]);
                closeChannelModal();
                
                // Se já veio conectado do backend (pois a sessão já estava viva na evolution)
                if (data.channel.status === 'connected') {
                    alert(`Canal conectado com sucesso! O Webhook que você precisa caso deseje apontar manualmente é:\n\n${data.webhook_url}`);
                } else {
                    showQrCode(data.channel);
                }
            }
        } catch (error) {
            alert('Erro ao configurar canal com servidor Evolution: ' + (error.response?.data?.error || error.message));
        } finally {
            setLoading(false);
        }
    };

    const showQrCode = async (channel) => {
        setQrCodeData({ channel, loading: true });
        try {
            const { data } = await axios.get(`/api/channels/${channel.id}/qrcode`);
            if (data?.instance?.state === 'open') {
                alert('Este canal já está devidamente conectado!');
                setQrCodeData(null);
                fetchChannels();
            } else if (data?.qrcode?.base64) {
                setQrCodeData({ channel, base64: data.qrcode.base64, loading: false });
            } else {
                // Em alguns casos a API demora uns segundinhos pro BAyLeis iniciar
                setTimeout(() => showQrCode(channel), 3000);
            }
        } catch (error) {
            setQrCodeData(null);
            alert('Falha ao conectar na Evolution API para pegar o QRCode.');
        }
    };

    const handleDeleteChannel = async (channel) => {
        if (!confirm('Tem certeza? Isso irá desconectar o seu número e deletar a instância.')) return;
        try {
            await axios.delete(`/api/channels/${channel.id}`);
            fetchChannels();
        } catch (error) {
            console.error(error);
        }
    };

    const openAiSettings = (channel) => {
        setIsAiSettingsOpen(channel);
        setAiForm({
            ai_enabled: channel.ai_enabled || false,
            ai_prompt: channel.ai_prompt || "Você é um consultor premium de vendas online. Trate o cliente com gentileza e seja persuasivo."
        });
    };

    const handleSaveAiSettings = async (e) => {
        e.preventDefault();
        setAiSaving(true);
        try {
            await axios.put(`/api/channels/${isAiSettingsOpen.id}/ai`, aiForm);
            alert("Inteligência Artificial configurada e ativa neste canal!");
            setIsAiSettingsOpen(null);
            fetchChannels();
        } catch (error) {
            alert('Falha ao salvar as instruções: ' + error.message);
        } finally {
            setAiSaving(false);
        }
    };

    const renderCanais = () => (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900/50 relative">
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Canais de Atendimento</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Conecte os canais Omnichannel por onde sua equipe receberá mensagens.</p>
                </div>
                
                <div className="flex space-x-3">
                    <button 
                        onClick={() => setIsAddRouteOpen(true)}
                        className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4 mr-2" /> 
                        Conectar Canal
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
                {channels.length === 0 ? (
                     <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                         Nenhum canal conectado ainda. Clique em "Conectar Canal" acima.
                     </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {channels.map(channel => {
                            return (
                                <div key={channel.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-lg bg-green-100 dark:bg-green-900/40`}>
                                            <Smartphone className={`w-6 h-6 text-green-500`} />
                                        </div>
                                        <span className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                                            channel.status === 'connected' ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400' :
                                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400'
                                        }`}>
                                            {channel.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{channel.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 truncate" title={channel.identifier}>{channel.identifier}</p>
                                    
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end space-x-2">
                                        <button 
                                            onClick={() => {
                                                const webhook = `${window.location.origin}/api/webhooks/evolution`;
                                                navigator.clipboard.writeText(webhook);
                                                alert(`Endereço do Webhook copiado:\n${webhook}\n\nSe preferir, cole este link na sua Evolution para receber as mensagens.`);
                                            }} 
                                            className="px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded transition-colors"
                                        >
                                            Copiar Webhook
                                        </button>
                                        <button onClick={() => openEditChannel(channel)} className="px-3 py-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded transition-colors flex items-center" title="Editar Credenciais">
                                            Editar
                                        </button>
                                        <button onClick={() => openAiSettings(channel)} className="px-3 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded transition-colors flex items-center">
                                            <BrainCircuit className="w-4 h-4 mr-1" /> Bot IA
                                        </button>
                                        {channel.status !== 'connected' && (
                                            <button onClick={() => showQrCode(channel)} className="px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded transition-colors">
                                                Ler QR Code
                                            </button>
                                        )}
                                        <button onClick={() => handleDeleteChannel(channel)} className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors">
                                            Remover
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Modal Create Channel */}
            {isAddRouteOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <Share2 className="w-5 h-5 mr-2 text-indigo-500"/>
                                {editingChannelId ? 'Editar Canal' : 'Conectar Novo Canal'}
                            </h3>
                            <button onClick={closeChannelModal} className="text-gray-400 hover:text-gray-600">&times;</button>
                        </div>
                        <form onSubmit={handleCreateChannel} className="p-6 overflow-y-auto max-h-[70vh]">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome de Exibição do Setor</label>
                                    <input 
                                        type="text" required placeholder="Ex: Financeiro"
                                        className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5"
                                        value={newChannelForm.name}
                                        onChange={(e) => setNewChannelForm({...newChannelForm, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">URL Base da Evolution API</label>
                                    <input 
                                        type="url" required placeholder="https://api.suaevolution.com"
                                        className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5"
                                        value={newChannelForm.api_url}
                                        onChange={(e) => setNewChannelForm({...newChannelForm, api_url: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Global API Key (Token)</label>
                                    <input 
                                        type="text" required placeholder="Cole a Global API Key aqui"
                                        className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5"
                                        value={newChannelForm.api_key}
                                        onChange={(e) => setNewChannelForm({...newChannelForm, api_key: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome da Instância (Identifier)</label>
                                    <input 
                                        type="text" required placeholder="Ex: vendedora_suely_01" disabled={!!editingChannelId}
                                        className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:opacity-50 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5"
                                        value={newChannelForm.instance_name}
                                        onChange={(e) => setNewChannelForm({...newChannelForm, instance_name: e.target.value})}
                                    />
                                    {!editingChannelId && <p className="text-xs text-gray-500 mt-2">Iremos abrir ou configurar os webhooks na instância escolhida automaticamente.</p>}
                                </div>
                            </div>
                            <div className="flex justify-end pt-6">
                                <button type="button" onClick={closeChannelModal} className="mr-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
                                <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm font-medium text-sm flex items-center">
                                    {loading ? 'Aguarde...' : editingChannelId ? 'Salvar Configuração' : 'Conectar Via QR Code'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal QR Code */}
            {qrCodeData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-sm shadow-2xl overflow-hidden flex flex-col items-center p-8 text-center border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Conectar WhatsApp</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Escaneie o QR Code abaixo com o seu WhatsApp para vincular a caixa: <strong>{qrCodeData.channel.name}</strong></p>
                        
                        <div className="bg-gray-100 dark:bg-white p-4 rounded-xl shadow-inner mb-6 flex items-center justify-center size-64">
                            {qrCodeData.loading ? (
                                <div className="text-gray-500 animate-pulse text-sm">Carregando instância na Evolution...</div>
                            ) : qrCodeData.base64 ? (
                                <img src={qrCodeData.base64} alt="Evolution API QR Code" className="w-full h-full object-contain" />
                            ) : (
                                <div className="text-red-500 text-sm">Nenhum QR base64 retornado.</div>
                            )}
                        </div>

                        <button onClick={() => { setQrCodeData(null); fetchChannels(); }} className="w-full px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg shadow-sm font-medium transition-colors">
                            Concluído / Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal AI Settings */}
            {isAiSettingsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <BrainCircuit className="w-5 h-5 mr-2 text-emerald-500" />
                                Inteligência Artificial: {isAiSettingsOpen.name}
                            </h3>
                            <button onClick={() => setIsAiSettingsOpen(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">&times;</button>
                        </div>
                        <form onSubmit={handleSaveAiSettings} className="p-6 flex-1 overflow-y-auto">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Habilitar Robô Vendedor</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            A IA só começará a conversar sozinha se não houver um corretor humano atribuído àquele cliente.
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={aiForm.ai_enabled} onChange={(e) => setAiForm({ ...aiForm, ai_enabled: e.target.checked })} />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                                    </label>
                                </div>

                                <div className={aiForm.ai_enabled ? 'opacity-100 transition-opacity' : 'opacity-50 pointer-events-none transition-opacity'}>
                                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Comando Mestre de Personalidade (Prompt)</label>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Defina o comportamento do bot, regras de simulação de consórcio, tom de voz, e restrições (ex: "Nunca crie preços").</p>
                                    <textarea 
                                        className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block px-4 py-3 h-64 text-sm"
                                        placeholder="Você atua no setor x... Seja amigável..."
                                        value={aiForm.ai_prompt}
                                        onChange={(e) => setAiForm({ ...aiForm, ai_prompt: e.target.value })}
                                        required={aiForm.ai_enabled}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end pt-6 border-t border-gray-100 dark:border-gray-700 mt-6">
                                <button type="button" onClick={() => setIsAiSettingsOpen(null)} className="mr-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
                                <button type="submit" disabled={aiSaving} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm font-medium text-sm flex items-center">
                                    {aiSaving ? 'Injetando Instruções...' : 'Salvar Personalidade'}
                                    <BrainCircuit className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
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
            sidebarMenuItems={settingsMenu.map(item => ({
                ...item, 
                onClick: item.onClick ? item.onClick : () => setActiveTab(item.id)
            }))}
        >
            <Head title={`Configurações - ${activeTab}`} />

            {activeTab === 'canais' && renderCanais()}
            {activeTab === 'bots' && renderBotBuilderMockup()}
            {activeTab === 'perfil' && <ProfileTab user={user} />}
            {activeTab === 'geral' && renderPlaceholder('Configurações Gerais', 'Upload da Logo, Fuso Horário, e Moeda Oficial do ambiente.')}
            {activeTab === 'org' && <OrganizationTab users={orgUsers} groups={orgGroups} roles={orgRoles} />}
            {activeTab === 'membros' && renderPlaceholder('Gerenciamento de Equipe', 'Tabela de agentes e botão Cadastrar Operador.')}
            {activeTab === 'permissoes' && renderPlaceholder('Permissões RBAC', 'Toggles lógicos sobre restrições de Caixa de Entrada e Negócios.')}
            {activeTab === 'grupos' && renderPlaceholder('Grupos de Departamentos', 'Vendas / Suporte / Onboarding para roteamento.')}
            {activeTab === 'campos' && <CustomFieldsTab />}
            {activeTab === 'frases' && <QuickRepliesTab />}
            {activeTab === 'automacoes' && <AutomationsSettings />}
        </AuthenticatedLayout>
    );
}
