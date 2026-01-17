import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignIn,
  SignUp,
  Home,
  MainDashboard,
  DashboardLayout,
  About,
  Cryptocurrencies,
  Exchanges,
  News,
} from "../AllComponents";




function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/signup" replace />} />
      <Route path="/mainDashboard" element={<MainDashboard />} />
      <Route element={<DashboardLayout />}>
        <Route path="/About" element={<About />} />
        <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/Exchanges" element={<Exchanges />} />
        <Route path="/News" element={<News />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
