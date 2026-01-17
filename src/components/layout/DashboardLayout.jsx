import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { About } from "../../AllComponents";

export default function DashboardLayout() {
  return (
    <div className="h-screen flex bg-gray-900 overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar (fixed height) */}
        <div className="h-16 shrink-0">
          <TopNavbar />
        </div>

        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto p-1 ">
          <Outlet />
          {/* <About/> */}
        </main>

      </div>
    </div>
  );
}

