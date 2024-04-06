import React, { useState } from 'react';
import '../styles/accountCreation.css'
import { useNavigate } from 'react-router-dom';

function AccountCreation() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/onboarding');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password', password);
        console.log('Password Confirm', passwordConfirm);
        // create actual account
    }

    return (
        <div className="account-container">
            <h2>Create An Account</h2>
            <textarea className = "textinput"
                id = "username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
                placeholder="Username"
            />

            <textarea className = "textinput"
                id = "email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <textarea className = "textinput"
                id = "password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            <textarea className = "textinput"
                id = "passwordconfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Re-enter password"
            />

            <button type="button" className="login-button" onClick={handleSubmit}>
                Create account
            </button>



        </div>
    );
}

export default AccountCreation;