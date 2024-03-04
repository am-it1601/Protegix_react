import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import { Toaster } from './components/ui/sonner';
import { AuthenticationContext } from './context';
import { queryClient } from './lib/query.client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthenticationContext.Provider
            value={{
                authenticated: true,
                currentUser: undefined,
                isAdmin: false,
                permissions: [],
                token: null,
            }}>
            <QueryClientProvider client={queryClient}>
                <App />
                {/* <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} /> */}
            </QueryClientProvider>
        </AuthenticationContext.Provider>
        <Toaster richColors position="bottom-center" offset="64px" />
    </React.StrictMode>
);
