import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';



const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    else{
        return navigate('/purchase');
    }
    return children;
};

export default RequireAuth;