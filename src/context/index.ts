import { createContext } from 'react';

export const AuthenticationContext = createContext({
  authenticated: false,
  currentUser: undefined,
  isAdmin: false,
  permissions: [],
  token: null,
});
