import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAuth = () => {
  let navigate = useNavigate();

  const { registeredUsers, setLoggedInUser, setRegisteredUsers } =
    useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // Login Logic
  const loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
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
    setLoggedInUser(data);
    localStorage.setItem("loggedUsers", JSON.stringify(data));
    navigate("/main");

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
