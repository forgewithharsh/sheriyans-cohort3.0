import { Zap, Shield, Tag } from "lucide-react";

const perks = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Same-day on select items",
    color: "text-brand",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    desc: "100% encrypted checkout",
    color: "text-blue-400",
  },
  {
    icon: Tag,
    title: "Best Prices",
    desc: "Price-match guarantee",
    color: "text-emerald-400",
  },
];

export function Perks() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
      <div className="grid gap-5 sm:grid-cols-3">
        {perks.map((p) => (
          <div
            key={p.title}
            className="flex items-center gap-4 rounded-2xl border border-ink-700 px-6 py-5"
          >
            <p.icon size={22} className={p.color} strokeWidth={2} />
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-white/45">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/60 py-10 text-center">
      <p className="font-display text-xl font-semibold text-brand">SkyMart</p>
      <p className="mt-2 text-sm text-white/40">
        © 2025 SkyMart • Built with React + Redux + TanStack Query
      </p>
    </footer>
  );
}
