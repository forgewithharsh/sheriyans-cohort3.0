import { useEffect, useState } from "react";
import axios from "axios";
import { Search, ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { LoadingState, ErrorState } from "../components/StatusStates";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

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

  let filtered = products;

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search.trim()) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">
        All Products
      </h1>
      <p className="mt-2 text-white/40">
        {loading ? "Loading products…" : `${filtered.length} products found`}
      </p>

      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-ink-700 p-3 sm:flex-row sm:items-center">
        <label className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3">
          <Search size={18} className="text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/30"
          />
        </label>

        <div className="relative sm:min-w-[190px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-xl border border-ink-600 bg-transparent px-4 py-3 pr-10 text-sm outline-none"
          >
            <option value="all" className="bg-ink-900">
              All Categories
            </option>
            {categories.map((c) => (
              <option key={c} value={c} className="bg-ink-900 capitalize">
                {c}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
          />
        </div>
      </div>

      {error && (
        <div className="mt-10">
          <ErrorState message={`Couldn't load products: ${error}`} />
        </div>
      )}
      {loading && (
        <LoadingState label="Fetching products from Fake Store API..." />
      )}

      {!loading && !error && (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
