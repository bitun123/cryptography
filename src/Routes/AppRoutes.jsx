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

import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/layout/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/signup" replace />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/mainDashboard" element={<DashboardLayout />}>
          <Route index element={<About />} /> {/* default page */}
          <Route path="about" element={<About />} />
          <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="exchanges" element={<Exchanges />} />
          <Route path="news" element={<News />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
