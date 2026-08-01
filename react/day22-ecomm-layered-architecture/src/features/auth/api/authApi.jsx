import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    console.log("Response from login api", res);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (error) {
    console.log("Error in Login API", error);
  }
};

export const hydrateUser = async () => {
  try {
    let res = await api.get("/auth/me");
    console.log("Response from hydration api", res);
    return res.data;
  } catch (error) {
    console.log("Error in Login API", error);
  }
};
