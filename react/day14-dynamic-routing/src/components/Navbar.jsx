import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white p-5 flex item-center justify-between mb-4">
        <h1>Logo</h1>
        <div className="flex item-center justify-between gap-10">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
        </div>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
