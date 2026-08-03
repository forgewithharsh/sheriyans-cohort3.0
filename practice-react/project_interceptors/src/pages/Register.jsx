import React from "react";
import { Auth } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { navigate, register, handleSubmit, errors, registerFormSubmit } =
    useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center text-2xl font-bold">Register</h1>

        <form onSubmit={handleSubmit(registerFormSubmit)} className="space-y-5">
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^\S.*$/,
                message: "Enter a name without leading spaces",
              },
            })}
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters.",
              },
            })}
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already registered?
          <button
            onClick={() => navigate("/")}
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
