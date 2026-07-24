import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "favourite",
          element: <Favourite />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
