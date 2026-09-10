import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../modules/auth/context/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:5173/api",
  withCredentials: true,
});

const useApi = () => {
  const { accessToken } = useContext(AuthContext);

  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return api;
};

export default useApi;
