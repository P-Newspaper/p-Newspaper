import React from "react";
import { Route, Routes } from "react-router-dom";
import NonUserLanding from "./components/NonUserLanding";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import NonUserResults from "./components/NonUserResults";
import Onboarding from "./components/Onboarding";
import AccountCreation from "./components/AccountCreation";
import UserLanding from "./components/UserLanding";
import InterestSelection from "./components/InterestSelection";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NonUserLanding />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/submit" element={<NonUserResults />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/createaccount" element={<AccountCreation />} />
      <Route path="/userlanding" element={<UserLanding />} />
      <Route path="/interestselection" element={<InterestSelection />} />
    </Routes>
  );
}

export default AppRoutes;
