import { api } from "../../../config/api";

export const getAllProductsApi = async (search) => {
  let url = search ? `/products/search?q=${search}` : "/products";

  try {
    let res = await api.get(url);
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

export const getProductByCategory = async () => {
  try {
    let res = await api.get("/products/category/");
    return res.data;
  } catch (error) {
    console.log("Error in getting all products api", error);
  }
}
