import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  console.log("RHF Rendering!");

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-80 h-screen">
      <h1>REACT HOOK FORM</h1>
      <form className="flex p-6 rounded bg-white flex-col gap-4">
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Category"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">CREATE</button>
      </form>
    </div>
  );
};

export default RHF;
