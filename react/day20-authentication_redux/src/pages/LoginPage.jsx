import { Zap, Mail, Lock, ArrowRight } from "lucide-react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { navigate, register, handleSubmit, errors, loginFormSubmit } =
    useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="mb-8 flex cursor-pointer items-center justify-center gap-2"
        >
          <div className="rounded-xl bg-amber-400 p-2">
            <Zap className="text-black" fill="currentColor" strokeWidth={0} />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Brew<span className="text-amber-400">Cart</span>
          </h1>
        </div>

        <h2 className="text-center text-3xl font-bold text-white">
          Welcome Back
        </h2>

        <p className="mt-2 text-center text-zinc-500">
          Login to continue shopping.
        </p>

        <form
          onSubmit={handleSubmit(loginFormSubmit)}
          className="mt-8 space-y-5"
        >
          <div>
            <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-950 px-4 focus-within:border-amber-400 transition-colors">
              <Mail size={18} className="text-zinc-500" />

              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-3 text-white placeholder:text-zinc-500 outline-none"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-950 px-4 focus-within:border-amber-400 transition-colors">
              <Lock size={18} className="text-zinc-500" />

              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-3 text-white placeholder:text-zinc-500 outline-none"
              />
            </div>

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 font-semibold text-black transition hover:bg-amber-300">
            Login
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-semibold text-amber-400 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
