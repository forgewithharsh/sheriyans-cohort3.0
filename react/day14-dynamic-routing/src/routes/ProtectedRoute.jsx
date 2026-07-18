import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let isAdmin = false;

  if (!isAdmin) {
    console.log("hey i m running...");
    alert("You are not an Admin!")
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;
