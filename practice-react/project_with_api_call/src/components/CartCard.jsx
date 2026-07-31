import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../context/MyContext";

const CartCard = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useContext(MyStore);

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[#262626] bg-[#171717] p-5 transition hover:border-[#f97316] md:flex-row">
      {/* Product Image */}
      <div className="h-40 w-full overflow-hidden rounded-xl bg-[#111] md:w-40">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain p-2"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{item.title}</h2>

          <p className="mt-1 text-sm text-gray-400">{item.brand}</p>

          <p className="mt-3 line-clamp-2 text-gray-500">{item.description}</p>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
          {/* Quantity */}
          <div className="flex items-center overflow-hidden rounded-xl border border-[#333] bg-[#111]">
            <button
              onClick={() => decrementQuantity(item.id)}
              className="p-3 text-white transition hover:bg-[#222]"
            >
              <Minus size={18} />
            </button>

            <span className="w-12 text-center text-lg font-semibold text-white">
              {item.quantity}
            </span>

            <button
              onClick={() => incrementQuantity(item.id)}
              className="p-3 text-white transition hover:bg-[#222]"
            >
              <Plus size={18} />
            </button>
          </div>

          {/* Price */}
          <div className="text-center">
            <p className="text-3xl font-bold text-[#f97316]">
              ${item.price.toFixed(2)}
            </p>
          </div>

          {/* Remove */}
          <button className="rounded-xl bg-red-500/20 p-3 text-red-500 transition hover:bg-red-500 hover:text-white">
            <Trash2 size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
