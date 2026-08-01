import React from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import useProductApi from "../hooks/productHooks";

const ShopPage = () => {
  let { isPending, data, error } = useProductApi();

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="min-h-screen bg-[#0f0f11] px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">Discover Products</h1>

        <p className="mt-2 text-gray-400">
          Browse the latest products and add your favorites to the cart.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
