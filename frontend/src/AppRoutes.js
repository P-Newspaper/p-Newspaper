import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsForm from './components/NewsForm';
import AboutUs from './components/AboutUs'; 
import Login from './components/Login'; 

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<NewsForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
        </Routes>

    );
}

export default AppRoutes;