import { Box, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center gap-5 justify-between py-4 px-10">
      <h1>Logo</h1>

      <div className="flex items-center gap-10 text-xl">
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/product"}>Shop</NavLink>
        <NavLink to={"/main/about"}>About</NavLink>
      </div>

      <div className="flex items-center gap-6">
        <ShoppingCart />
        <Box />
        <button className="px-5 py-1 rounded cursor-pointer text-white bg-red-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
