import React from "react";

const Navbar = ({ setCartOpen }) => {
  return (
    <div className="bg-black text-white rounded p-5 flex items-center justify-between">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <p
          onClick={() => {
            setCartOpen(false);
          }}
          className="cursor-pointer"
        >
          Home
        </p>
        <p
          onClick={() => {
            setCartOpen(true);
          }}
          className="cursor-pointer"
        >
          Cart
        </p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
