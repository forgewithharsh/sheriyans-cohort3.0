import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProductsData(res.data.products);
    } catch (error) {
      console.log("Error in Products API", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
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
