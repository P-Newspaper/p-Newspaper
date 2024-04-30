import React, { useContext } from "react";
import "../styles/myAccount.css";
import { UserContext } from "./UserProvider";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogOut = async (event) => {
    event.preventDefault();
    logout()
    navigate("/");
  };


  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <div className="container">
    <div className="profile-container">
        <div className="title">
            User Details
        </div>
        <img className="img" src={user.picture} alt="user profile" />
        <div className="user-details"> 
            Name: {user.name}
            <br/>
            Email Address: {user.email}
        </div>
        <button className="logout-button" onClick={handleLogOut}>Log out</button>
    </div>
    </div>
  );
}

export default MyAccount;
