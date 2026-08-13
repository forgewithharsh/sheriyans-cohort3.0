const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
      {/* Image Skeleton */}
      <div className="h-64 animate-pulse bg-gray-200" />

      {/* Details */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-3/5 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-11/12 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-14 animate-pulse rounded-md bg-gray-200" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-7 w-24 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Button */}
        <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
