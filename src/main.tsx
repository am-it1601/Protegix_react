import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App';
import { store } from './redux/store';
import { queryClient } from './utility/queryclient';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />

        <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={3}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
