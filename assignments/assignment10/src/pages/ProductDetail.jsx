import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import { useCartHook } from "../hooks/useCartHook";
import {
  ChevronLeft,
  Star,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { LoadingState, ErrorState } from "../components/StatusStates";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCartHook();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        return axios.get(
          `https://fakestoreapi.com/products/category/${res.data.category}`,
        );
      })
      .then((res) =>
        setRelated(res.data.filter((p) => p.id !== Number(id)).slice(0, 5)),
      )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <LoadingState label="Fetching product from Fake Store API..." />;
  if (error)
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <ErrorState message={`Couldn't load this product: ${error}`} />
      </div>
    );
  if (!product) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/40">
        <Link
          to="/main/shop"
          className="flex items-center gap-1 hover:text-white"
        >
          <ChevronLeft size={15} /> Products
        </Link>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-white p-10">
          <img
            src={product.image}
            alt={product.title}
            className="aspect-square w-full object-contain"
          />
        </div>

        <div>
          <span className="inline-block rounded-full border border-brand/40 bg-lime-950/40 px-4 py-1.5 text-sm font-medium capitalize text-brand">
            {product.category}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 border-b border-ink-700 pb-6">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={
                    i < Math.round(product.rating?.rate ?? 0)
                      ? "currentColor"
                      : "none"
                  }
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="font-medium">{product.rating?.rate}</span>
            <span className="text-white/40">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <p className="mt-6 font-display text-5xl font-bold text-brand">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-6 max-w-xl text-white/50">{product.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand py-4 font-semibold text-ink-950 transition-colors hover:bg-brand-dim"
            >
              <ShoppingCart size={18} strokeWidth={2.5} /> Add to Cart
            </button>
            <button
              aria-label="Add to wishlist"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink-600 text-white/60 transition-colors hover:border-red-400/60 hover:text-red-400"
            >
              <Heart size={19} />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              [Truck, "Free Delivery", "On orders $50+"],
              [ShieldCheck, "Secure Pay", "256-bit SSL"],
              [RotateCcw, "Easy Returns", "30-day policy"],
            ].map(([Icon, title, sub]) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-700 px-3 py-5 text-center"
              >
                <Icon size={20} className="mx-auto mb-2 text-brand" />
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-white/40">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-6 font-display text-2xl font-bold sm:text-3xl">
          Related Products
        </h2>
        {related.length === 0 ? (
          <p className="text-white/40">No related products found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/main/products/${p.id}`}
                className="flex flex-col overflow-hidden rounded-2xl bg-white p-4 text-ink-950 transition-transform hover:-translate-y-1"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-square w-full object-contain"
                />
                <h3 className="mt-3 line-clamp-2 text-sm font-semibold">
                  {p.title}
                </h3>
                <p className="mt-1 font-bold text-lime-600">
                  ${p.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
