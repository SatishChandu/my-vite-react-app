import { useAuth0 } from '@auth0/auth0-react';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email?: string, password?: string) => void;
    loginWithAuth0: () => void;
    logout: () => void;
    email?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const {isAuthenticated: auth0IsAuthenticated, loginWithRedirect, logout: auth0Logout, isLoading, user} = useAuth0();
    const [isCustomAuthenticated, setIsCustomAuthenticated] = useState(false);
    const [email, setEmail] = useState<string | undefined>(undefined);
    useEffect(() => {
        if (!isLoading) {
            setIsCustomAuthenticated(auth0IsAuthenticated);
            if(user) {
                setEmail(user.email);
            }
        }
    }, [auth0IsAuthenticated, isLoading, user]);

    const login = (email?: string, password?: string) => {
            if(email && password) {
                setEmail(email);
                setIsCustomAuthenticated(true);
            }else{
                loginWithRedirect();
            }
    };

    const logout = () => {
        setIsCustomAuthenticated(false);
        auth0Logout({logoutParams: {returnTo: window.location.origin}});
        setEmail(undefined);
    };

    const loginWithAuth0 = () => {
        loginWithRedirect();
    };

    const isAuthenticated = auth0IsAuthenticated || isCustomAuthenticated;

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout, loginWithAuth0, email }}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used in the AuthProvider");
    }
    return context;
};



