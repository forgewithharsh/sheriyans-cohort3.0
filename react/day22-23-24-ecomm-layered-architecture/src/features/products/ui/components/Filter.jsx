import { useAllCategories } from "../../hooks/useProductHooks";

const Filter = () => {
  const { data, isPending, error } = useAllCategories();

  if (isPending) return <h1>Loading Categories...</h1>;

  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Categories */}
      <div className="w-full md:w-64">
        <select className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black">
          <option value="all">All Categories</option>

          {data?.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.slug}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
