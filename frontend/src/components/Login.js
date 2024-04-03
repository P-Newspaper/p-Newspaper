import React, { useState } from 'react';
import '../styles/login.css'


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password', password);
        // send the username and password to the server
    }
    
    return (
        <div className="container">
            <h2>User Login</h2>
            <div className="username-container"> 
                <textarea
                    id = "username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
            </div>

            <div className="password-container"> 
                <textarea
                    id = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
            </div>

            <p>Forgot password?</p>

            <div className="loginbutton"> 
                <button type="submit" className="loginbutton" onClick = {handleLogin}>
                    Login
                </button>
            </div>

            <p>New user? Create an account</p>



        </div>
    );
}

export default Login;
