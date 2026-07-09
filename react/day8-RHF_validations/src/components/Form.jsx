import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  console.log(errors)

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
          {...register("name", { required: "Name is required" })}
          className="p-2 outline-0 rounded border border-black"
          type="email"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">name do</p>}
        <input
          {...register("email", { required: "Email is required" })}
          className="p-2 outline-0 rounded border border-black"
          type="number"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">email do</p>}
        <input
          {...register("mobile", { required: "Mobile is required" })}
          className="p-2 outline-0 rounded border border-black"
          type="text"
          placeholder="Mobile"
        />
        {errors.mobile && <p className="text-red-500">mobile do</p>}
        <input
          {...register("image", { required: "Image is required" })}
          className="p-2 outline-0 rounded border border-black"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">image do</p>}

        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
