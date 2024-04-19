import React from "react";
import "../styles/userProfile.css";

function UserProfile({ profile, onLogout }) {
  return (
    <div className="profile-container">
        <div className="title">
            User Details
        </div>
        <img className="img" src={profile.picture} alt="user profile" />
        <div className="user-details"> 
            Name: {profile.name}
            <br/>
            Email Address: {profile.email}
        </div>
        <button className="logout-button" onClick={onLogout}>Log out</button>
    </div>
  );
}

export default UserProfile;
