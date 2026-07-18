import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
