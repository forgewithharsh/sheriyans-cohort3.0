import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicProtected from "./protected/PublicProtected";
import Login from "../features/auth/ui/pages/LoginPage";
import Register from "../features/auth/ui/pages/RegisterPage";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shared/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import { hydrateUser } from "../features/auth/api/authApi";

const AppRoutes = () => {
  useEffect(() => {
    (async () => {
      try {
        let response = await hydrateUser();
        console.log(response);
      } catch (error) {
        console.log("Error in hydration...", error);
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "orders",
          element: <OrderPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
