import React, { useEffect } from 'react';
import Topbar from '@/Components/Topbar';
import Sidebar from '@/Components/Sidebar';
import { usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ 
    children, 
    activeModule = 'inbox',
    sidebarMenuItems = [],
    sidebarAction = null
}) {
    const { auth } = usePage().props;

    useEffect(() => {
        if (!window.Echo) return;

        const channel = window.Echo.private('inbox');
        
        const handleNewMessage = (e) => {
            if (e.message && e.message.sender_type === 'contact') {
                try {
                    const ctx = new (window.AudioContext || window.webkitAudioContext)();
                    const os = ctx.createOscillator();
                    const gain = ctx.createGain();
                    os.connect(gain);
                    gain.connect(ctx.destination);
                    os.type = 'sine';
                    os.frequency.setValueAtTime(880, ctx.currentTime);
                    os.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.15);
                    gain.gain.setValueAtTime(0.2, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                    os.start();
                    os.stop(ctx.currentTime + 0.5);
                } catch(err) { console.log("Audio API bloqueada ou indisponível", err); }
            }
        };

        channel.listen('NewMessageReceived', handleNewMessage);

        return () => {
            channel.stopListening('NewMessageReceived', handleNewMessage);
        };
    }, []);

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
