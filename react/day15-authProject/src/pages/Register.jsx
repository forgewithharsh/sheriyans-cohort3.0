import React from "react";
import { useNavigate } from "react-router";

const Register = () => {
  let navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center text-2xl font-bold">Register</h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
          />

          <button className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already registered?
          <button
            onClick={() => navigate("")}
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
