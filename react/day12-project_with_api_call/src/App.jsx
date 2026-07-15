import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  const { cartOpen, cartItems } = useContext(MyStore);

  async function getProductsData() {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setProductsData(res.data);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {cartOpen ? (
        <div className="h-screen">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);

            return (
              <ProductCard key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
