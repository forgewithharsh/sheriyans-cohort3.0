import axios from "axios";
import { useAuthContext } from "../modules/auth/context/useAuthContext";

const useApi = () => {
  const { accessToken } = useAuthContext();

  const api = axios.create({
  baseURL: "http://localhost:5173/api",
  withCredentials: true,
});

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
