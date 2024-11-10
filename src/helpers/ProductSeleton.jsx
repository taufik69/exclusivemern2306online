import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="mt-10">
      <div className="w-full">
        <div className="bg-gray-200 pb-[55px] px-3 pt-4 rounded relative animate-pulse">
          <div className="flex items-center justify-between">
            {/* Discount Badge Skeleton */}
            <span className="px-3 py-2 rounded bg-gray-300 inline-block font-popins text-sm font-normal w-16 h-6"></span>

            {/* Heart Icon Skeleton */}
            <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-gray-300"></span>
          </div>

          {/* Product Image Skeleton */}
          <div className="flex justify-between mt-4">
            <div className="w-[192px] h-[152px] bg-gray-300 rounded m-auto"></div>
            <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-gray-300 mt-2"></span>
          </div>

          {/* Add to Cart Button Skeleton */}
          <div className="opacity-0 absolute left-0 bottom-0 font-popins font-medium text-lg cursor-pointer flex justify-center items-center w-full h-12 bg-gray-300"></div>
        </div>

        {/* Text and Price Skeletons */}
        <div className="flex flex-col items-start gap-y-2 mt-4">
          {/* Product Title Skeleton */}
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>

          {/* Price Skeleton */}
          <div className="flex items-center gap-x-3 mt-2">
            <span className="w-16 h-6 bg-gray-300 rounded"></span>
            <span className="w-12 h-6 bg-gray-200 rounded"></span>
          </div>

          {/* Rating Skeleton */}
          <div className="flex items-center gap-x-1 mt-2">
            {[...new Array(5)].map((_, index) => (
              <span key={index} className="w-4 h-4 bg-gray-300 rounded"></span>
            ))}
            <h3 className="ml-2 w-10 h-6 bg-gray-200 rounded"></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
