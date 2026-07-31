import React from "react";
import { Star, Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  const { setCartItems } = useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, product]);
    alert("Product added into cart");
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="h-64 overflow-hidden bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        {/* Category */}
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold">{product.title}</h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating.rate}</span>

          <span className="text-gray-500">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-2">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          {isInCart ? (
            <div className="flex items-center gap-3 rounded-xl border border-[#333] bg-[#111] px-3 py-2">
              <button className="rounded-lg p-1.5 text-white transition hover:bg-[#222]">
                <Minus size={18} />
              </button>

              <span className="min-w-[24px] text-center font-semibold text-white">
                1
              </span>

              <button className="rounded-lg p-1.5 text-white transition hover:bg-[#222]">
                <Plus size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              className="rounded-xl bg-[#f97316] px-5 py-2.5 font-semibold text-white transition hover:bg-[#ea580c]"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
