import React, { useState, useRef } from 'react';
import { router } from '@inertiajs/react';
import { Camera, User, Mail, Lock, Save, CheckCircle } from 'lucide-react';

const InputClass = 'w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors';
const LabelClass = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5';

function SectionCard({ title, icon: Icon, children }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                    <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
            </div>
            <div className="p-6">{children}</div>
        </div>
    );
}

function Toast({ message, onClose }) {
    return (
        <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium text-sm">{message}</span>
            <button onClick={onClose} className="ml-2 text-green-200 hover:text-white">✕</button>
        </div>
    );
}

export default function ProfileTab({ user }) {
    const [profileForm, setProfileForm] = useState({ name: user?.name || '', email: user?.email || '' });
    const [passwordForm, setPasswordForm] = useState({ current_password: '', password: '', password_confirmation: '' });
    const [toast, setToast] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [profileLoading, setProfileLoading] = useState(false);
    const [passwordLoading, setPasswordLoading] = useState(false);
    const fileRef = useRef(null);

    const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 4000); };

    const avatarUrl = avatarPreview || (user?.avatar_url ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'U')}&background=6366f1&color=fff&size=128`);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setAvatarPreview(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append('avatar', file);

        router.post(route('settings.profile.avatar'), formData, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => showToast('Foto de perfil atualizada!'),
            onError: (e) => console.error(e),
        });
    };

    const handleProfileSave = (e) => {
        e.preventDefault();
        setProfileLoading(true);
        router.patch(route('settings.profile.update'), profileForm, {
            preserveScroll: true,
            onSuccess: () => { showToast('Perfil atualizado!'); setProfileLoading(false); },
            onError: () => setProfileLoading(false),
        });
    };

    const handlePasswordSave = (e) => {
        e.preventDefault();
        setPasswordLoading(true);
        router.patch(route('settings.profile.password'), passwordForm, {
            preserveScroll: true,
            onSuccess: () => {
                showToast('Senha alterada com sucesso!');
                setPasswordForm({ current_password: '', password: '', password_confirmation: '' });
                setPasswordLoading(false);
            },
            onError: () => setPasswordLoading(false),
        });
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950 overflow-y-auto">
            {/* Header */}
            <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Meu Perfil</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Gerencie suas informações pessoais e senha da conta.</p>
            </div>

            <div className="flex-1 p-6 xl:p-8 space-y-6 max-w-2xl">
                {/* Avatar */}
                <SectionCard title="Foto de Perfil" icon={Camera}>
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <img src={avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-100 dark:ring-indigo-900" />
                            <button
                                onClick={() => fileRef.current?.click()}
                                className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                            >
                                <Camera className="w-6 h-6 text-white" />
                            </button>
                            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 dark:text-white">{user?.name}</p>
                            <p className="text-sm text-gray-500 mt-0.5">{user?.email}</p>
                            <button onClick={() => fileRef.current?.click()} className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                                Alterar foto
                            </button>
                            <p className="text-xs text-gray-400 mt-0.5">JPG, PNG ou GIF. Máximo 2 MB.</p>
                        </div>
                    </div>
                </SectionCard>

                {/* Name & Email */}
                <SectionCard title="Informações Pessoais" icon={User}>
                    <form onSubmit={handleProfileSave} className="space-y-4">
                        <div>
                            <label className={LabelClass}>Nome completo</label>
                            <input type="text" required className={InputClass} value={profileForm.name} onChange={e => setProfileForm(f => ({ ...f, name: e.target.value }))} />
                        </div>
                        <div>
                            <label className={LabelClass}>Endereço de email</label>
                            <input type="email" required className={InputClass} value={profileForm.email} onChange={e => setProfileForm(f => ({ ...f, email: e.target.value }))} />
                        </div>
                        <div className="flex justify-end pt-2">
                            <button type="submit" disabled={profileLoading} className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50">
                                <Save className="w-4 h-4" />
                                {profileLoading ? 'Salvando...' : 'Salvar Informações'}
                            </button>
                        </div>
                    </form>
                </SectionCard>

                {/* Password */}
                <SectionCard title="Segurança — Alterar Senha" icon={Lock}>
                    <form onSubmit={handlePasswordSave} className="space-y-4">
                        <div>
                            <label className={LabelClass}>Senha atual</label>
                            <input type="password" required className={InputClass} value={passwordForm.current_password} onChange={e => setPasswordForm(f => ({ ...f, current_password: e.target.value }))} />
                        </div>
                        <div>
                            <label className={LabelClass}>Nova senha</label>
                            <input type="password" required className={InputClass} value={passwordForm.password} onChange={e => setPasswordForm(f => ({ ...f, password: e.target.value }))} />
                        </div>
                        <div>
                            <label className={LabelClass}>Confirmar nova senha</label>
                            <input type="password" required className={InputClass} value={passwordForm.password_confirmation} onChange={e => setPasswordForm(f => ({ ...f, password_confirmation: e.target.value }))} />
                        </div>
                        <div className="flex justify-end pt-2">
                            <button type="submit" disabled={passwordLoading} className="flex items-center gap-2 px-5 py-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium transition-colors disabled:opacity-50">
                                <Lock className="w-4 h-4" />
                                {passwordLoading ? 'Alterando...' : 'Alterar Senha'}
                            </button>
                        </div>
                    </form>
                </SectionCard>
            </div>

            {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </div>
    );
}
