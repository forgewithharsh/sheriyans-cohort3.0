import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const demoItem = {
  name: "Smart Watch Series 5",
  price: 299.99,
  qty: 1,
  image:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
};

export default function CartDrawer({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-ink-700 bg-ink-950 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-700 px-6 py-6">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-brand" size={20} />
            <h2 className="font-display text-xl font-semibold">Cart</h2>
            <span className="rounded-full bg-ink-800 px-2.5 py-0.5 text-xs text-white/60">
              1 items
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="text-white/50 transition-colors hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex gap-4 rounded-2xl border border-ink-700 p-4">
            <img
              src={demoItem.image}
              alt={demoItem.name}
              className="h-20 w-20 rounded-xl bg-white object-cover"
            />
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="font-medium leading-tight">{demoItem.name}</p>
                <p className="mt-1 text-brand font-semibold">
                  ${demoItem.price.toFixed(2)}
                </p>
                <p className="text-xs text-white/40">
                  ${demoItem.price.toFixed(2)} each
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-full border border-ink-600 px-2 py-1">
                  <button className="text-white/60 hover:text-white">
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm">{demoItem.qty}</span>
                  <button className="text-white/60 hover:text-white">
                    <Plus size={14} />
                  </button>
                </div>
                <button className="text-white/40 hover:text-red-400">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-700 px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-white/60">Total</span>
            <span className="font-display text-2xl font-bold text-brand">
              ${demoItem.price.toFixed(2)}
            </span>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-semibold text-ink-950 transition-colors hover:bg-brand-dim">
            Checkout →
          </button>
          <button className="mt-3 w-full text-center text-sm text-white/40 hover:text-white/70">
            Clear cart
          </button>
        </div>
      </aside>
    </>
  );
}
