import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export const useAuthHook = () => {
  let navigate = useNavigate();

  const { registeredUsers, loggedInUser, setLoggedInUser, setRegisteredUsers } =
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
    let alreadyExists = registeredUsers.find((u) => u.email === data.email);

    if (alreadyExists) {
      toast.error("An account with this email already exists");
      return;
    }

    let arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    localStorage.setItem("RegisteredUser", JSON.stringify(arr));
    toast.success("Registered successfully! Please login.");
    navigate("/main");
    reset();
  };

  // Logout Logic
  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedUsers");
    toast.success("Logged out");
    navigate("/");
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    user: loggedInUser,
    logout,
    loginFormSubmit,
    registerFormSubmit,
  };
};
