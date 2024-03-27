import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">p-Newspaper</Link>
                <div className="navbar-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;