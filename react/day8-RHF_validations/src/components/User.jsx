import React from "react";

const User = () => {
  return (
    <div className="p-4 border border-black bg-amber-100 rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img
          className="object-fit h-full w-full rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNqUf5Nzli8aVkfty9BfDiLTiWH5me_s094BOB68r1Q&s=10"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>Name</h1>
        <p className="text-sm">Email</p>
        <p className="text-sm">Contact</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button className="bg-amber-500 text-white py-2 px-3 rounded">Update</button>
        <button className="bg-red-500 text-white py-2 px-3 rounded">Delete</button>
      </div>
    </div>
  );
};

export default User;
