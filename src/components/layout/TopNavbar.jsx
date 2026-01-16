import React from "react";
import { Menu, Search, Bell, User, Settings, LogOut } from "lucide-react";

function TopNavbar() {
  return (
    <header
      className="fixed  right-0 left-0 z-20 bg-[#45826] border-b-2 border-gray-700 h-[4.1rem] flex items-center w-ful  "
      style={{ paddingLeft: true ? "240px" : "90px" }}
    >
      <div className="flex justify-between items-center relative  w-full">
        <div>
          <Search
           
            size={20}
            className="absolute left-2 top-3 transform font-semibold"
          />
          <input
            type="text"
            placeholder="search Anything.........."
            className="px-8 py-2 border-none outline-none bg-gray-400 w-[30rem] rounded text-gray-200 text-xl"
          />
        </div>

        <div className="flex items-center mr-4 gap-4 ">
          <button className="relative cursor-pointer">
            <Bell size={30} className="text-white" />
            <span className="absolute -top-3 left-7 font-bold text-red-700 text-xl">
              0
            </span>
          </button>
          <div>
            {/* onClick={()=>setShowMenuProfile(!showMenuProfile)} */}
            <button className="flex items-center gap-2 ml-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full  flex items-center justify-center cursor-pointer">
                <span className="text-white text-center text-xl">sa</span>
              </div>
              {false && (
                <div className="absolute right-9 top-14 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                  <div className="w-full flex justify-between p-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full  flex items-center justify-center cursor-pointer">
                      <span className="text-white text-center text-xl">sa</span>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm">
                        satyajit das mahapatra
                      </p>
                      <p className="text-gray-400 text-sm">
                        satyajit@gmail.com
                      </p>
                    </div>
                  </div>
                  <button className="w-full flex gap-3 px-4 py-3 hover:bg-gray-700 text-gray-300">
                    <User size={16} /> Profile
                  </button>
                  <button className="w-full flex gap-3 px-4 py-3 hover:bg-gray-700 text-gray-300">
                    <Settings size={16} /> Settings
                  </button>
                  <button className="w-full flex gap-3 px-4 py-3 hover:bg-gray-700 text-red-400">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;
