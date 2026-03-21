import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FileText, Download, Calendar, User, Car, ExternalLink, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function Index({ proposals }) {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'accepted': return <CheckCircle className="w-4 h-4 text-green-500" />;
            case 'rejected': return <XCircle className="w-4 h-4 text-red-500" />;
            default: return <Clock className="w-4 h-4 text-yellow-500" />;
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'accepted': return 'Aceita';
            case 'rejected': return 'Recusada';
            case 'sent': return 'Enviada';
            default: return 'Pendente';
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Propostas / Orçamentos</h2>}
        >
            <Head title="Propostas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-medium">Histórico de Propostas</h3>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proposta</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veículo</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {proposals.map((proposal) => (
                                            <tr key={proposal.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <FileText className="w-5 h-5 text-indigo-500 mr-2" />
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">{proposal.title}</div>
                                                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                                                <Calendar className="w-3 h-3" />
                                                                {new Date(proposal.created_at).toLocaleDateString()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{proposal.contact.name}</div>
                                                    <div className="text-xs text-gray-500">{proposal.contact.phone}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {proposal.vehicle ? (
                                                        <div className="flex items-center">
                                                            <Car className="w-4 h-4 text-gray-400 mr-1" />
                                                            <div className="text-sm text-gray-900">{proposal.vehicle.make} {proposal.vehicle.model}</div>
                                                        </div>
                                                    ) : (
                                                        <span className="text-xs text-gray-400">Nenhum veículo</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                                    R$ {parseFloat(proposal.total_value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-1 text-sm">
                                                        {getStatusIcon(proposal.status)}
                                                        {getStatusText(proposal.status)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <a 
                                                        href={`/proposals/${proposal.id}/download`} 
                                                        target="_blank" 
                                                        className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1 font-medium"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        Download
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}

                                        {proposals.length === 0 && (
                                            <tr>
                                                <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                                                    Nenhuma proposta gerada ainda. Vá ao Inbox para criar sua primeira proposta.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
