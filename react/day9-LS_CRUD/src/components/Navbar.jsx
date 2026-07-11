import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 bg-black text-white rounded flex items-center justify-between">
      <div>
        <img
          className="rounded-full"
          width={40}
          src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
      </div>
      <div className="flex gap-6 font-semibold ">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 bg-blue-700 text-white cursor-pointer rounded"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
