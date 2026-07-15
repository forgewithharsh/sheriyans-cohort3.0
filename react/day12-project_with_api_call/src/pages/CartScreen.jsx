import React from "react";
import CartCard from "../components/CartCard";

const CartScreen = ({ cartItems }) => {
  return (
    <div className="h-screen">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
