import React, { ReactNode } from "react";
import { useAuth } from './AuthContext';
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


interface PrivateRouteProps{
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const {isAuthenticated} = useAuth();
    const {isLoading} = useAuth0();

    if(isLoading){
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;