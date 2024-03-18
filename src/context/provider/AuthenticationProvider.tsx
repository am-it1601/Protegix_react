import _ from 'lodash';
import { useState } from 'react';

import { useSession } from '@/hooks/useSession';
import { ILoggedInUser } from '@/types/models';
import { AuthProviderProps } from '@/types/providers';
import { AuthenticationContextState } from '@/types/state';

import AuthenticationProviderContext from '../auth.context';

export function AuthenticationProvider({ children, ...props }: AuthProviderProps) {
    const sessionPrincipal = useSession();

    const [principal, setPrincipal] = useState<ILoggedInUser>(sessionPrincipal as ILoggedInUser);
    const value: AuthenticationContextState = {
        principal: sessionPrincipal,
        isAuthenticated: principal != null || principal != undefined,
        getPermissions: () => {
            return principal ? principal.permissions : [];
        },
        setPrincipal: (auth) => {
            setPrincipal(auth);
        },
    };

    return (
        <AuthenticationProviderContext.Provider value={value} {...props}>
            {children}
        </AuthenticationProviderContext.Provider>
    );
}
