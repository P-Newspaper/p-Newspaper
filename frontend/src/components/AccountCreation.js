import React, { useState } from 'react';
import '../styles/accountCreation.css'


function AccountCreation() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // create actual account
    }

    return (
        <div className="container">
            <h2>Sign in</h2>
            <div className="username-container"> 
                <textarea
                    id = "username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
            </div>

            <div className="email-container"> 
                <textarea
                    id = "email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
            </div>

            <div className="password-container"> 
                <textarea
                    id = "password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
            </div>

            <div className="passwordconfirm-container"> 
                <textarea
                    id = "passwordconfirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="retype password"
                />
            </div>

            <div className="createbutton"> 
                <button type="submit" className="createbutton">
                    Create an account
                </button>
            </div>



        </div>
    );
}

export default AccountCreation;