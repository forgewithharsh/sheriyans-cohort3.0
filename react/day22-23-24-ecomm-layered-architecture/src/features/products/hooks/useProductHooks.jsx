import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi } from "../api/productApis";

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
