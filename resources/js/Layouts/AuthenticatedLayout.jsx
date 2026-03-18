import React from 'react';
import Topbar from '@/Components/Topbar';
import Sidebar from '@/Components/Sidebar';

export default function AuthenticatedLayout({ 
    children, 
    activeModule = 'inbox',
    sidebarMenuItems = [],
    sidebarAction = null
}) {
    // This wrapper enables dark mode support on the HTML tag
    // For tailwind class "dark" usually we toggle a class on the html element
    // This happens outside the component but the layout adapts.

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
            {/* Topbar: fixed at the top */}
            <Topbar activeModule={activeModule} />

            {/* Main Layout Area below Topbar */}
            <div className="flex flex-1 pt-16 h-screen overflow-hidden">
                
                {/* Navigable Sidebar */}
                <Sidebar menuItems={sidebarMenuItems} secondaryAction={sidebarAction} />
                
                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto w-full h-full bg-white dark:bg-gray-950">
                    {children}
                </main>
            </div>
        </div>
    );
}
