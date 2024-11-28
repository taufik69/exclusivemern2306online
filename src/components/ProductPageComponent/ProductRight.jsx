import React, { useState } from "react";
import ProductCard from "../CommonCoponents/ProductCard";
import { useGetAllProductQuery } from "../../Features/Api/ProductApi";
const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const [page, setpage] = useState(3);
  const [pagePerShow, setpagePerShow] = useState(9);
  let totalPage = data?.limit / 9;

  //   pagination funtionality
  const handlePerItem = (index) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setpage(index);
    }
  };

  return (
    <div className="w-[75%]">
      <div className="flex justify-end items-center gap-x-2">
        <h2 className="font-popins font-normal text-[16px] text-text_black000000">
          Show :
        </h2>
        <select name="" id="" className="px-3 bg-slate-200 rounded-sm py-1">
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* product */}
      <div className="flex flex-wrap justify-between ">
        {data?.products?.slice(page * 9 - 9, page * pagePerShow).map((item) => (
          <div className="w-[30%]">
            <ProductCard itemData={item} />
          </div>
        ))}
      </div>

      <div
        aria-label="Page navigation example"
        className="flex justify-center items-center mt-20"
      >
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
              onClick={() => handlePerItem(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...new Array(Math.ceil(totalPage) || 8)].map((_, index) => (
            <li>
              <span
                href="#"
                className={
                  index + 1 === page
                    ? "flex items-center justify-center px-4 h-10 leading-tight text-white_FFFFFF bg-redDB4444 border border-redDB4444 hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
                }
                onClick={() => handlePerItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}

          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              onClick={() => handlePerItem(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </div>

      {/* product */}
    </div>
  );
};

export default ProductRight;
