import React, { useContext, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../context/Mycontext";

const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setProductsData(res.data);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="p-2 grid grid-cols-4 gap-4">
      {productsData.map((elem) => {
        return <ProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default Home;
