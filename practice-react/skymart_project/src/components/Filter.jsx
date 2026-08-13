import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const Filter = () => {
  return (
    <div className="mx-auto mb-8 max-w-7xl rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-100"
          />
        </div>

        {/* Category */}
        <div className="flex items-center gap-3">
          <SlidersHorizontal
            size={20}
            className="hidden text-gray-500 sm:block"
          />

          <select
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium capitalize text-gray-700 outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-100 md:w-56"
          >
            <option value="">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
            <option value="laptops">Laptops</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
