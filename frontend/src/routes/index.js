// Importing libraries
import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Importing pages
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

// Importing pages
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';



function AppRoute({ token }) {

	return (
		<Routes>
			<Route element={<AuthRoute token={token} />}>
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />
			</Route>
			<Route element={<ProtectedRoute token={token}/>}>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Routes >
	)
}

export default AppRoute;