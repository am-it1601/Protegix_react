import './index.css';

import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthenticationContext } from './context';
import React from 'react';

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
      <App />
    </AuthenticationContext.Provider>
  </React.StrictMode>,
);
