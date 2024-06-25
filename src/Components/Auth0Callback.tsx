import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0Callback: React.FC = () => {
    const {isLoading, error, user} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoading && !error && user){
            navigate('/landingpage');
        }
    }, [isLoading, error, user, navigate]);

    return <div>Loading...</div>;
};

export default Auth0Callback;
