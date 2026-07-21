import React from "react";

const Usercard = () => {
  return (
    <div className="p-4 border border-black bg-amber-100 rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img
          className="object-cover h-full w-full rounded-xl"
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/608683/01/mod01/fnd/IND/fmt/png/PUMA-x-RCB-2026-Unisex-Striper-Polo"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1></h1>
        <p className="text-sm">pumastore@gmail.com</p>
        <p className="text-sm">{9712827383}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button className="bg-amber-500 text-white py-2 px-3 rounded">
          Update
        </button>
        <button className="bg-red-500 text-white py-2 px-3 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
