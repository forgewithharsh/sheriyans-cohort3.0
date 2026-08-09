import axios from "axios";

export const getAllProducts = async (limit, page = 1) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`);
    return res.data;
  } catch (error) {
    console.log("Error in api", error);
  }
};
