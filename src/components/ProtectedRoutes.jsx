import { useEffect, useState } from 'react'

// Router Dom
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    // Estado para controlar el si el usuario cuenta con jwtToken o no (si esta logeado o no)
    const jwtToken = localStorage.getItem('token');
    const [token, setToken] = useState();

    useEffect(() => {
        if(typeof jwtToken === "string"){
            setToken(true)
        } else {
            setToken(false)
        }
    }, [jwtToken]);

    if (token === false) {
        return <Navigate to="/adminlogin"/>;
    } else {
        return <Outlet />;
    }

};

export default ProtectedRoutes;