import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/authLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import About from "../pages/About";
import { hydrateUserApi } from "../api/productApi";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let res = await hydrateUserApi();
        dispatch(addUser(res));
      } catch (error) {
        console.log("Error in hydration..", error);
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
    // {
    //   path: "/main",
    //   element: <MainProtected />,
    //   children: [
    //     {
    //       path: "",
    //       element: <MainLayout />,
    //       children: [
    //         {
    //           path: "",
    //           element: <Home />,
    //         },
    //         {
    //           path: "shop",
    //           element: <Shop />,
    //         },
    //         {
    //           path: "about",
    //           element: <About />,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
