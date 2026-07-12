import React from "react";
import { Star, Trash2, ShoppingBag } from "lucide-react";

const Cart = ({ cartItems }) => {

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl bg-white shadow">
            <ShoppingBag size={70} className="mb-4 text-gray-400" />
            <h2 className="text-3xl font-semibold text-gray-500">
              Your Cart is Empty
            </h2>
            <p className="mt-2 text-gray-400">
              Looks like you haven't added anything yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-6 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow transition hover:shadow-lg md:flex-row"
                >
                  {/* Product Image */}
                  <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gray-100 p-4 md:w-52">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
                        {item.category}
                      </span>

                      <h2 className="mt-3 text-xl font-semibold line-clamp-2">
                        {item.title}
                      </h2>

                      <p className="mt-3 line-clamp-3 text-sm text-gray-500">
                        {item.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <Star
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="font-semibold">
                          {item.rating.rate}
                        </span>

                        <span className="text-gray-500">
                          ({item.rating.count} Reviews)
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <h3 className="text-3xl font-bold text-green-600">
                        ${item.price}
                      </h3>

                      <button className="flex items-center gap-2 rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600">
                        <Trash2 size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow-lg lg:sticky lg:top-8">
              <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

              <div className="space-y-5">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-gray-600">Items</span>
                  <span className="font-semibold">{cartItems.length}</span>
                </div>

                <hr />

                <div className="flex items-center justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-green-600">
                    $
                    {cartItems
                      .reduce((sum, item) => sum + item.price, 0)
                      .toFixed(2)}
                  </span>
                </div>

                <button className="mt-6 w-full rounded-xl bg-black py-3 text-lg font-semibold text-white transition hover:bg-gray-800">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
