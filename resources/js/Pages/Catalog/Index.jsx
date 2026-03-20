import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { 
    Car, Upload, Plus, Edit, Trash2, X, FileJson, 
    Image as ImageIcon, MoreVertical, Check, AlertCircle 
} from 'lucide-react';

export default function CatalogIndex({ vehicles = [], flash }) {
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingVehicle, setEditingVehicle] = useState(null);

    // Form para Importação
    const { data: importData, setData: setImportData, post: postImport, processing: importProcessing, errors: importErrors, reset: resetImport } = useForm({
        file: null,
    });

    // Form para CRUD Manual
    const { data: vData, setData: setVData, post: postVehicle, put: putVehicle, processing: vProcessing, errors: vErrors, reset: resetVData } = useForm({
        make: '',
        model: '',
        year: new Date().getFullYear(),
        price: '',
        km: '',
        plate: '',
        status: 'available',
        images: null // arrays of files if editing/creating manual
    });

    const openCreateModal = () => {
        setEditingVehicle(null);
        resetVData();
        setVData({
            make: '', model: '', year: new Date().getFullYear(), price: '', km: '', plate: '', status: 'available', images: null
        });
        setIsEditModalOpen(true);
    };

    const openEditModal = (v) => {
        setEditingVehicle(v);
        setVData({
            make: v.make || '',
            model: v.model || '',
            year: v.year || new Date().getFullYear(),
            price: v.price || '',
            km: v.km || '',
            plate: v.plate || '',
            status: v.status || 'available',
            images: null // Keep null, unless uploading new ones
        });
        setIsEditModalOpen(true);
    };

    const handleDelete = (id) => {
        if (confirm('Tem certeza que deseja remover este veículo do estoque? Ele deixará de aparecer no chat imediatamente.')) {
            router.delete(`/catalog/${id}`);
        }
    };

    const submitImport = (e) => {
        e.preventDefault();
        postImport(route('catalog.import'), {
            onSuccess: () => {
                setIsImportModalOpen(false);
                resetImport();
            }
        });
    };

    const submitVehicle = (e) => {
        e.preventDefault();
        
        // Use router.post with _method=PUT to support multipart/form-data for updates
        if (editingVehicle) {
            router.post(`/catalog/${editingVehicle.id}`, {
                _method: 'put',
                ...vData
            }, {
                onSuccess: () => {
                    setIsEditModalOpen(false);
                    resetVData();
                }
            });
        } else {
            postVehicle(route('catalog.store'), {
                onSuccess: () => {
                    setIsEditModalOpen(false);
                    resetVData();
                }
            });
        }
    };

    return (
        <AuthenticatedLayout activeModule="catalog">
            <Head title="Gerenciar Catálogo" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                                <Car className="w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400" />
                                Catálogo de Veículos
                            </h1>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                Gerencie o estoque disponível que será projetado na Caixa de Entrada Omnichannel.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-3">
                            <button 
                                onClick={() => setIsImportModalOpen(true)}
                                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                <Upload className="w-4 h-4 mr-2" />
                                Importar XML/Json
                            </button>
                            <button 
                                onClick={openCreateModal}
                                className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Adicionar Manual
                            </button>
                        </div>
                    </div>

                    {/* Flash Messages */}
                    {flash?.success && (
                        <div className="mb-6 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded-md flex items-center shadow-sm">
                            <Check className="w-5 h-5 text-green-500 mr-3" />
                            <p className="text-sm font-medium text-green-800 dark:text-green-300">{flash.success}</p>
                        </div>
                    )}
                    {flash?.error && (
                        <div className="mb-6 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded-md flex items-center shadow-sm">
                            <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                            <p className="text-sm font-medium text-red-800 dark:text-red-300">{flash.error}</p>
                        </div>
                    )}

                    {/* Grid */}
                    {vehicles.length === 0 ? (
                        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <Car className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600" />
                            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Nenhum Veículo no Catálogo</h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                                Seu estoque está vazio. Importe a listagem base via XML ou JSON, ou cadastre o primeiro lote de forma manual.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {vehicles.map((v) => {
                                const images = v.images && typeof v.images === 'string' ? JSON.parse(v.images) : v.images;
                                const firstImage = images && images.length > 0 ? images[0] : null;

                                return (
                                    <div key={v.id} className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 relative">
                                        
                                        {/* Status Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm ${
                                                v.status === 'available' ? 'bg-green-500 text-white' : 
                                                v.status === 'sold' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                                            }`}>
                                                {v.status === 'available' ? 'Disponível' : v.status === 'sold' ? 'Vendido' : 'Reservado'}
                                            </span>
                                        </div>

                                        {/* Hover Actions */}
                                        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1">
                                            <button onClick={() => openEditModal(v)} className="p-1.5 bg-white/90 dark:bg-gray-800/90 hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-md backdrop-blur-sm shadow-sm transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleDelete(v.id)} className="p-1.5 bg-white/90 dark:bg-gray-800/90 hover:bg-red-50 dark:hover:bg-red-900 text-red-600 dark:text-red-400 rounded-md backdrop-blur-sm shadow-sm transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Image Area */}
                                        <div className="h-48 bg-gray-100 dark:bg-gray-900 w-full flex items-center justify-center relative overflow-hidden">
                                            {firstImage ? (
                                                <img 
                                                    src={firstImage.startsWith('http') ? firstImage : `/storage/${firstImage}`} 
                                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                                                    alt="carro" 
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-600">
                                                    <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                                                    <span className="text-xs font-semibold uppercase tracking-widest">Sem Imagem</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                                    {v.make} <span className="font-light">{v.model}</span>
                                                </h3>
                                            </div>
                                            
                                            <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mb-4">
                                                {v.price ? `R$ ${parseFloat(v.price).toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : 'Sob Consulta'}
                                            </p>
                                            
                                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider">Ano</span>
                                                    <span className="font-medium">{v.year}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider">KM</span>
                                                    <span className="font-medium">{v.km ? v.km.toLocaleString('pt-BR') : '--'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Importação Massiva */}
            {isImportModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <FileJson className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                                Importar Lote de Veículos
                            </h3>
                            <button onClick={() => setIsImportModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={submitImport}>
                            <div className="p-6">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                    Faça o upload de um arquivo estruturado JSON ou XML contendo sua frota. O sistema lerá os Nodes com marca, modelo, ano e os publicará no catálogo em segundos.
                                </p>

                                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 hover:border-indigo-400 dark:hover:bg-gray-800/80 transition-all cursor-pointer relative">
                                    <input 
                                        type="file" 
                                        accept=".json,.xml"
                                        onChange={e => setImportData('file', e.target.files[0])}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                        required
                                    />
                                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    {importData.file ? (
                                        <p className="font-medium text-indigo-600 dark:text-indigo-400">{importData.file.name}</p>
                                    ) : (
                                        <p className="font-medium text-gray-700 dark:text-gray-300">
                                            Arraste e solte o arquivo aqui<br/>
                                            <span className="text-xs text-gray-400 font-normal mt-1 block">Suporta apenas .JSON e .XML</span>
                                        </p>
                                    )}
                                </div>
                                {importErrors.file && <p className="text-red-500 text-xs mt-2 font-medium">{importErrors.file}</p>}
                            </div>
                            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex justify-end space-x-3">
                                <button type="button" onClick={() => setIsImportModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Cancelar</button>
                                <button type="submit" disabled={importProcessing} className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50 transition-colors shadow-sm flex items-center">
                                    {importProcessing ? 'Processando Lote...' : 'Iniciar Importação'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal CRUD Manual */}
            {isEditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                {editingVehicle ? 'Editar Ficha do Veículo' : 'Cadastrar Novo Veículo'}
                            </h3>
                            <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={submitVehicle} className="max-h-[80vh] overflow-y-auto">
                            <div className="p-6 grid grid-cols-2 gap-5">
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Make (Marca)</label>
                                    <input type="text" value={vData.make} onChange={e => setVData('make', e.target.value)} required className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" />
                                    {vErrors.make && <p className="text-red-500 text-xs mt-1">{vErrors.make}</p>}
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Modelo Exato</label>
                                    <input type="text" value={vData.model} onChange={e => setVData('model', e.target.value)} required className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Ano</label>
                                    <input type="number" value={vData.year} onChange={e => setVData('year', e.target.value)} required className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Preço de Venda (R$)</label>
                                    <input type="number" step="0.01" value={vData.price} onChange={e => setVData('price', e.target.value)} className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Quilometragem (KM)</label>
                                    <input type="number" value={vData.km} onChange={e => setVData('km', e.target.value)} className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Placa / ID Físico</label>
                                    <input type="text" value={vData.plate} onChange={e => setVData('plate', e.target.value)} className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Status de Operação</label>
                                    <select value={vData.status} onChange={e => setVData('status', e.target.value)} className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500">
                                        <option value="available">Disponível no Estoque</option>
                                        <option value="reserved">Reservado (Em negociação)</option>
                                        <option value="sold">Vendido (Concluído)</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">Upload da Foto de Capa</label>
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        multiple 
                                        onChange={e => setVData('images', e.target.files)} 
                                        className="w-full text-sm rounded-lg border border-gray-300 p-1.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" 
                                    />
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex justify-end space-x-3 sticky bottom-0">
                                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Cancelar</button>
                                <button type="submit" disabled={vProcessing} className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50 transition-colors shadow-sm">
                                    {vProcessing ? 'Salvando Ficha...' : (editingVehicle ? 'Aplicar Modificações' : 'Cadastrar na Prateleira')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
