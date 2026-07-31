import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtistDashboard from "../pages/ArtistDashboard";
import AuthLayout from "../layouts/AuthLayout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
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
          path: "artist-dashboard",
          element: <ArtistDashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
