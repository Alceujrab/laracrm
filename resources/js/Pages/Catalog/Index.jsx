import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Plus, Upload, Search, Edit2, Trash2, MoreVertical, Settings } from 'lucide-react';

export default function CatalogIndex({ vehicles = [] }) {

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
    };

    return (
        <AuthenticatedLayout activeModule="catalog">
            <Head title="Catálogo de Veículos" />
            
            <div className="flex flex-col h-full">
                {/* Header Actions */}
                <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10 w-full">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Estoque de Veículos</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Gerencie os carros disponíveis via importação XML/JSON ou cadastro manual.</p>
                    </div>
                    
                    <div className="flex space-x-3">
                        <div className="relative">
                            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Buscar veículo..." 
                                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-64 dark:text-gray-200 transition-all font-medium"
                            />
                        </div>
                        <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                            <Upload className="w-4 h-4 mr-2 text-indigo-500 font-bold" />
                            Importar (XML/JSON)
                        </button>
                        <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Adicionar
                        </button>
                    </div>
                </div>

                {/* Grid de Veículos */}
                <div className="flex-1 overflow-y-auto p-8 bg-gray-50 dark:bg-gray-900/50">
                    {vehicles.length === 0 ? (
                        <div className="p-8 text-center text-gray-400">Nenhum veículo cadastrado no estoque.</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {vehicles.map((car) => (
                                <div key={car.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:shadow-md transition-shadow flex flex-col">
                                    <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                                        <img 
                                            src={car.images && car.images.length > 0 ? car.images[0] : 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=200&h=150'} 
                                            alt={`${car.make} ${car.model}`} 
                                            className="w-full h-full object-cover" 
                                        />
                                        <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 bg-white/90 dark:bg-gray-900/90 hover:bg-white text-gray-700 dark:text-gray-300 rounded shadow-sm transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 bg-white/90 dark:bg-gray-900/90 hover:bg-red-50 text-red-600 rounded shadow-sm transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-2 left-2">
                                            <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded tracking-wider ${
                                                car.status === 'available' ? 'bg-green-100 text-green-700 dark:bg-green-900/80 dark:text-green-300' :
                                                car.status === 'sold' ? 'bg-red-100 text-red-700 dark:bg-red-900/80 dark:text-red-300' :
                                                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/80 dark:text-yellow-300'
                                            }`}>
                                                {car.status === 'available' ? 'Disponível' : car.status === 'sold' ? 'Vendido' : 'Reservado'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate" title={`${car.make} ${car.model}`}>
                                                {car.make} {car.model}
                                            </h3>
                                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><MoreVertical className="w-4 h-4" /></button>
                                        </div>
                                        
                                        <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 mb-4 mt-1">
                                            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs font-semibold">{car.year}</span>
                                            <span>•</span>
                                            <span>{car.km?.toLocaleString('pt-BR')} km</span>
                                        </div>

                                        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-end">
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Preço à vista</p>
                                                <p className="text-xl font-bold text-green-600 dark:text-green-500">{formatCurrency(car.price)}</p>
                                            </div>
                                            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 transition-colors">
                                                Detalhes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
