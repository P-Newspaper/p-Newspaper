import React, { useContext } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import LoginButton from "./LoginButton";
import MyAccount from "./MyAccount";
import { UserContext } from "./UserProvider";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const profileData = await fetchUserProfile(codeResponse.access_token);
      setUser({ ...codeResponse, ...profileData });
      navigate("/onboarding");
      localStorage.setItem("hasLoggedIn", true);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  async function fetchUserProfile(token) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (err) {
      console.log("Error fetching user data:", err);
      throw err;
    }
  }

  return (
    <div className="login-container">
      {user ? <MyAccount /> : <LoginButton onLogin={login} />}
    </div>
  );
}

export default Login;
