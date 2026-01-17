import React, { useContext, useState } from "react";
import { Search, Bell, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../../Context/AuthContext";



function TopNavbar() {
  const [showMenuProfile, setShowMenuProfile] = useState(false);
  const navigate = useNavigate();
  const { Logout } = useContext(authDataContext);

function logoutpage() {
  Logout();
  navigate("/signup");   
}


  return (
    <header
      className="fixed right-0 left-0 z-20 border-b border-gray-700 h-[4.1rem] flex items-center"
      style={{ paddingLeft:true? "240px":"80px" }}
    >
      <div className="flex justify-between items-center w-full px-4 relative">
        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-2 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="px-8 py-2 bg-[#1F2937] w-[30rem] rounded text-gray-200 outline-none"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell size={26} className="text-white" />
            <span className="absolute -top-2 -right-2 text-red-500 text-xs">0</span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowMenuProfile((prev) => !prev)}
              className="flex items-center gap-2 ml-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">sa</span>
              </div>
            </button>

            {showMenuProfile && (
              <div className="absolute right-0 top-14 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                <div className="flex gap-3 p-3 border-b border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white">sa</span>
                  </div>
                  <div>
                    <p className="text-white text-sm">satyajit das mahapatra</p>
                    <p className="text-gray-400 text-xs">satyajit@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigate("/mainDashboard/profile");
                    setShowMenuProfile(false);
                  }}
                  className="w-full flex gap-3 items-center  px-4 py-3 hover:bg-gray-700 text-gray-300"
                >
                  <User size={16} /> Profile
                </button>

                <button className="w-full flex gap-3 items-center  px-4 py-3 hover:bg-gray-700 text-gray-300">
                  <Settings size={16} /> Settings
                </button>

                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 text-red-400 active:scale-95"
              onClick={logoutpage}
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;

