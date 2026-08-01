import { axiosInstance } from "../config/axiosInstance";

export const getProductsDataApi = async () => {
  try {
    console.log("api function is running");
    const res = await axiosInstance.get("/products");
    return res.data.products;
  } catch (error) {
    console.log("Error in Products API", error);
  }
};
