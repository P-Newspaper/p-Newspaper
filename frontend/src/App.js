import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import UserProvider from "./components/UserProvider";
// import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
