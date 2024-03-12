import { AuthContext } from '@/context';
import React, { useState } from 'react';
import { Auth } from 'types';

type AuthProviderProps = {
    children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [auth, setAuth] = useState<Auth>({
        authenticated: false,
        currentUser: undefined,
        isAdmin: false,
        permissions: [],
        token: null,
    });

    return <AuthContext.Provider value={{ setAuth, auth }}>{children}</AuthContext.Provider>;
}
