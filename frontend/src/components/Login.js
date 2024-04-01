import React from 'react';
import '../styles/login.css'


function Login() {
    
    return (
        <div className="container">
            <div className="Sign-In"> Sign in <br></br></div>
            <div className="username-container"> 
                <textarea
                    id = "username"
                    placeholder="username"
                />
            </div>

            <div className="email-container"> 
                <textarea
                    id = "email"
                    placeholder="email"
                    style={{
                        color: "black",
                        backgroundColor: "#e6e6e6",
                        padding: 10,
                        borderRadius: 10,
                        justifyContent: "center",
                        borderColor: "#e6e6e6",
                        width: 300,
                        height: 20,
                      }}
                />
            </div>

            <div className="password-container"> 
                <textarea
                    id = "password"
                    placeholder="password"
                    style={{
                        color: "black",
                        backgroundColor: "#e6e6e6",
                        padding: 10,
                        borderRadius: 10,
                        justifyContent: "center",
                        borderColor: "#e6e6e6",
                        width: 300,
                        height: 20,
                      }}
                />
            </div>

            <div className="passwordconfirm-container"> 
                <textarea
                    id = "passwordconfirm"
                    placeholder="Confirm Password"
                    style={{
                        color: "black",
                        backgroundColor: "#e6e6e6",
                        padding: 10,
                        borderRadius: 10,
                        justifyContent: "center",
                        borderColor: "#e6e6e6",
                        width: 300,
                        height: 20,
                      }}
                />
            </div>

            <div className="button-container"> 
                <button type="submit" className="submit-button">
                    Create an account
                </button>
            </div>



        </div>
    );
}

export default Login;
