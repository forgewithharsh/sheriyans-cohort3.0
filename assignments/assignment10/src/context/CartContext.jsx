import { createContext, useState } from "react";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  return (
    <Cart.Provider
      value={{ cartItems, setCartItems: saveCart, isCartOpen, setIsCartOpen }}
    >
      {children}
    </Cart.Provider>
  );
};
