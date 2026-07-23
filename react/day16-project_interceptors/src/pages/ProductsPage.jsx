import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProductsData() {
    const res = await axiosInstance.get("/products");

    setProducts(res.data);
    setLoading(false);
  }

  useEffect(() => {
    getProductsData();
  }, []);

  if (loading) return <h1 className="text-3xl">Loading...</h1>;

  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default ProductsPage;
