import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addToUser } from "../state/authSlice";
import { toast } from "react-toastify";

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
      let response = await loginUserApi(data);

      dispatch(addToUser(response));
      toast.success("User Logged In");
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
