import { Dispatch, SetStateAction, createContext } from 'react';
import { Auth, ThemeProviderState } from 'types';


export interface IAuthContext {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}
const defaultAuth = {
  auth: {
      authenticated: false,
      currentUser: undefined,
      isAdmin: false,
      permissions: [],
      token: null,
  },
  setAuth: (auth: Auth) => {},
} as IAuthContext;

export const AuthContext = createContext(defaultAuth);


export const SidebarContext = createContext({ expanded: true, location: '' });

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)




