import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    Search, Mail, Users, Car, BarChart2, Settings, 
    Bell, Calendar, AtSign, ChevronDown, CheckSquare
} from 'lucide-react';
import Dropdown from '@/Components/Dropdown';

export default function Topbar({ activeModule = 'inbox' }) {
    const { auth, app_settings } = usePage().props;
    const { user } = auth;

    const modules = [
        { id: 'inbox', label: 'Caixa de Entrada', icon: Mail, route: 'inbox.index' },
        { id: 'crm', label: 'CRM', icon: Users, route: 'crm.index' },
        { id: 'tasks', label: 'Tarefas', icon: CheckSquare, route: 'tasks.index' },
        { id: 'catalog', label: 'Catálogo de Veículos', icon: Car, route: 'catalog.index' },
        { id: 'reports', label: 'Relatórios', icon: BarChart2, route: 'reports.index' },
        { id: 'settings', label: 'Configurações', icon: Settings, route: 'settings.index' },
    ];

    return (
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 fixed top-0 w-full z-30 transition-colors duration-200">
            {/* Left/Center: Search & Modules */}
            <div className="flex items-center flex-1 space-x-6">
                {/* Global Search */}
                <div className="relative w-64 hidden sm:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-gray-50 dark:bg-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Pesquisar (Ctrl+K)"
                    />
                </div>

                {/* Main Navigation Modules */}
                <nav className="flex space-x-1">
                    {modules.map((mod) => {
                        const Icon = mod.icon;
                        const isActive = activeModule === mod.id;
                        return (
                            <Link
                                key={mod.id}
                                href={route(mod.route)}
                                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive 
                                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400' 
                                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                }`}
                                title={mod.label}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="ml-2 hidden md:block">{mod.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Right: Actions & Profile */}
            <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button className="relative p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
                    <Bell className="h-5 w-5" />
                </button>

                {/* Calendar */}
                <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                    <Calendar className="h-5 w-5" />
                </button>

                {/* Mentions */}
                <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                    <AtSign className="h-5 w-5" />
                </button>

                {/* Workspace Selector */}
                <div className="hidden lg:block border-l border-r border-gray-200 dark:border-gray-700 px-4">
                    <button className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors gap-2">
                        {app_settings.app_logo && (
                            <img src={app_settings.app_logo} alt="Logo" className="h-6 object-contain" />
                        )}
                        <span>{app_settings.app_name}</span>
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                </div>

                {/* User Profile Dropdown */}
                <Dropdown>
                    <Dropdown.Trigger>
                        <button className="flex items-center space-x-2 focus:outline-none">
                            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-transparent hover:ring-indigo-300 transition-all">
                                {user.name.charAt(0)}
                            </div>
                        </button>
                    </Dropdown.Trigger>

                    <Dropdown.Content align="right" width="48">
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</p>
                        </div>
                        <Dropdown.Link href={route('profile.edit')}>Minha conta</Dropdown.Link>
                        <Dropdown.Link href="#">Configurações</Dropdown.Link>
                        <Dropdown.Link href="#">Central de ajuda</Dropdown.Link>
                        <Dropdown.Link href="#">Novidades</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">Sair</Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </header>
    );
}
