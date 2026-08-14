import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 5000,
  });

  return {
    data,
    isPending,
    error,
  };
};

export const useFilterProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    let data = await getProductsDataApi();
    setProductsData(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };

  const filterData = (searchParams) => {
    let data = productsData.filter((val) =>
      val.title.toLowerCase().includes(searchParams.toLowerCase()),
    );

    if (data) {
      setFilteredProducts(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    productsData,
    setProductsData,
    isLoading,
    setIsLoading,
    filteredProducts,
    setFilteredProducts,
    filterData,
  };
};
