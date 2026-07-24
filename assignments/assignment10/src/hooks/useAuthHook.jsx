import React from "react";
import { useForm } from "react-hook-form";

export const useAuthHook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Login Logic
  const loginFormSubmit = (data) => {
    

    reset();
  };

  // Register Logic
  const registerFormSubmit = (data) => {
    console.log(data);

    reset();
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
