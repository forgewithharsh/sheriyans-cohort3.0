import React from "react";
import ProductDetails from "../components/ProductDetails";
import ProductCardSkeleton from "../components/roductCardSkeleton";
import { useFilterProducts } from "../hooks/productHook";
import Filter from "../components/Filter";

const Shop = () => {
const {
    filteredProducts,
    isLoading,
    filterData,
  } = useFilterProducts();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Filter filterData={filterData}/>
      <div className="mx-auto max-w-6xl space-y-8">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => {
              <ProductCardSkeleton key={index} />;
            })
          : filteredProducts.map((val) => <ProductDetails key={val.id} product={val} />)}
      </div>
    </div>
  );
};

export default Shop;
