import React, { useState, createContext, useCallback } from "react";
import { googleLogout } from "@react-oauth/google";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const logout = useCallback(() => {
        googleLogout();
        setUser(null);
        localStorage.removeItem("hasLoggedIn");
    }, []);
    
    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
        {children}
        </UserContext.Provider>
    );
}

export default UserProvider;