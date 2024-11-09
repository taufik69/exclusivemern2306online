import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import image from "../../assets/products/p1.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const ProductCard = () => {
  return (
    <div>
      <div className=" w-[20%]  ">
        <div className="bg-white_F5F5F5 pb-[49px] px-3 pt-4 rounded">
          <div className="flex items-center justify-between">
            <span className="px-3 py-2 rounded bg-redDB4444 inline-block font-popins text-sm text-white_FFFFFF font-normal">
              -40%
            </span>
            <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white_FFFFFF cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF  text-xl">
              <IoHeartOutline />
            </span>
          </div>
          <div className="flex justify-between">
            <div className="w-[172] h-[152px] flex-1 ">
              <img
                src={image}
                alt={image}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white_FFFFFF cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF  text-xl mt-2">
              <MdOutlineRemoveRedEye />
            </span>
          </div>
        </div>
        <div>
          <h2>HAVIT HV-G92 Gamepad</h2>
          <div className="flex items-center gap-x-3">
            <span className="text-redDB4444 font-medium text-lg font-popins inline-block">
              {" "}
              $120
            </span>
            <span className="text-text_black000000 opacity-50 font-medium text-lg font-popins inline-block line-through">
              $160
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
