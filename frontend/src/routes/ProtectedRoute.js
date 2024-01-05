// Importing libraries
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProtectedRoute({token}) {
	// const { user } = useSelector((state) => state.user);

    if (token) {
        return <Outlet />;
    }
    return <Navigate replace to="/login" />;
}

export default ProtectedRoute;