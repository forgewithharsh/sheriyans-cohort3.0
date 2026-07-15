import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev
        .map((val) => {
          return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        cartOpen,
        setCartOpen,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
