import React from "react";

const ProductLeft = ({ categoryData, isLoading }) => {
  return (
    <div className="w-[23%] border-r-[1.5px] border-r-text_black7D8184">
      <h1 className="font-popins font-bold text-[20px] text-text_black000000 mb-4 cursor-pointer">
        Shop By Category
      </h1>
      {isLoading ? (
        <ul>
          {/* Simulate 5 loading skeleton items */}
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between hover:bg-gray-200 transition-all"
              >
                <li className="flex animate-pulse bg-gray-300 rounded w-full py-4 my-3"></li>
              </div>
            ))}
        </ul>
      ) : (
        <ul>
          {categoryData?.map((item) => (
            <div className="flex items-center justify-between hover:bg-gray-200 transition-all">
              <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer capitalize">
                {item}
              </li>
            </div>
          ))}
        </ul>
      )}

      <div>
        <h1 className="font-popins font-bold text-[20px] text-text_black000000 mb-4 mt-4 cursor-pointer">
          Shop by Color
        </h1>
        <ul>
          <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer capitalize">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-red-500 "></span>
              <p>Red</p>
            </div>
          </li>

          <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer capitalize">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-blue-500 "></span>
              <p>Blue</p>
            </div>
          </li>

          <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer capitalize">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-green-500 "></span>
              <p>Green</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductLeft;
