import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LiaAngleRightSolid } from "react-icons/lia";

const ProductLeft = ({ categoryData, isLoading, handleCategory }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handledropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  

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
                <li className="flex animate-pulse bg-gray-300 rounded w-full py-4 my-3 mr-5"></li>
              </div>
            ))}
        </ul>
      ) : (
        <ul>
          {categoryData?.map((item) => (
            <div key={item._id}>
              <div
                className="flex items-center justify-between hover:bg-gray-200 transition-all cursor-pointer"
                onClick={() => {
                  handleCategory(item._id);
                  handledropdown(item._id);
                }}
              >
                <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer">
                  {item.name}
                </li>
                {item.subCategory.length > 0 && (
                  <div>
                    <span
                      className="pr-10 text-xl text-text_black000000"
                      onClick={() => handledropdown(item._id)}
                    >
                      {openDropdown === item._id ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                )}
              </div>

              {openDropdown === item._id &&
                item.subCategory.map((subItem) => (
                  <div
                    key={subItem._id}
                    className="flex flex-col hover:bg-blue-200 transition-all bg-gray-300 my-2 mr-10 "
                  >
                    <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer">
                      {subItem.name}
                    </li>
                  </div>
                ))}
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
