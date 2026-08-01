import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = api.post("/auth/login", credentials);
    console.log("Response from login api", res);
  } catch (error) {
    console.log("Error in Login API", error);
  }
};
