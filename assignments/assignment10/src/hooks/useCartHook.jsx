import { useContext } from "react";
import { toast } from "react-toastify";
import { Cart } from "../context/CartContext";

export const useCartHook = () => {
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } =
    useContext(Cart);

  const addToCart = (product) => {
    let existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      let updated = cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    toast.success("Added to cart");
    setIsCartOpen(true);
  };

  const increaseQty = (id) => {
    let updated = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item,
    );
    setCartItems(updated);
  };

  const decreaseQty = (id) => {
    let updated = cartItems
      .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);
    setCartItems(updated);
  };

  const removeFromCart = (id) => {
    let updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    toast.success("Removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const checkout = () => {
    if (cartItems.length === 0) return;
    toast.success("Order placed!");
    clearCart();
    setIsCartOpen(false);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return {
    cartItems,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    checkout,
    isCartOpen,
    openCart,
    closeCart,
    cartTotal,
    cartCount,
  };
};
