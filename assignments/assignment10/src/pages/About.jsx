import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";
import { aboutStats, values, team } from "../data/site";
import { NavLink } from "react-router";

const statIcons = [Package, Users, Star, Truck];
const valueIcons = { shield: Shield, truck: Truck, heart: Heart, star: Star };

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-10">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-ink-950">
        <Zap size={30} fill="currentColor" strokeWidth={0} />
      </span>

      <h1 className="mt-8 font-display text-5xl font-bold sm:text-6xl">
        About <span className="text-brand">SkyMart</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
        SkyMart is a next-generation e-commerce platform built to make online
        shopping fast, fair, and enjoyable — for everyone.
      </p>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
        {aboutStats.map((s, i) => {
          const Icon = statIcons[i];
          return (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-700 px-5 py-8"
            >
              <Icon size={22} className="mx-auto mb-3 text-brand" />
              <p className="font-display text-3xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-white/40">{s.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 rounded-3xl border border-ink-700 p-8 text-left sm:p-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Our Story
        </h2>
        <div className="mt-6 space-y-5 text-white/50">
          <p>
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves:
            what if shopping online was actually{" "}
            <em className="text-white/70">enjoyable</em>?
          </p>
          <p>
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don&apos;t require a second
            mortgage.
          </p>
          <p>
            We&apos;re still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you make
            here.
          </p>
        </div>
      </div>

      <h2 className="mt-20 font-display text-3xl font-bold">
        What We Stand For
      </h2>
      <div className="mt-8 grid gap-5 text-left sm:grid-cols-2">
        {values.map((v) => {
          const Icon = valueIcons[v.icon];
          return (
            <div
              key={v.title}
              className="rounded-2xl border border-ink-700 p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-950/40 text-brand">
                <Icon size={20} />
              </span>
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-1 text-white/50">{v.desc}</p>
            </div>
          );
        })}
      </div>

      <h2 className="mt-20 font-display text-3xl font-bold">Meet the Team</h2>
      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {team.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-ink-700 px-4 py-8"
          >
            <span
              className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl font-display text-xl font-bold ${t.color}`}
            >
              {t.initial}
            </span>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-white/40">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-ink-700 px-8 py-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Ready to shop?
        </h2>
        <p className="mt-3 text-white/50">
          Explore thousands of products at unbeatable prices.
        </p>
        <NavLink
          to="/main/shop"
          className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-ink-950 transition-colors hover:bg-brand-dim"
        >
          Browse Products <ArrowRight size={16} strokeWidth={2.5} />
        </NavLink>
      </div>
    </div>
  );
}
