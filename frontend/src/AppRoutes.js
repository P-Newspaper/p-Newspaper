import React from "react";
import { Route, Routes } from "react-router-dom";
import NonUserLanding from "./components/NonUserLanding";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import NonUserResults from "./components/NonUserResults";
import Onboarding from "./components/Onboarding";
import UserLanding from "./components/UserLanding";
import UserResults from "./components/UserResults";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NonUserLanding />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/nonuserresults" element={<NonUserResults />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/userlanding" element={<UserLanding />} />
      <Route path="/userresults" element={<UserResults />} />
    </Routes>
  );
}

export default AppRoutes;
