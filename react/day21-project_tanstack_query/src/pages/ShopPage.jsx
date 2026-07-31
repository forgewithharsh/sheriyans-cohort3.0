import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { getProductsDataApi } from "../api/productApi";
import { useEffect } from "react";

const ShopPage = async () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    let data = await getProductsDataApi();
    setProductsData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

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
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
