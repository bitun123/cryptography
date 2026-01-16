import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Footer } from "./AllComponents";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <div>
<AppRoutes/>
    </div>
  );
}

export default App;
