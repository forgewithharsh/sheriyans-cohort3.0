import React from "react";
import ProductDetails from "../components/ProductDetails";
import ProductCardSkeleton from "../components/roductCardSkeleton";
import { useProductApi } from "../hooks/productHook";
import Filter from "../components/Filter";

const Shop = () => {
  let { data, isPending, error } = useProductApi();

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Filter />
      <div className="mx-auto max-w-6xl space-y-8">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => {
              <ProductCardSkeleton key={index} />;
            })
          : data.map((val) => <ProductDetails key={val.id} product={val} />)}
      </div>
    </div>
  );
};

export default Shop;
