import { Zap, User, Mail, Lock, ArrowRight } from "lucide-react";
import useAuthHook from "../hooks/authHooks";

export default function Register() {
  const { navigate, register, handleSubmit, errors, registerFormSubmit } =
    useAuthHook();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
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
          Create Account
        </h2>

        <p className="mt-2 text-center text-zinc-500">
          Join BrewCart and start shopping.
        </p>

        <form
          onSubmit={handleSubmit(registerFormSubmit)}
          className="mt-8 space-y-5"
        >
          <div>
            <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-950 px-4 transition-colors focus-within:border-amber-400">
              <User size={18} className="text-zinc-500" />

              <input
                {...register("name")}
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent px-3 py-3 text-white placeholder:text-zinc-500 outline-none"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

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
            Register
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="font-semibold text-amber-400 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
