import React from "react";
import { ShoppingCart, LogOut, User } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
            S
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            SkyMart
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            href="/main"
            className="text-sm font-medium text-gray-900 transition hover:text-blue-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className="text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className="text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            About
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button className="relative rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
            <ShoppingCart size={21} />
          </button>

          {/* User */}
          <div className="hidden items-center gap-2 border-l border-gray-200 pl-4 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              <User size={18} className="text-gray-600" />
            </div>

            <div className="leading-tight">
              <p className="text-xs text-gray-500">Hi,</p>
              <p className="text-sm font-semibold text-gray-900">Dev</p>
            </div>
          </div>

          {/* Logout */}
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
            <LogOut size={17} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
