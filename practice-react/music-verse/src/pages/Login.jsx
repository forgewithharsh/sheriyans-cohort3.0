import React, { useContext } from "react";
import { Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { registeredUsers, setCurrentUser } = useContext(Auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    const user = registeredUsers.find(
      (u) =>
        u.email === data.email && u.password === data.password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    setCurrentUser(user);
    localStorage.setItem("CurrentUser", JSON.stringify(user));

    alert("🎉 Login Successful!");
    navigate("/main");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f11] px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#262626] bg-[#171717] p-8 shadow-2xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Music Verse
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Welcome back to your music world
          </p>
        </div>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-xl border border-[#333] bg-[#111] py-3 pl-11 pr-4 text-white outline-none focus:border-[#f97316]"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full rounded-xl border border-[#333] bg-[#111] py-3 pl-11 pr-4 text-white outline-none focus:border-[#f97316]"
              />
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#f97316] py-3 font-semibold text-white transition hover:bg-[#ea580c]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?
          <NavLink
            to="/register"
            className="ml-2 font-medium text-[#f97316] hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
