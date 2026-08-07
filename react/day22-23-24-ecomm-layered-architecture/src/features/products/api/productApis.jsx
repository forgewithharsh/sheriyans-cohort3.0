import { api } from "../../../config/api";

export const getAllProductsApi = async () => {
  try {
    let res = await api.get("/products");
    return res.data;
  } catch (error) {
    console.log("Error in getting all products api", error);
  }
};

export const getProductsCategories = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("Error in getting all products api", error);
  }
};
