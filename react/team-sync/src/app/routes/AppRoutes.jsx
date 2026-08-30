import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee);
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
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
    {
      path: "/home",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
