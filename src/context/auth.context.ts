import { createContext } from 'react';
import { AuthenticationContextState } from 'types';
import { boolean } from 'zod';

const defaultAuthenticationContext:AuthenticationContextState = {
    principal : null,
    isAuthenticated : false,
    setPrincipal : () => null,
    getPermissions: () => []
}
const AuthenticationContext = createContext<AuthenticationContextState>(defaultAuthenticationContext);

export default AuthenticationContext;