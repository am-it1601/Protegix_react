import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useMemo } from 'react';
import { ILoggedInUser, User } from 'types';

export const useSession = () => {
    const getAuthToken = (): string => {
        return Cookies.get('auth');
    };
    const authToken = getAuthToken();

    const loggedInUser: ILoggedInUser | null = useMemo(() => {
        if (authToken) {
            const loggedInUser = jwtDecode(authToken);
            if (loggedInUser) {
                return loggedInUser as ILoggedInUser;
            }
        }
        return null;
    }, [authToken]);

    return loggedInUser;
};
