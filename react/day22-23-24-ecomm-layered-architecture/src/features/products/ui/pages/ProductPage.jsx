import React from "react";
import { useAllProducts } from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {

  const {isPending, error, data} = useAllProducts();

  if(isPending) return <h1>Loading Products...</h1>

  return (
    <div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {data.products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    </div>
  );
};

export default ProductPage;
