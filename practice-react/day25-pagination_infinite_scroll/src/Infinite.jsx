import ProductCard from "./components/ProductCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";

const Infinite = () => {
  let limit = 12;

  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return <h1>Loading...</h1>;

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Products
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Explore our latest products
        </p>
      </div>

      {/* Product Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More */}
      {hasNextPage && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => fetchNextPage()}
            className="rounded-xl bg-black px-8 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-gray-800 hover:shadow-md active:scale-95"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Infinite;
