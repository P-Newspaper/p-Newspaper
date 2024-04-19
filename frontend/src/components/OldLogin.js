import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // setError(null);
    // if (!username || !password) {
    //     setError('Username and password are required');
    //     return;
    // }

    console.log("Username:", username);
    console.log("Password", password);
    // send the username and password to the server
    navigate("/userlanding");
  };

  return (
    <div className="login-container">
      <div className="title">Login</div>
      {/* {error && <div className="error">{error}</div>} */}
      <textarea
        className="textinput"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <textarea
        className="textinput"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button type="button" className="login-button" onClick={handleLogin}>
        Login
      </button>

      <div className="create-account">
        Don't have an account?{" "}
        <Link className="create-account-link" to="/createaccount">
          Create account
        </Link>
      </div>
    </div>
  );
}

export default Login;
