import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [productsData, setProductsData] = useState([]);

  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");

    setProductsData(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Debouncing...</h1>

      <input
        style={{ padding: "10px 30px" }}
        type="text"
        placeholder="Search products"
        onChange={(e) => setSearchData(e.target.data)}
      />

      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
