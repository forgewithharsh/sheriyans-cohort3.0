import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="h-screen p-2">
      <nav className="flex item-center justify-between mb-4">
        <h1>Logo</h1>
        <div className="flex item-center justify-between gap-10">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button>Login</button>
      </nav>

      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
