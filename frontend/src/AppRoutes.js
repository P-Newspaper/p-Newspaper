import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Results from "./components/Results";
import Onboarding from "./components/Onboarding";
import MyAccount from "./components/MyAccount";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/results" element={<Results />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/results" element={<Results />} />
      <Route path="/myaccount" element={<MyAccount />} />
    </Routes>
  );
}

export default AppRoutes;
