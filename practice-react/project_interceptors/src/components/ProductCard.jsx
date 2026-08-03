import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-4 p-5">
        {/* Category */}
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-medium">{product.rating.rate}</span>
          <span className="text-sm text-gray-500">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white transition hover:bg-gray-800">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
