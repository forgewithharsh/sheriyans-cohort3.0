import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";

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

const useProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  let getProducts = async () => {
    let data = await getProductsDataApi();
    setProductsData(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };

  let filterProducts = (searchParmas) => {
    let filteredData = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchParmas.toLowerCase());
    });

    if (filteredData) {
      setFilteredProducts(filteredData);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    isLoading,
    filteredProducts,
    filterProducts,
  };
};

export { useProductApi, useProduct };
