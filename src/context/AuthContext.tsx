import { refreshAccessToken } from "#/api/auth";
import type { AuthContextType } from "#/types";
import { createContext, useContext, useState, useEffect, type ReactNode} from "react";

const AuthContext = createContext<AuthContextType | undefined>
(undefined);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<AuthContextType['user'] | null>(null);

    useEffect(() => {
        const loadAuth = async () => {
            try {
                const { accessToken: newToken, user} = await refreshAccessToken();
                setAccessToken(newToken);
                setUser(user);
            } catch (err: any) {
                console.log('Failed to refresh token: ', err);
            }
        }
        loadAuth();
    }, []);

    return (
        <AuthContext.Provider value={{accessToken, setAccessToken, user, setUser}}>
            { children }
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used withing a provider');
    return context;
}