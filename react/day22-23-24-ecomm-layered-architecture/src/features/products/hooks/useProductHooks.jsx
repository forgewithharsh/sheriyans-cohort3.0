import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi, getProductsCategories } from "../api/productApis";

export const useAllProducts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsApi,
  });

  return {
    isPending,
    error,
    data,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: getProductsCategories,
  })
}
