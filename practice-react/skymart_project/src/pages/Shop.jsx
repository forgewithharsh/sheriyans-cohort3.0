import React from "react";
import ProductDetails from "../components/ProductDetails";
import { getProductsDataApi } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";
import ProductCardSkeleton from "../components/roductCardSkeleton";

const Shop = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 5000,
  });

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
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
