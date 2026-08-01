import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const useAuthHook = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let registerFormSubmit = (data) => {
    console.log("register", data);
  };

  let loginFormSubmit = (data) => {
    // Api Call
    console.log("login", data);
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};

export default useAuthHook;
