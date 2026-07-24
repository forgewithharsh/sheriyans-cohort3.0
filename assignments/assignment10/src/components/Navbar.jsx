import { Link, NavLink, useNavigate } from "react-router-dom";
import { Zap, ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
];

export default function Navbar({ onCartClick, cartCount = 0 }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const displayName = user?.name || "Guest";
  const initial = displayName.charAt(0).toUpperCase();

  function handleLogout() {
    logout();
    navigate("/signup", { replace: true });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-ink-950">
            <Zap size={18} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Sky<span className="text-brand">Mart</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors ${
                  isActive ? "text-brand" : "text-white/60 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-ink-600 bg-ink-900 py-1.5 pl-1.5 pr-4 sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-ink-950">
              {initial}
            </span>
            <span className="text-sm font-medium">{displayName}</span>
          </div>

          <button
            onClick={onCartClick}
            aria-label="Open cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 bg-ink-900 text-white/80 transition-colors hover:border-brand/60 hover:text-brand"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-ink-950">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={handleLogout}
            aria-label="Log out"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 bg-ink-900 text-white/80 transition-colors hover:border-red-400/60 hover:text-red-400"
          >
            <LogOut size={17} />
          </button>
        </div>
      </div>
    </header>
  );
}
