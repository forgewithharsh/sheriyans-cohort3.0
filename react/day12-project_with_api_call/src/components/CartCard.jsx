import React from "react";
import { Minus, Plus, Star, Trash2 } from "lucide-react";

const CartCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-5 shadow-md transition-all hover:shadow-xl md:flex-row">
      {/* Product Image */}
      <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gray-100 p-5 md:w-56">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {/* Category */}
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
            {product.category}
          </span>

          {/* Title */}
          <h2 className="mt-3 line-clamp-2 text-xl font-semibold">
            {product.title}
          </h2>

          {/* Description */}
          <p className="mt-2 line-clamp-3 text-sm text-gray-500">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />

            <span className="font-medium">{product.rating.rate}</span>

            <span className="text-gray-500">
              ({product.rating.count} Reviews)
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Price */}
          <h3 className="text-3xl font-bold text-green-600">
            ${product.price}
          </h3>

          <div className="flex flex-wrap items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
              <button className="p-3 transition hover:bg-gray-100">
                <Minus size={18} />
              </button>

              <span className="border-x border-gray-300 px-5 py-3 font-semibold">
                1
              </span>

              <button className="p-3 transition hover:bg-gray-100">
                <Plus size={18} />
              </button>
            </div>

            {/* Remove Button */}
            <button className="flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600">
              <Trash2 size={18} />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
