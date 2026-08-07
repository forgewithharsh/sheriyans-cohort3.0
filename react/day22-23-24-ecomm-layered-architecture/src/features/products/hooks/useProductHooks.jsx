import { useQuery } from "@tanstack/react-query";
import {
  getAllProductsApi,
  getProductByCategory,
  getProductsCategories,
} from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProducts = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  const { isPending, error, data } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductsApi(debounceSearch),
  });

  return {
    isPending,
    error,
    data,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: getProductsCategories,
  });
};

export const useByCategories = () => {
  const [category, setCategory] = useState(null);

  let { data } = useQuery({
    queryKey: ["productsByCategory"],
    queryFn: getProductByCategory,
  });

  return {
    data,
    category,
    setCategory,
  };
};
