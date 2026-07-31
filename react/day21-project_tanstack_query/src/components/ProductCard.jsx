import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log({
      ...product,
      quantity,
    });

    alert(`${quantity} item(s) added to cart`);
  };

  return (
    <div className="rounded-2xl border border-[#262626] bg-[#171717] p-5">
      {/* Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-4 h-56 w-full rounded-xl object-cover"
      />

      {/* Title */}
      <h2 className="text-xl font-bold text-white">{product.title}</h2>

      {/* Brand */}
      <p className="mt-1 text-sm text-gray-400">{product.brand}</p>

      {/* Price */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-2xl font-bold text-[#f97316]">
          ${product.price}
        </span>

        <span className="text-sm text-green-400">{product.stock} Left</span>
      </div>

      {/* Quantity */}
      <div className="mt-5 flex items-center justify-between rounded-xl border border-[#333] bg-[#111] p-2">
        <button
          onClick={decreaseQuantity}
          className="rounded-lg bg-[#222] p-2 text-white transition hover:bg-[#333]"
        >
          <Minus size={18} />
        </button>

        <span className="text-lg font-semibold text-white">{quantity}</span>

        <button
          onClick={increaseQuantity}
          className="rounded-lg bg-[#222] p-2 text-white transition hover:bg-[#333]"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 font-semibold text-white transition hover:bg-[#ea580c]"
      >
        <ShoppingCart size={20} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
