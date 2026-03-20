import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { 
    Car, Upload, Plus, Edit, Trash2, X, FileJson, FileText,
    Image as ImageIcon, MoreVertical, Check, AlertCircle, Search, Filter 
} from 'lucide-react';

export default function CatalogIndex({ vehicles = [], setting, flash }) {
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingVehicle, setEditingVehicle] = useState(null);
    const [viewingVehicle, setViewingVehicle] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredVehicles = vehicles.filter(v => {
        if (statusFilter !== 'all' && v.status !== statusFilter) return false;
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            return (v.make || '').toLowerCase().includes(term) || 
                   (v.model || '').toLowerCase().includes(term) || 
                   (v.year || '').toString().includes(term);
        }
        return true;
    });

    // Form para Configuração de Sincronização
    const { data: syncData, setData: setSyncData, post: postSync, processing: syncProcessing } = useForm({
        xml_feed_url: setting?.xml_feed_url || '',
        auto_sync: setting?.auto_sync || false,
    });
    const [forceProcessing, setForceProcessing] = useState(false);

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

    const submitSettings = (e) => {
        e.preventDefault();
        postSync(route('catalog.settings.update'), {
            preserveScroll: true,
            onSuccess: () => {
                setIsImportModalOpen(false);
            }
        });
    };

    const forceSync = () => {
        setForceProcessing(true);
        router.post(route('catalog.sync.force'), {}, {
            preserveScroll: true,
            onFinish: () => setForceProcessing(false),
            onSuccess: () => setIsImportModalOpen(false)
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
                                Configurar Sync
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

                    {/* Toolbar de Filtros e Busca */}
                    <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                                placeholder="Buscar por marca, modelo ou ano..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center space-x-2 w-full md:w-auto">
                            <Filter className="w-5 h-5 text-gray-400" />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="block w-full md:w-48 pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg dark:bg-gray-700 dark:text-gray-100 transition-colors"
                            >
                                <option value="all">Status: Todos</option>
                                <option value="available">Somente Disponíveis</option>
                                <option value="reserved">Somente Reservados</option>
                                <option value="sold">Somente Vendidos</option>
                            </select>
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
                    {filteredVehicles.length === 0 ? (
                        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <Car className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600" />
                            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Nenhum Veículo no Catálogo</h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                                Seu estoque está vazio. Configure a Sincronização Inteligente via Link XML para puxar todos automaticamente, ou adicione manualmente.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredVehicles.map((v) => {
                                const images = v.images && typeof v.images === 'string' ? JSON.parse(v.images) : v.images;
                                const firstImage = images && images.length > 0 ? images[0] : null;

                                return (
                                    <div key={v.id} onClick={() => setViewingVehicle(v)} className="cursor-pointer group flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 relative">
                                        
                                        {/* Status Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm ${
                                                v.status === 'available' ? 'bg-green-500 text-white' : 
                                                v.status === 'sold' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                                            }`}>
                                                {v.status === 'available' ? 'Disponível' : v.status === 'sold' ? 'Vendido' : 'Reservado'}
                                            </span>
                                        </div>

                                        {/* Clickable Area for Viewing Details */}
                                        {/* Status Badge */}
                                        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1">
                                            <button onClick={(e) => { e.stopPropagation(); openEditModal(v); }} className="p-1.5 bg-white/90 dark:bg-gray-800/90 hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-md backdrop-blur-sm shadow-sm transition-colors relative z-20">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); handleDelete(v.id); }} className="p-1.5 bg-white/90 dark:bg-gray-800/90 hover:bg-red-50 dark:hover:bg-red-900 text-red-600 dark:text-red-400 rounded-md backdrop-blur-sm shadow-sm transition-colors relative z-20">
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

            {/* Modal de Sincronização */}
            {isImportModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <FileJson className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                                Inteligência de Sincronização
                            </h3>
                            <button onClick={() => setIsImportModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={submitSettings}>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                    Configure o seu painel para importar e atualizar o estoque automaticamente a partir de um link da RevendaMais ou similar.
                                </p>

                                <div className="mb-5">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">URL do Feed (XML/JSON)</label>
                                    <input 
                                        type="url" 
                                        value={syncData.xml_feed_url} 
                                        onChange={e => setSyncData('xml_feed_url', e.target.value)} 
                                        className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" 
                                        placeholder="https://app.revendamais.com.br/..."
                                    />
                                </div>
                                
                                <div className="mb-6 flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">Auto-Sync (15 Minutos)</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">Varredura inteligente no background.</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" checked={syncData.auto_sync} onChange={e => setSyncData('auto_sync', e.target.checked)} className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                                    </label>
                                </div>
                                
                                <div className="flex justify-end space-x-3 mt-4">
                                    <button type="submit" disabled={syncProcessing} className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50 transition-colors shadow-sm">
                                        {syncProcessing ? 'Salvando...' : 'Salvar Configuração'}
                                    </button>
                                </div>
                            </form>
                            
                            <hr className="my-6 border-gray-200 dark:border-gray-700" />
                            
                            <div className="flex flex-col">
                                <p className="text-xs text-center text-gray-500 mb-3">
                                    Última sincronização: {setting?.last_sync_at ? new Date(setting.last_sync_at).toLocaleString('pt-BR') : 'Nunca realizada'}
                                </p>
                                <button onClick={forceSync} disabled={forceProcessing} className="w-full py-3 px-4 flex items-center justify-center text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 disabled:opacity-50 transition-all dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-900/50">
                                    {forceProcessing ? (
                                        <span className="animate-pulse">Varrendo Arquivo XML...</span>
                                    ) : (
                                        <>Disparar Sincronização Agora</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal VIEW Vehicle */}
            {viewingVehicle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                {viewingVehicle.make} <span className="font-light ml-1.5">{viewingVehicle.model}</span>
                            </h3>
                            <button onClick={() => setViewingVehicle(null)} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-6 md:flex md:space-x-8">
                            {/* Fotos Gallery */}
                            <div className="md:w-3/5 space-y-4">
                                {(() => {
                                    const vImgs = viewingVehicle.images && typeof viewingVehicle.images === 'string' ? JSON.parse(viewingVehicle.images) : (viewingVehicle.images || []);
                                    if(vImgs.length === 0) {
                                        return (
                                            <div className="h-64 sm:h-80 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col items-center justify-center">
                                                <ImageIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
                                                <span className="text-gray-400 dark:text-gray-500 font-medium tracking-wide uppercase">Sem fotos</span>
                                            </div>
                                        );
                                    }
                                    return (
                                        <>
                                            <div className="w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                                                <img 
                                                    src={vImgs[0].startsWith('http') ? vImgs[0] : `/storage/${vImgs[0]}`} 
                                                    alt="Foto Principal" 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                                                {vImgs.slice(1).map((img, i) => (
                                                    <div key={i} className="aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:opacity-80 transition-opacity cursor-pointer">
                                                        <img 
                                                            src={img.startsWith('http') ? img : `/storage/${img}`} 
                                                            className="w-full h-full object-cover" 
                                                            alt={`Foto ${i+2}`} 
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>

                            {/* Informações */}
                            <div className="md:w-2/5 mt-8 md:mt-0 flex flex-col">
                                <div className="mb-6">
                                    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm mb-4 ${
                                        viewingVehicle.status === 'available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                                        viewingVehicle.status === 'sold' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                    }`}>
                                        {viewingVehicle.status === 'available' ? 'Disponível' : viewingVehicle.status === 'sold' ? 'Vendido' : 'Reservado'}
                                    </span>
                                    
                                    <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
                                        {viewingVehicle.price ? `R$ ${parseFloat(viewingVehicle.price).toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : 'Sob Consulta'}
                                    </p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 space-y-4">
                                    <div className="flex flex-col border-b border-gray-200 dark:border-gray-700 pb-3">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Ano</span>
                                        <span className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-0.5">{viewingVehicle.year}</span>
                                    </div>
                                    <div className="flex flex-col border-b border-gray-200 dark:border-gray-700 pb-3">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Quilometragem (KM)</span>
                                        <span className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-0.5">{viewingVehicle.km ? viewingVehicle.km.toLocaleString('pt-BR') : '--'}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Placa / Referência</span>
                                        <span className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-0.5 uppercase">{viewingVehicle.plate || '--'}</span>
                                    </div>
                                </div>
                                
                                <div className="mt-auto pt-6 flex gap-3">
                                    <button 
                                        onClick={() => { setViewingVehicle(null); openEditModal(viewingVehicle); }}
                                        className="flex-1 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-800 font-bold rounded-xl transition-colors flex justify-center items-center"
                                    >
                                        <Edit className="w-4 h-4 mr-2" /> Editar Ficha
                                    </button>
                                </div>
                            </div>
                        </div>
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
