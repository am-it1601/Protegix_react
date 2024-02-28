import './index.css';

import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthenticationContext } from './context';
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
                <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} />
            </QueryClientProvider>
        </AuthenticationContext.Provider>
    </React.StrictMode>
);
