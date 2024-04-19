import React from "react";
import "../styles/login.css";

function LoginButton({ onLogin }) {
  return (
    <div className="login-container">
        <div className="title">
            Sign in with Google
        </div>
        <div>
            <button className="login-button" onClick={onLogin}>
            Sign in with Google
            </button>
        </div>
    </div>
  );
}

export default LoginButton;
