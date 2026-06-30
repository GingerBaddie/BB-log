import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';

export default function Protected({children, authentication = true }) {
    
    const navigate  = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        // making it simple

        // if(authStatus === true) {
        //     navigate('/');
        // }

        // else if (authStatus === false){
        //     navigate('/login');
        // }

        if(authentication && authStatus !== authentication) {
            navigate('/login')
        } 
        
        else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }

        setLoader(false);

    }, [authStatus, navigate, authentication])

    return loader ? <Loader /> : <>{children}</>
}

