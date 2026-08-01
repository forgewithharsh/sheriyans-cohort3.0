import React from "react";
import { Search } from "lucide-react";

const Filter = ({ filterProducts }) => {
  return (
    <div className="mb-8 rounded-2xl border border-[#262626] bg-[#171717] p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            onChange={(e) => filterProducts(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border border-[#333] bg-[#111] py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#f97316]"
          />
        </div>

        {/* Category */}
        <select className="rounded-xl border border-[#333] bg-[#111] px-4 py-3 text-white outline-none transition focus:border-[#f97316]">
          <option>All Categories</option>
          <option>Beauty</option>
          <option>Fragrances</option>
          <option>Furniture</option>
          <option>Groceries</option>
        </select>

        {/* Search Button */}
        <button className="rounded-xl bg-[#f97316] px-8 py-3 font-semibold text-white transition hover:bg-[#ea580c]">
          Search
        </button>

        {/* Reset Button */}
        <button className="rounded-xl border border-[#333] px-8 py-3 font-semibold text-white transition hover:border-[#f97316] hover:text-[#f97316]">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
