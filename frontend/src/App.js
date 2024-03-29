import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;

