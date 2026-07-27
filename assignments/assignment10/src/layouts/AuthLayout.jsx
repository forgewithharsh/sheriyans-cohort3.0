import React from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayout = () => {
  return (
    <>
      <ToastContainer position="top-right" theme="dark" />
      <Outlet />
    </>
  );
};

export default AuthLayout;
