import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const TanStack = () => {
  let limit = 10;
  const [page, setPage] = useState(0);

  let { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts(limit, page),
    placeholderData: keepPreviousData,
  });

  if (isPending) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  let totalPages = Math.ceil(data.total / limit);

  return (
    <div
      style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
      className="min-h-screen bg-gray-100 px-6 py-10"
    >
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
        Products
      </h1>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mx-auto mt-10 flex items-center justify-center gap-4">
        <button
          className="bg-red-500 rounded-xl p-2 text-white"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          ← Prev
        </button>

        <span>
          page {page + 1} of {totalPages}
        </span>

        <button
          disabled={page >= totalPages - 1}
          className="bg-red-500 rounded-xl p-2 text-white"
          onClick={() => setPage(page + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default TanStack;
