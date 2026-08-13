import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";

const Shop = () => {
  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    let res = await axios.get("/products");
    setProductData(res.data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        {productData.map((val) => (
          <ProductDetails key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
