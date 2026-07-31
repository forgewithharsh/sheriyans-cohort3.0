import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];

    setRegisteredUsers(arr);

    localStorage.setItem("registeredUsers", JSON.stringify(arr));

    toast.success("Registered Successfully!");
    reset();
  };

  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email || val.password === data.password;
    });

    if (!user) {
      toast.error("Invalid Something...");
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user))
    toast.success("User Logged In...");
    reset();
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

export default useAuth;
