const ProductSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-[#262626] bg-[#171717] p-5">
      {/* Image */}
      <div className="h-56 w-full rounded-xl bg-[#2a2a2a]" />

      {/* Title */}
      <div className="mt-5 h-6 w-3/4 rounded bg-[#2a2a2a]" />

      {/* Brand */}
      <div className="mt-3 h-4 w-1/2 rounded bg-[#2a2a2a]" />

      {/* Price */}
      <div className="mt-5 flex justify-between">
        <div className="h-6 w-20 rounded bg-[#2a2a2a]" />
        <div className="h-6 w-16 rounded bg-[#2a2a2a]" />
      </div>

      {/* Quantity */}
      <div className="mt-5 flex items-center justify-between rounded-xl bg-[#111] p-3">
        <div className="h-10 w-10 rounded-lg bg-[#2a2a2a]" />
        <div className="h-6 w-8 rounded bg-[#2a2a2a]" />
        <div className="h-10 w-10 rounded-lg bg-[#2a2a2a]" />
      </div>

      {/* Button */}
      <div className="mt-5 h-12 w-full rounded-xl bg-[#2a2a2a]" />
    </div>
  );
};

export default ProductSkeleton;
