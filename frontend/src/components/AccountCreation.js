import React, { useState } from "react";
import "../styles/accountCreation.css";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect } from "react";

function AccountCreation() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordConfirm, setPasswordConfirm] = useState("");

  //   const navigate = useNavigate();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     navigate("/onboarding");
  //     console.log("Username:", username);
  //     console.log("Email:", email);
  //     console.log("Password", password);
  //     console.log("Password Confirm", passwordConfirm);
  //     // create actual account
  //   };

  return (
    <div className="container">
      <h2>Sign in</h2>
      <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        {profile ? (
          <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={login}>Sign in with Google</button>
        )}
      </div>

      {/* <textarea className = "textinput"
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
            /> */}
      {/* <button type="button" className="login-button">
        Create account
      </button> */}
    </div>
  );
}

export default AccountCreation;
