import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const App = () => {
  let limit = 10;
  const [products, setProducts] = useState(null);

  async function getAllProducts() {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}`,
    );
    setProducts(res.data);
    console.log(res.data);
    
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
        Products
      </h1>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mx-auto mt-10 flex items-center justify-center gap-4">
        <button>← Prev</button>

        <span>value</span>

        <button>Next →</button>
      </div>
    </div>
  );
};

export default App;
