import { Theme } from './app';
import { ILoggedInUser } from './models';

export type AuthenticationContextState = {
  principal : ILoggedInUser | null, 
  isAuthenticated : boolean,
  getPermissions : () => string[];
  setPrincipal: (authenticationPrincipal: ILoggedInUser)=> void;
}

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}