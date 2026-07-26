// pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { ArrowRight, Star, Zap } from "lucide-react";
import { useAuthHook } from "../hooks/useAuthHook";
import { DashboardStatCard, CategoryCard } from "../components/Cards";
import { Perks } from "../components/Footer";
import { LoadingState, ErrorState } from "../components/StatusStates";

export default function Home() {
  const { user } = useAuthHook();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message));
  }, []);

  const topRated = products.slice(0, 5);
  const newArrivals = products.slice(-5);

  const dashboardStats = [
    { label: "Cart Items", sub: "In your bag", value: "0", icon: "box" },
    { label: "Cart Value", sub: "Ready to checkout", value: "$0.00", icon: "trend" },
    { label: "Top Products", sub: "Highly rated", value: String(topRated.length), icon: "star" },
    { label: "Categories", sub: "To explore", value: String(categories.length), icon: "tag" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-900/40 px-8 py-14 sm:px-14 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Good morning <span>👋</span>
              </p>
              <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
                Welcome back,
                <br />
                <span className="text-brand">{user?.name || "Guest"}!</span>
              </h1>
              <p className="mt-6 text-lg text-white/50">
                Discover today&apos;s picks — hand-curated products across
                electronics, fashion, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/main/shop"
                  className="flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-ink-950 transition-colors hover:bg-brand-dim"
                >
                  Shop Now <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <Link
                  to="/main/shop"
                  className="flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3.5 font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  View All Products
                </Link>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
              <div className="rounded-2xl bg-lime-950/40 px-8 py-6 text-center">
                <p className="font-display text-4xl font-bold text-brand">
                  {loading ? "…" : `${products.length}+`}
                </p>
                <p className="mt-1 text-sm text-white/60">Products Available</p>
              </div>
              <div className="rounded-2xl border border-ink-600 px-8 py-6 text-center">
                <p className="font-display text-4xl font-bold">Free</p>
                <p className="mt-1 text-sm text-white/60">Delivery on ₹999+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {error && (
        <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-10">
          <ErrorState message={`Couldn't load products: ${error}`} />
        </section>
      )}

      {loading && (
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <LoadingState label="Fetching products from Fake Store API..." />
        </section>
      )}

      {!loading && !error && (
        <>
          <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-10">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {dashboardStats.map((s) => (
                <DashboardStatCard key={s.label} {...s} />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-4 pt-16 lg:px-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Shop by Category
              </h2>
              <Link
                to="/main/shop"
                className="flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category}
                  category={category}
                  count={products.filter((p) => p.category === category).length}
                />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl gap-6 px-6 py-16 lg:grid lg:grid-cols-2 lg:px-10">
            <ProductList
              title="Top Rated"
              icon={<Star size={18} className="text-amber-400" fill="currentColor" />}
              items={topRated}
            />
            <ProductList
              title="New Arrivals"
              icon={<Zap size={18} className="text-brand" fill="currentColor" />}
              items={newArrivals}
              className="mt-6 lg:mt-0"
            />
          </section>
        </>
      )}

      <Perks />
    </div>
  );
}

function ProductList({ title, icon, items, className = "" }) {
  return (
    <div className={`rounded-3xl bg-white p-6 text-ink-950 sm:p-8 ${className}`}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-display text-xl font-bold">
          {icon} {title}
        </h3>
        <Link to="/main/shop" className="text-sm font-semibold text-lime-600 hover:underline">
          See all →
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((p) => (
          <Link
            key={p.id}
            to={`/main/products/${p.id}`}
            className="group flex items-center gap-4 rounded-xl border border-ink-950/10 p-3 transition-colors hover:border-lime-400"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-14 w-14 rounded-lg bg-neutral-50 object-contain p-1"
            />
            <span className="flex-1 truncate font-medium">{p.title}</span>
            <span className="font-display font-bold text-lime-600">
              ${p.price.toFixed(2)}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-50 text-lime-700 transition-colors group-hover:bg-brand group-hover:text-ink-950">
              <ArrowRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
