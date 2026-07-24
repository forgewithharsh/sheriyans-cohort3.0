import { Zap, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useAuthHook } from "../hooks/useAuthHook";

export default function Login() {

  const { register, handleSubmit, errors, loginFormSubmit } =
    useAuthHook();

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col justify-between overflow-hidden border-b border-ink-700 px-8 py-10 sm:px-14 sm:py-14 lg:border-b-0 lg:border-r">
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
          aria-hidden
        />
        <NavLink to="/login" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-ink-950">
            <Zap size={18} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Sky<span className="text-brand">Mart</span>
          </span>
        </NavLink>

        <div className="relative">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Welcome back
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
            Shop the future.
            <br />
            <span className="text-brand">Today.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/50">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["20K+", "Products"],
              ["50K+", "Users"],
              ["4.9★", "Rating"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-ink-600 px-4 py-5 text-center"
              >
                <p className="font-display text-xl font-bold text-brand">
                  {value}
                </p>
                <p className="mt-1 text-xs text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div />
      </div>

      {/* Right */}
      <div className="flex items-center justify-center px-6 py-14 sm:px-14">
        <div className="w-full max-w-md rounded-3xl border border-ink-700 bg-ink-900/60 p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold">Login</h2>
          <p className="mt-1 text-sm text-white/40">
            Enter your credentials to continue
          </p>

          <form
            onSubmit={handleSubmit(loginFormSubmit)}
            className="mt-8 flex flex-col gap-4"
          >
            <label className="flex items-center gap-3 rounded-xl border border-ink-600 bg-ink-950 px-4 py-3.5">
              <Mail size={17} className="text-white/40" />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/30"
              />
              {errors.email && (
                <p className="text-red-500 text-[11px]">
                  {errors.email.message}
                </p>
              )}
            </label>

            <label className="flex items-center gap-3 rounded-xl border border-ink-600 bg-ink-950 px-4 py-3.5">
              <Lock size={17} className="text-white/40" />
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
                placeholder="Password"
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/30"
              />
              {errors.password && (
                <p className="text-red-500 text-[11px]">
                  {errors.password.message}
                </p>
              )}
            </label>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-semibold text-ink-950 transition-colors hover:bg-brand-dim"
            >
              Sign in <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/40">
            Don&apos;t have an account?{" "}
            <NavLink
              to="/register"
              className="font-semibold text-brand hover:underline"
            >
              Create one
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
