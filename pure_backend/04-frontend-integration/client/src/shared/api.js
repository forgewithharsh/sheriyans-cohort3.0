import axios from "axios";
import { useAuthContext } from "../modules/auth/context/AuthProvider";

const useApi = () => {
  const { accessToken } = useAuthContext();

  const api = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
  });
};

export default useApi;
