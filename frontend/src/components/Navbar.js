import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { UserContext } from "./UserProvider";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          p-Newspaper
        </Link>
        <div className="navbar-links">
          <Link to="/about">About Us</Link>
          {user
            ? <Link to="/myaccount">My Account</Link>
            : <Link to="/login">Login</Link>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
