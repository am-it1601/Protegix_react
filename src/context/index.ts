import { createContext } from 'react';
import { ThemeProviderState } from 'types';

export const AuthenticationContext = createContext({
    authenticated: false,
    currentUser: undefined,
    isAdmin: false,
    permissions: [],
    token: null,
});

export const SidebarContext = createContext({ expanded: true, location: '' });

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)