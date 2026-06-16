import type { AuthContextType } from "#/types";
import { createContext, useContext, useState, type ReactNode} from "react";

const AuthContext = createContext<AuthContextType | undefined>
(undefined);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<AuthContextType['user'] | null>(null);

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