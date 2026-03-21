import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, FileText, Calendar, DollarSign } from 'lucide-react';
import axios from 'axios';

const CreateProposalModal = ({ isOpen, onClose, conversation, onSuccess }) => {
    if (!isOpen) return null;

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [vehicleId, setVehicleId] = useState('');
    const [notes, setNotes] = useState('');
    const [validUntil, setValidUntil] = useState('');
    const [items, setItems] = useState([{ description: 'Entrada', value: 0 }]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        if (isOpen && conversation) {
            setTitle(`Proposta para ${conversation.contact?.name || 'Cliente'}`);
            setVehicleId(conversation.deal?.vehicle_id || '');
        }
    }, [isOpen, conversation]);

    const addItem = () => {
        setItems([...items, { description: '', value: 0 }]);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    const totalValue = items.reduce((sum, item) => sum + parseFloat(item.value || 0), 0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('/api/proposals', {
                contact_id: conversation.contact_id,
                vehicle_id: vehicleId || null,
                deal_id: conversation.deal?.id || null,
                title,
                total_value: totalValue,
                items,
                valid_until: validUntil || null,
                notes
            });

            if (onSuccess) onSuccess(response.data);
            onClose();
        } catch (error) {
            console.error('Erro ao criar proposta:', error);
            alert('Falha ao gerar proposta. Verifique os dados.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-indigo-600" />
                                    Gerar Nova Proposta
                                </h3>
                                <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-500">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Título da Proposta</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Validade</label>
                                        <div className="mt-1 relative">
                                            <input
                                                type="date"
                                                value={validUntil}
                                                onChange={(e) => setValidUntil(e.target.value)}
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Veículo (ID opcional)</label>
                                        <input
                                            type="text"
                                            value={vehicleId}
                                            onChange={(e) => setVehicleId(e.target.value)}
                                            placeholder="Ex: 123"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="block text-sm font-medium text-gray-700">Itens da Proposta</label>
                                        <button
                                            type="button"
                                            onClick={addItem}
                                            className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-medium"
                                        >
                                            <Plus className="w-3 h-3" /> Adicionar Item
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        {items.map((item, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={item.description}
                                                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                                                    placeholder="Descrição (ex: Parcelamento)"
                                                    className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    required
                                                />
                                                <div className="relative w-32">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <span className="text-gray-500 sm:text-sm">R$</span>
                                                    </div>
                                                    <input
                                                        type="number"
                                                        value={item.value}
                                                        onChange={(e) => updateItem(index, 'value', e.target.value)}
                                                        className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        required
                                                    />
                                                </div>
                                                {items.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeItem(index)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Valor Total</span>
                                    <span className="text-lg font-bold text-indigo-700">
                                        R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </span>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Observações Internas</label>
                                    <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        rows={3}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Condições especiais, etc..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                            >
                                {loading ? 'Gerando...' : 'Confirmar e Gerar PDF'}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-3 inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateProposalModal;
