import React, { useState, useContext } from "react";
import { User, AtSign, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("listener");

  const { registeredUsers, setRegisteredUsers } = useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    const userExists = registeredUsers.find((user) => {
      return user.email === data.email || user.username === data.username;
    });

    if (userExists) {
      alert("Email or Username already exists");
      return;
    }

    let newUser = {
      ...data,
      role,
    };

    let arr = [...registeredUsers, newUser];

    setRegisteredUsers(arr);
    localStorage.setItem("RegisteredUser", JSON.stringify(arr));

    alert("🎉 Registered successfully!");

    navigate("/");

    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f11] px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#262626] bg-[#171717] p-8 shadow-2xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Music Verse</h1>

          <p className="mt-2 text-sm text-gray-400">
            Join the sound revolution
          </p>
        </div>

        {/* Role Buttons */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("listener")}
            className={`rounded-xl border p-4 transition ${
              role === "listener"
                ? "border-[#f97316] bg-[#f97316]/10 text-[#f97316]"
                : "border-[#333] text-gray-400 hover:border-[#555]"
            }`}
          >
            Listener
          </button>

          <button
            type="button"
            onClick={() => setRole("artist")}
            className={`rounded-xl border p-4 transition ${
              role === "artist"
                ? "border-[#f97316] bg-[#f97316]/10 text-[#f97316]"
                : "border-[#333] text-gray-400 hover:border-[#555]"
            }`}
          >
            Artist
          </button>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Full Name"
              className="w-full rounded-xl border border-[#333] bg-[#111] py-3 pl-11 pr-4 text-white outline-none focus:border-[#f97316]"
            />
          </div>

          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          {/* Username */}
          <div className="relative">
            <AtSign
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              {...register("username", {
                required: "Username is required",
              })}
              placeholder="Username"
              className="w-full rounded-xl border border-[#333] bg-[#111] py-3 pl-11 pr-4 text-white outline-none focus:border-[#f97316]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email Address"
              className="w-full rounded-xl border border-[#333] bg-[#111] py-3 pl-11 pr-4 text-white outline-none focus:border-[#f97316]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              placeholder="Password"
              className="w-full rounded-xl border border-[#333] bg-[#111] py-3 pl-11 pr-4 text-white outline-none focus:border-[#f97316]"
            />
          </div>

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-[#f97316] py-3 font-semibold text-white transition hover:bg-[#ea580c]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?
          <NavLink
            to={"/"}
            className="ml-2 cursor-pointer font-medium text-[#f97316]"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
