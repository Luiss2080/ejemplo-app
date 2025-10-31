/// <reference types="vite/client" />
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

// Importar las páginas estáticamente
const pages = {
    welcome: () => import('./pages/welcome'),
};

const appName = 'Laravel Desktop';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = pages[name as keyof typeof pages];
        if (page) {
            return page();
        }
        // Fallback
        return pages.welcome();
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
