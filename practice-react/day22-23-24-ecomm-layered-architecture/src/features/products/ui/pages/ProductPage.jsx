import React from "react";
import {
  useAllProducts,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  const { isPending, errors, data, search, setSearch } = useAllProducts();

  const {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) return <h1>Loading Products...</h1>;

  return (
    <div>
      <Filter category={category} setCategory={setCategory} search={search} setSearch={setSearch} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productByCategory?.products.length
          ? productByCategory.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
