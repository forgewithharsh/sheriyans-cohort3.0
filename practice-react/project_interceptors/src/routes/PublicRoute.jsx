import React from "react";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicRoute = () => {
  let { loggedInUser } = useContext(Auth);

  if (loggedInUser) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default PublicRoute;
