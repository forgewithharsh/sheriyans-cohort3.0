import React from "react";
import { ShoppingBag, Trash2 } from "lucide-react";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold">
          <ShoppingBag className="text-lime-600" />
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>
            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-lg object-contain"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold">{item.title}</h2>

                    <p className="mt-2 text-lg font-bold text-lime-600">
                      ${item.price}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <button className="rounded-lg p-2 text-red-500 transition hover:bg-red-50">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-xl bg-white p-6 shadow">
              <h2 className="mb-5 text-xl font-bold">Order Summary</h2>

              <div className="mb-4 flex justify-between">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="mb-6 flex justify-between text-lg font-bold">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full rounded-lg bg-lime-600 py-3 font-semibold text-white transition hover:bg-lime-700">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
