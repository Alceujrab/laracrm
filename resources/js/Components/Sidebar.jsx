import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar({ menuItems = [], secondaryAction = null }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside 
            className={`flex flex-col h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
        >
            {/* Action Header / Add Button */}
            {secondaryAction && (
                <div className={`p-4 ${isCollapsed ? 'hidden' : 'block'}`}>
                    <button 
                        onClick={secondaryAction.onClick}
                        className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    >
                        <span>{secondaryAction.icon}</span>
                        <span>{secondaryAction.label}</span>
                    </button>
                </div>
            )}

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-2">
                    {menuItems.map((item, index) => {
                        const ItemIcon = item.icon;
                        const isActive = item.active;
                        
                        const content = (
                            <>
                                <ItemIcon 
                                    className={`flex-shrink-0 h-5 w-5 ${
                                        isActive 
                                            ? 'text-indigo-600 dark:text-indigo-400' 
                                            : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
                                    }`} 
                                    aria-hidden="true"
                                />
                                {!isCollapsed && (
                                    <span className="ml-3 flex-1 flex items-center justify-between">
                                        {item.label}
                                        {item.badge && (
                                            <span className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium ${
                                                isActive ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                                            }`}>
                                                {item.badge}
                                            </span>
                                        )}
                                    </span>
                                )}
                            </>
                        );

                        const className = `group flex items-center w-full px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                            isActive
                                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                        }`;

                        if (item.onClick) {
                            return (
                                <button key={index} onClick={item.onClick} className={className}>
                                    {content}
                                </button>
                            );
                        }
                        
                        return (
                            <Link key={index} href={item.route ? route(item.route) : '#'} className={className}>
                                {content}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Collapse Toggle */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-2">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="flex w-full items-center justify-center p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-md dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors"
                >
                    {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                </button>
            </div>
        </aside>
    );
}
