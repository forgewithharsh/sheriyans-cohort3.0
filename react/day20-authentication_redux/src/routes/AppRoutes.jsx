import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const hydrateUser = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("Unauthorized User");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
