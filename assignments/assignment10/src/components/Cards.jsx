import { Package, TrendingUp, Star, Tag, Laptop, Gem, Shirt } from "lucide-react";
import { formatCategory } from "../utils/format";

const iconMap = {
  box: Package,
  trend: TrendingUp,
  star: Star,
  tag: Tag,
  laptop: Laptop,
};

const iconTone = {
  box: "bg-lime-900/40 text-brand",
  trend: "bg-blue-900/40 text-blue-400",
  star: "bg-amber-900/40 text-amber-400",
  tag: "bg-purple-900/40 text-purple-400",
};

export function DashboardStatCard({ icon, value, label, sub }) {
  const Icon = iconMap[icon] ?? Package;
  return (
    <div className="rounded-2xl border border-ink-700 p-6">
      <span
        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${
          iconTone[icon] ?? iconTone.box
        }`}
      >
        <Icon size={20} />
      </span>
      <p className="font-display text-3xl font-bold">{value}</p>
      <p className="mt-1 text-[15px] font-medium">{label}</p>
      <p className="text-sm text-white/40">{sub}</p>
    </div>
  );
}

const categoryIcon = (category = "") => {
  if (category.includes("electronics")) return Laptop;
  if (category.includes("jewel")) return Gem;
  if (category.includes("clothing")) return Shirt;
  return Package;
};

export function CategoryCard({ category, count, onClick }) {
  const Icon = categoryIcon(category);
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-col items-center gap-3 rounded-2xl bg-white px-6 py-8 text-ink-950 transition-transform hover:-translate-y-1"
    >
      <Icon size={30} strokeWidth={1.5} />
      <span className="font-display text-base font-semibold capitalize">
        {formatCategory(category)}
      </span>
      <span className="text-sm text-ink-950/40">{count} items</span>
    </button>
  );
}
