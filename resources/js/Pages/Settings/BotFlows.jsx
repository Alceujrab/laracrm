import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Zap, Bot, User, ArrowDown, Settings2, Plus, 
    Trash2, Save, MessageSquare, ShieldAlert,
    ChevronDown, ChevronUp, Loader2
} from 'lucide-react';

export default function BotFlows() {
    const [automations, setAutomations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [groups, setGroups] = useState([]);
    const [stages, setStages] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('/api/automations');
            setAutomations(data.automations || []);
            setGroups(data.groups || []);
            setStages(data.stages || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Filtra automações
    const mainBotAutomation = automations.find(a => a.trigger_type === 'new_message' && (a.name || '').includes('Cérebro'));
    const handoverAutomation = automations.find(a => a.action_type === 'transfer_group' && (a.name || '').includes('Transbordo'));

    const [handoverData, setHandoverData] = useState({
        group_id: '',
        message: 'Um momento, vou chamar um especialista...'
    });

    useEffect(() => {
        if (handoverAutomation) {
            const payload = typeof handoverAutomation.action_payload === 'string' 
                ? JSON.parse(handoverAutomation.action_payload) 
                : (handoverAutomation.action_payload || {});
            setHandoverData({
                group_id: payload.group_id || '',
                message: payload.message || 'Um momento, vou chamar um especialista...'
            });
        }
    }, [handoverAutomation]);

    const saveHandover = async () => {
        setLoading(true);
        try {
            const payload = {
                name: 'Transbordo Automático (Bot)',
                trigger_type: 'new_message',
                trigger_conditions: { content: 'atendimento' }, // Gatilho padrão
                action_type: 'transfer_group',
                action_payload: handoverData,
                is_active: true,
                priority: 10
            };

            if (handoverAutomation) {
                await axios.put(`/api/automations/${handoverAutomation.id}`, payload);
            } else {
                await axios.post('/api/automations', payload);
            }
            alert('Jornada do Bot salva com sucesso!');
            fetchData();
        } catch (error) {
            alert('Erro ao salvar fluxo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto w-full space-y-8 pb-20">
                
                {/* Cabeçalho */}
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Jornada do Atendimento</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Configure o caminho que o seu cliente percorre ao entrar em contato.</p>
                </div>

                {/* Bloco 1: Entrada */}
                <div className="relative">
                    <div className="flex flex-col items-center">
                        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 border-indigo-100 dark:border-indigo-900/50 flex items-center gap-4">
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl">
                                <MessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Gatilho de Entrada</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Toda nova mensagem recebida via WhatsApp, Instagram ou Messenger.</p>
                            </div>
                            <div className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase">Ativo</div>
                        </div>
                        <ArrowDown className="w-8 h-8 text-gray-300 my-4" />
                    </div>
                </div>

                {/* Bloco 2: Cérebro (IA) */}
                <div className="relative">
                    <div className="flex flex-col items-center">
                        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 border-emerald-100 dark:border-emerald-900/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl">
                                    <Bot className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Inteligência Artificial (Bot)</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">O robô analisa a mensagem e consulta sua base de conhecimento.</p>
                                </div>
                                <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase">Automático</div>
                            </div>
                            
                            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">Treinamento Atual:</span>
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Ativado</span>
                                </div>
                            </div>
                        </div>
                        <ArrowDown className="w-8 h-8 text-gray-300 my-4" />
                    </div>
                </div>

                {/* Bloco 3: Transbordo / Decisão */}
                <div className="relative">
                    <div className="flex flex-col items-center">
                        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 border-orange-100 dark:border-orange-900/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/40 rounded-xl">
                                    <ShieldAlert className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Regra de Transbordo (Humano)</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Acionada quando o robô identifica uma solicitação de atendimento humano.</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-orange-50/50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300">Setor de Destino</p>
                                        <p className="text-xs text-gray-500">Para onde enviar o cliente.</p>
                                    </div>
                                    <select 
                                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-lg text-sm"
                                        value={handoverData.group_id}
                                        onChange={e => setHandoverData({ ...handoverData, group_id: e.target.value })}
                                    >
                                        <option value="">Selecione um Setor</option>
                                        {groups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                                    </select>
                                </div>

                                <div className="flex flex-col p-4 bg-orange-50/50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Mensagem de Transbordo</p>
                                    <input 
                                        type="text" 
                                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-lg text-sm w-full"
                                        placeholder="Ex: Um momento, vou chamar um especialista..."
                                        value={handoverData.message}
                                        onChange={e => setHandoverData({ ...handoverData, message: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rodapé de Ação */}
                <div className="flex justify-center pt-8">
                    <button 
                        onClick={saveHandover}
                        disabled={loading}
                        className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                        Salvar Jornada do Bot
                    </button>
                </div>

            </div>
        </div>
    );
}
