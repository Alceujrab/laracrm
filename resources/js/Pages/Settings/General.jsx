import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Save, Upload, Building2, Globe, Image as ImageIcon } from 'lucide-react';

export default function GeneralTab() {
    const { app_settings, flash } = usePage().props;
    const [logoPreview, setLogoPreview] = useState(app_settings.app_logo);

    const { data, setData, post, processing, errors } = useForm({
        app_name: app_settings.app_name || '',
        app_logo: null,
    });

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('app_logo', file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('settings.general.update'), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-500" />
                    Identidade Visual
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Personalize o nome e a logomarca que aparecem no sistema.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Nome da Empresa */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-gray-400" />
                                Nome da Empresa / Workspace
                            </label>
                            <input
                                type="text"
                                value={data.app_name}
                                onChange={e => setData('app_name', e.target.value)}
                                className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
                                placeholder="Ex: CF Auto CRM"
                            />
                            {errors.app_name && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.app_name}</p>}
                        </div>

                        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                            <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                                <Globe className="w-3.5 h-3.5" />
                                Visibilidade Global
                            </h4>
                            <p className="text-xs text-indigo-600/80 dark:text-indigo-400/70 leading-relaxed">
                                Este nome aparecerá na barra de título do navegador, no cabeçalho do sistema e em notificações enviadas aos clientes.
                            </p>
                        </div>
                    </div>

                    {/* Logo Upload */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-2">
                            <ImageIcon className="w-4 h-4 text-gray-400" />
                            Logomarca do Sistema
                        </label>
                        
                        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all group relative overflow-hidden">
                            {logoPreview ? (
                                <div className="relative group">
                                    <img 
                                        src={logoPreview} 
                                        alt="Logo Preview" 
                                        className="h-24 object-contain transition-transform group-hover:scale-105 duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                        <p className="text-white text-xs font-bold">Trocar Logo</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                                        <Upload className="w-8 h-8 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Clique para fazer upload</p>
                                    <p className="text-xs text-gray-400 mt-1">PNG, JPG ou SVG (Max. 2MB)</p>
                                </div>
                            )}
                            <input
                                type="file"
                                onChange={handleLogoChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                accept="image/*"
                            />
                        </div>
                        {errors.app_logo && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.app_logo}</p>}
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                    <button
                        type="submit"
                        disabled={processing}
                        className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all hover:scale-105 active:scale-95"
                    >
                        {processing ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <Save className="w-5 h-5" />
                        )}
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    );
}
