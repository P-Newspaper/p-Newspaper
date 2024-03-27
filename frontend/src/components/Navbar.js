import React from 'react';
import '../styles.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    p-Newspaper
                </a>
                <div className="navbar-links">
                    <a href="/about">About Us</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;