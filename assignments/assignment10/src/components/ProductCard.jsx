import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { formatCategory } from "../utils/format";

export default function ProductCard({ product }) {
  const rating = product.rating?.rate ?? 0;
  const reviews = product.rating?.count ?? 0;

  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white text-ink-950 transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-ink-900/90 px-3 py-1 text-xs font-medium text-white">
          {formatCategory(product.category)}
        </span>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs uppercase tracking-wide text-ink-950/40">
          {formatCategory(product.category)}
        </p>
        <h3 className="line-clamp-2 font-display text-[17px] font-semibold leading-snug">
          {product.title}
        </h3>

        <div className="flex items-center gap-1.5 border-b border-ink-950/10 pb-3 text-sm">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.round(rating) ? "currentColor" : "none"}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-ink-950/40">({reviews})</span>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-lime-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-ink-950 transition-colors group-hover:bg-brand-dim">
            <ShoppingCart size={14} strokeWidth={2.5} />
            Add
          </span>
        </div>
      </div>
    </Link>
  );
}
