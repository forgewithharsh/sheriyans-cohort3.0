import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create User</h1>
      <form className="w-90 flex flex-col bg-blue-200 gap-3 p-4 rounded border-2 border-black">
        <input
          className="p-2 outline-0 rounded border border-black"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 outline-0 rounded border border-black"
          type="number"
          placeholder="Mobile"
        />
        <input
          className="p-2 outline-0 rounded border border-black"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 outline-0 rounded border border-black"
          type="url"
          placeholder="Image"
        />

        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">Add User</button>
      </form>
    </div>
  );
};

export default Form;
