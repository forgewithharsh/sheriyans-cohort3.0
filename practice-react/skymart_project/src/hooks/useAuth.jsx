import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [ registeredUsers, setRegisteredUsers ] = useState(
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
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("User not found or invalid credentials");
      return;
    }

    dispatch(addUser(user));

    localStorage.setItem("loggedUsers", JSON.stringify(user));
    toast.success("User LoggedIn");

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
