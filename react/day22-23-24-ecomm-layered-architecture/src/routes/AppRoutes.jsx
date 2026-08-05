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
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authAction";
import AboutPage from "../shared/pages/AboutPage";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      try {
        dispatch(hydrateUserAction());
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
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              index: "",
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
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
