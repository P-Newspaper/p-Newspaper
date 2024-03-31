import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NonUserLanding from './components/NonUserLanding';
import AboutUs from './components/AboutUs'; 
import Login from './components/Login'; 
import NonUserResults from './components/NonUserResults';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<NonUserLanding />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/submit" element={<NonUserResults />} />
        </Routes>

    );
}

export default AppRoutes;