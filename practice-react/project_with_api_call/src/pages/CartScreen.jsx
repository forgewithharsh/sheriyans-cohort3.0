import React from "react";
import CartCard from "../components/CartCard";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  const { cartItems } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-[#0f0f11] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-white">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#333] py-20 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Your cart is empty 🛒
            </h2>

            <p className="mt-2 text-gray-400">
              Add some products to start shopping.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
