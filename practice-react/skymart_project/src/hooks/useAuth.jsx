import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/authSlice";
import { loginUserApi } from "../api/productApi";
import { loginUserAction } from "../features/auth/authAction";

export const useAuth = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // Register Logic
  const registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("User Registered");

    reset();
  };

  // Login Logic
  const loginFormSubmit = (data) => {
    try {
      // Api Call
      dispatch(loginUserAction(data));
    } catch (error) {
      console.log("Form api error", error);
    }

    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
