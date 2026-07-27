import { NavLink } from "react-router-dom";
import { ListTodo , Inbox, Info } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition ${
    isActive
      ? "bg-orange-50 dark:bg-gray-800 text-orange-600 dark:text-orange-400"
      : "text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800"
  }`;

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-orange-100 dark:border-gray-800 bg-white dark:bg-gray-900 min-h-screen p-4 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-orange-500 flex items-center justify-center text-white">
            <ListTodo  size={18} />
          </div>
          <span className="text-lg font-bold text-gray-800 dark:text-gray-100">TodoFlow</span>
        </div>
        <ThemeToggle />
      </div>
      <nav className="flex flex-col gap-1">
        <NavLink to="/" end className={linkClass}>
          <Inbox size={18} />
          Inbox
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          <Info size={18} />
          About
        </NavLink>
      </nav>
    </aside>
  );
}
