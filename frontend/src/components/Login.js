import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";

function Login() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log('Login Successful:', codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setProfile(res.data);
          if (!localStorage.getItem("hasLoggedIn")) {
            navigate("/onboarding");
            localStorage.setItem("hasLoggedIn", true);
          }
        })
        .catch((err) => console.log("Error fetching user data:", err));
    }
  }, [user, navigate]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
    localStorage.removeItem("hasLoggedIn");
  };

  return (
    <div className="login-container">
      {profile ? (
        <UserProfile profile={profile} onLogout={logOut} />
      ) : (
        <LoginButton onLogin={login} />
      )}
    </div>
  );
}

export default Login;

