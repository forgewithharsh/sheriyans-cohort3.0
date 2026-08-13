import { axiosInstance } from "../config/axiosInstance";

export const getProductsDataApi = async () => {
  try {
    let res = await axiosInstance.get("/products");
    return res.data.products;
  } catch (error) {
    console.log("Error in products api", error);
  }
};
