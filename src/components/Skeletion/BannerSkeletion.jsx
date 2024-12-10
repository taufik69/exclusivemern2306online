import React from "react";

const BannerSkeleton = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[97%] h-[440px]   bg-gray-300 animate-pulse">
        <div className="w-full h-1/2 bg-gray-400 animate-pulse"></div>
        <div className="w-full h-1/2 bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default BannerSkeleton;
