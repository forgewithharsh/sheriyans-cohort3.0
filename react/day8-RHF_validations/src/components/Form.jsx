import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  let formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col bg-blue-200 gap-3 p-4 rounded border-2 border-black"
      >
        <input
          {...register("name")}
          className="p-2 outline-0 rounded border border-black"
          type="email"
          placeholder="Email"
        />
        <input
          {...register("email")}
          className="p-2 outline-0 rounded border border-black"
          type="number"
          placeholder="Mobile"
        />
        <input
          {...register("mobile")}
          className="p-2 outline-0 rounded border border-black"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("image")}
          className="p-2 outline-0 rounded border border-black"
          type="url"
          placeholder="Image"
        />

        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
