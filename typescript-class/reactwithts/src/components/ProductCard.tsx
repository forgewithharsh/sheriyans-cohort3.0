import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "../types";

const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
          {product.category}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h2 className="line-clamp-2 min-h-[48px] text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>

            <span className="text-xs text-green-600">In Stock</span>
          </div>

          {/* Add to Cart */}
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
