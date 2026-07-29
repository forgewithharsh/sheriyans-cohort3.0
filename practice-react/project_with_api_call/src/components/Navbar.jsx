import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black text-white rounded p-5 flex items-center justify-between">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <p className=" cursor-pointer">Home</p>
        <p className=" cursor-pointer">Cart</p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
