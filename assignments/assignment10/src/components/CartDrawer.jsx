import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartHook } from "../hooks/useCartHook";

export default function CartDrawer() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    checkout,
    cartTotal,
    isCartOpen,
    closeCart,
  } = useCartHook();

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-ink-700 bg-ink-950 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-700 px-6 py-6">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-brand" size={20} />
            <h2 className="font-display text-xl font-semibold">Cart</h2>
            <span className="rounded-full bg-ink-800 px-2.5 py-0.5 text-xs text-white/60">
              {cartItems.length} items
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-white/50 transition-colors hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <p className="mt-10 text-center text-white/40">
              Your cart is empty.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-ink-700 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 rounded-xl bg-white object-contain p-2"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="line-clamp-1 font-medium leading-tight">
                        {item.title}
                      </p>
                      <p className="mt-1 font-semibold text-brand">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-ink-600 px-2 py-1">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="text-white/60 hover:text-white"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-4 text-center text-sm">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="text-white/60 hover:text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/40 hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-ink-700 px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-white/60">Total</span>
            <span className="font-display text-2xl font-bold text-brand">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
          <button
            onClick={checkout}
            disabled={cartItems.length === 0}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-semibold text-ink-950 transition-colors hover:bg-brand-dim disabled:opacity-40"
          >
            Checkout →
          </button>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="mt-3 w-full text-center text-sm text-white/40 hover:text-white/70"
            >
              Clear cart
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
