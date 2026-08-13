import React, { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Product Container */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="grid md:grid-cols-2">

            {/* Product Image */}
            <div className="relative flex min-h-[500px] items-center justify-center bg-gray-50 p-10">
              <span className="absolute left-6 top-6 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold capitalize text-blue-700">
                {product.category}
              </span>

              <img
                src={product.image}
                alt={product.title}
                className="max-h-[420px] w-full object-contain transition duration-500 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              {/* Category */}
              <p className="text-sm font-medium capitalize text-blue-600">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-2">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-semibold text-gray-900">
                    {product.rating.rate}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {product.rating.count} Reviews
                </span>
              </div>

              {/* Price */}
              <div className="mt-7">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-gray-600">
                {product.description}
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-gray-200" />

              {/* Quantity */}
              <div>
                <p className="mb-3 text-sm font-semibold text-gray-900">
                  Quantity
                </p>

                <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-300">
                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, prev - 1))
                    }
                    className="p-3 transition hover:bg-gray-100"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-3 transition hover:bg-gray-100"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Add Cart */}
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]">
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              {/* Stock Info */}
              <div className="mt-5 flex items-center gap-2 text-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                <span className="font-medium text-green-600">
                  In Stock
                </span>
                <span className="text-gray-400">
                  • Free shipping available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
