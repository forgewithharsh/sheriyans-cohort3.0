export default function ProductCard({ product }) {
  return (
    <div className="max-w-xs rounded-xl border bg-white p-4 shadow-md hover:shadow-lg transition">
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-52 w-full object-contain"
      />

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <span className="inline-block rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-600">
          {product.category}
        </span>

        <h2 className="text-lg font-semibold line-clamp-1">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <span className="text-sm text-yellow-500">
            ⭐ {product.rating}
          </span>
        </div>

        <button className="w-full rounded-lg bg-black py-2 text-white hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
