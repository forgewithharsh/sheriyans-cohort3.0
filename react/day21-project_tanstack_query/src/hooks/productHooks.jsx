import React from "react";
import { getProductsDataApi } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";

const useProductApi = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 5000,
  });

  return {
    isPending,
    data,
    error,
  };
};

export default useProductApi;
