import React, { useContext } from "react";
import "../styles/myAccount.css";
import { UserContext } from "./UserProvider";

function MyAccount({ onLogout }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Loading...</p>
  }
  return (
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
        <button className="logout-button" onClick={onLogout}>Log out</button>
    </div>
  );
}

export default MyAccount;
