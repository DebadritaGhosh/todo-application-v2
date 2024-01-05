// Importing libraries
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


function AuthRoute({token}) {
	// const { user } = useSelector((state) => state.user);

    if (!token) {
        return <Outlet />;
    }
    return <Navigate replace to="/" />;
}

export default AuthRoute;