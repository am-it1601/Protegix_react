import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { AuthContextProvider } from './components/provider/AuthProvider';
import { Toaster } from './components/ui/sonner';
import { queryClient } from './lib/query.client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <App />
                {/* <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} /> */}
            </QueryClientProvider>
        </AuthContextProvider>
        <Toaster richColors position="bottom-center" offset="64px" />
    </React.StrictMode>
);
