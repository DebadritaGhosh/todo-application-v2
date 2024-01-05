// Importing libraries
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Importing pages
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from "./pages/HomePage/HomePage";
import AppRoute from './routes';

// Importing routes
// import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  const { user } = useSelector((state) => state.user);

  return (
    // <BrowserRouter>
    //   <Routes>
    //   <ProtectedRoute
    //       exact
    //       path="/"
    //       element={<HomePage />}
    //       isAuthenticated={isAuthenticated}
    //     />
    //     <Route exact path="/register" element={<RegisterPage />} />
    //     <Route exact path="/login" element={<LoginPage />} />
    //   </Routes>
    // </BrowserRouter>
    <AppRoute token={user.access_token} />
  )
}

export default App;