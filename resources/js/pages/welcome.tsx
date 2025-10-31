import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface WelcomeProps {
    appInfo?: {
        name: string;
        version: string;
        environment: string;
    };
}

export default function Welcome({ appInfo }: WelcomeProps) {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                }),
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head title="Mi Primera App de Escritorio" />

            <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                {/* Header con fondo */}
                <header className="border-b border-purple-800/20 bg-slate-900/80 backdrop-blur-sm">
                    <div className="w-full px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-white">
                                    Mi Primera App Desktop
                                </h1>
                                <p className="text-purple-300">
                                    Powered by NativePHP Stack
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-purple-300">{currentTime}</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="w-full py-10">
                    <div className="w-full px-6 text-center">
                        <div className="mb-8">
                            <h2 className="mb-4 text-4xl font-bold text-white">
                                Mi
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {' '}
                                    Primera App Desktop
                                </span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-300">
                                He desarrollado esta aplicación de escritorio
                                combinando tecnologías web modernas para crear
                                una experiencia nativa multiplataforma
                            </p>
                        </div>

                        {/* Tech Stack Cards */}
                        <div className="mx-auto w-full max-w-6xl">
                            <h3 className="mb-6 text-center text-2xl font-semibold text-white">
                                Tecnologías que utilicé
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {/* Laravel */}
                                <div className="rounded-xl border border-red-500/30 bg-slate-800/60 p-6 backdrop-blur-sm">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <h4 className="mb-2 text-center font-semibold text-white">
                                        Laravel
                                    </h4>
                                    <p className="text-center text-sm text-gray-300">
                                        Framework PHP robusto para el backend
                                        con Eloquent ORM y arquitectura MVC
                                    </p>
                                </div>

                                {/* React */}
                                <div className="rounded-xl border border-blue-500/30 bg-slate-800/60 p-6 backdrop-blur-sm">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                                        <span className="text-2xl">⚛️</span>
                                    </div>
                                    <h4 className="mb-2 text-center font-semibold text-white">
                                        React
                                    </h4>
                                    <p className="text-center text-sm text-gray-300">
                                        Biblioteca de JavaScript para construir
                                        interfaces de usuario interactivas y
                                        modernas
                                    </p>
                                </div>

                                {/* PHPDesktop */}
                                <div className="rounded-xl border border-purple-500/30 bg-slate-800/60 p-6 backdrop-blur-sm">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                                        <span className="text-2xl">🖥️</span>
                                    </div>
                                    <h4 className="mb-2 text-center font-semibold text-white">
                                        PHPDesktop
                                    </h4>
                                    <p className="text-center text-sm text-gray-300">
                                        Wrapper que convierte tu aplicación web
                                        en una app de escritorio nativa
                                    </p>
                                </div>

                                {/* Inertia.js */}
                                <div className="rounded-xl border border-green-500/30 bg-slate-800/60 p-6 backdrop-blur-sm">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                                        <span className="text-2xl">🔗</span>
                                    </div>
                                    <h4 className="mb-2 text-center font-semibold text-white">
                                        Inertia.js
                                    </h4>
                                    <p className="text-center text-sm text-gray-300">
                                        Puente entre Laravel y React, creando
                                        SPAs sin APIs complejas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full py-10">
                    <div className="w-full px-6">
                        <div className="mx-auto max-w-4xl">
                            <h3 className="mb-6 text-center text-2xl font-semibold text-white">
                                Características implementadas
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                                    <h4 className="mb-3 flex items-center font-semibold text-white">
                                        <span className="mr-3 text-xl">🚀</span>
                                        Hot Reload
                                    </h4>
                                    <p className="text-gray-300">
                                        Configuré el hot reload para acelerar el
                                        desarrollo. Los cambios que hago se
                                        reflejan inmediatamente en la
                                        aplicación.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                                    <h4 className="mb-3 flex items-center font-semibold text-white">
                                        <span className="mr-3 text-xl">🎨</span>
                                        Diseño Moderno
                                    </h4>
                                    <p className="text-gray-300">
                                        Utilizo Tailwind CSS para crear una
                                        interfaz moderna y responsiva con un
                                        sistema de diseño consistente.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                                    <h4 className="mb-3 flex items-center font-semibold text-white">
                                        <span className="mr-3 text-xl">📱</span>
                                        Multiplataforma
                                    </h4>
                                    <p className="text-gray-300">
                                        Con una sola base de código, mi
                                        aplicación funciona en Windows, macOS y
                                        Linux, maximizando su alcance y
                                        usabilidad.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                                    <h4 className="mb-3 flex items-center font-semibold text-white">
                                        <span className="mr-3 text-xl">⚡</span>
                                        Optimizada
                                    </h4>
                                    <p className="text-gray-300">
                                        Implementé Vite para builds
                                        ultrarrápidos y optimización automática,
                                        garantizando una experiencia de usuario
                                        fluida.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Info Panel */}
                <section className="w-full py-10">
                    <div className="w-full px-6">
                        <div className="mx-auto max-w-4xl rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                            <h3 className="mb-4 text-center text-xl font-semibold text-white">
                                Detalles de mi aplicación
                            </h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="text-center">
                                    <div className="mb-2 text-2xl text-purple-400">
                                        🏷️
                                    </div>
                                    <h4 className="font-semibold text-white">
                                        Mi Aplicación
                                    </h4>
                                    <p className="text-gray-300">
                                        {appInfo?.name || 'Laravel Desktop'}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="mb-2 text-2xl text-blue-400">
                                        📦
                                    </div>
                                    <h4 className="font-semibold text-white">
                                        Versión Actual
                                    </h4>
                                    <p className="text-gray-300">
                                        {appInfo?.version || '1.0.0'}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="mb-2 text-2xl text-green-400">
                                        🌍
                                    </div>
                                    <h4 className="font-semibold text-white">
                                        Entorno
                                    </h4>
                                    <p className="text-gray-300">
                                        {appInfo?.environment || 'Desarrollo'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-purple-800/30 bg-slate-900/50 py-6 backdrop-blur-sm">
                    <div className="w-full px-6 text-center">
                        <p className="text-gray-400">
                            Desarrollado para una actividad grupal en la UPDS
                            <span className="text-purple-400">
                                {' '}
                                , teniendo como maximo protagonista a NativePHP
                            </span>
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                            Se puede editar en{' '}
                            <code className="rounded bg-slate-800 px-2 py-1 text-purple-300">
                                resources/js/pages/welcome.tsx
                            </code>{' '}
                            y ver los cambios instantáneamente tanto en el
                            servidor laravel como en la app de escritorio con
                            PHPDesktop!
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
