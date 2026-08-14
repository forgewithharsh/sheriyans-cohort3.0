import { axiosInstance } from "../config/axiosInstance";

export const loginUserApi = async (credentials) => {
  try {
    let res = await axiosInstance.post("/auth/login", credentials);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (error) {
    console.log("Error in products api", error);
  }
};

export const hydrateUserApi = async () => {
  let token = localStorage.getItem("accessToken");

  try {
    let res = await axiosInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("Error in products api", error);
  }
};
