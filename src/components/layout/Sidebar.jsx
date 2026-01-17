import React from "react";
import cryptoLogo from "../../assets/images/cryptoLogo.png";
import { Home, TrendingUp, Repeat, Lightbulb } from "lucide-react";
import { NavLink } from "react-router-dom";


const menuItems = [
  { key: "home", icon: Home, label: "Home", path: "/About" },
  {
    key: "cryptocurrencies",
    icon: TrendingUp,
    label: "Cryptocurrencies",
    path: "/Cryptocurrencies",
  },
  { key: "exchanges", icon: Repeat, label: "Exchanges", path: "/Exchanges" },
  { key: "news", icon: Lightbulb, label: "News", path: "/News" },
];

function Sidebar() {
  return (
    <aside
      className="min-h-screen bg-[#45826] border-r-2 border-gray-700"
      style={{ width: true ? "230px" : "80px" }}
    >
      {/* logo */}
      <div className="p-3 border-b-2  border-gray-700 flex  items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-900 rounded-full flex items-center justify-center">
          <img src={cryptoLogo} alt="" className="object-cover w-full h-full" />
        </div>
        {true && (
          <h2 className="text-xl font-semibold text-white">Cryptoverse</h2>
        )}
      </div>
      <div className="p-2 mt-2 bg-red">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 px-4 py-3 mb-1 rounded transition
                 ${
                   isActive
                     ? "bg-blue-600 text-white"
                     : "text-gray-300 hover:bg-gray-700"
                 }`
              }
            >
              <Icon className="text-white" size={20} />
              {true && (
                <span className="text-white cursor-pointer">{item.label}</span>
              )}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
