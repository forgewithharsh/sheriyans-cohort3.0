import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "./api/productApi";

const TanStack = () => {
  let { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isPending) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
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
