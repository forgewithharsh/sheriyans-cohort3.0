import React from "react";
import { NavLink } from "react-router";
import { House, Users, ShoppingBag, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white p-6 shadow-lg">
      {/* Logo & Links */}
      <div>
        <h1 className="mb-10 text-3xl font-bold text-gray-800">E-Comm</h1>

        <div className="space-y-3">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <House size={20} />
            Home
          </NavLink>

          <NavLink
            to="/main/users"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Users size={20} />
            Users
          </NavLink>

          <NavLink
            to="/main/products"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <ShoppingBag size={20} />
            Products
          </NavLink>
        </div>
      </div>

      {/* Logout */}
      <button className="flex items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600">
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default Navbar;
