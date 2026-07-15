import React from "react";
import axios from "axios";

const App = () => {
  async function getData() {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      console.log(res.data);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }

  getData();

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
