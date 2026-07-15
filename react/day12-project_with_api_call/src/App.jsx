import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])

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
      <Navbar setCartOpen={setCartOpen}/>

      {cartOpen ? (
        <div className="h-screen">
          <CartScreen cartItems={cartItems}/>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsData.map((elem) => {
            return <ProductCard key={elem.id} product={elem} setCartItems={setCartItems}/>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
