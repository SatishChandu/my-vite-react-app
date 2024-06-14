import React, { ReactNode } from "react";
import { useAuth } from './AuthContext';
import { Navigate } from "react-router-dom";


interface PrivateRouteProps{
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const {isAuthenticated} = useAuth();

    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;