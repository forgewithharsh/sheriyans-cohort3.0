import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/authAction";

const useAuthHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let registerFormSubmit = (data) => {
    console.log("register", data);
  };

  let loginFormSubmit = async (data) => {
    try {
      // Api Call
      dispatch(loginUserAction(data));
    } catch (error) {
      console.log("Form api error", error);
    }
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
