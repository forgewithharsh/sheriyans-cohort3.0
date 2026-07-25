import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
