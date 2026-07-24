import  { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export const useAuthHook = () => {

  let navigate = useNavigate();

  const { registeredUsers, setLoggedInUser, setRegisteredUsers } =
    useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Login Logic
  const loginFormSubmit = (data) => {
    let user = registeredUsers.find((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (!user) {
      toast.error("User not found or invalid credentials");
      return;
    }

    setLoggedInUser(user);

    localStorage.setItem("loggedUsers", JSON.stringify(user));
    toast.success("User LoggedIn");
    navigate("/main");

    reset();
  };

  // Register Logic
  const registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    localStorage.setItem("RegisteredUser", JSON.stringify(arr));
    toast.success("User Registered");
    navigate("/main");

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
