import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import image from "../../assets/products/p1.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import useCalculateDiscount from "../../hooks/useCalculateDiscount";
import Star from "./Star";
import { Link, useNavigate } from "react-router-dom";
const ProductCard = ({ itemData }) => {
  return (
    <div className="mt-10 ">
      <Link to={`/productdetails/${itemData.id}`}>
        <div className="w-full">
          <div className="bg-white_F5F5F5 pb-[55px] px-3 pt-4 rounded relative group cursor-pointer">
            <div className="flex items-center justify-between">
              {itemData.discountPercentage && (
                <span className="px-3 py-2 rounded bg-redDB4444 inline-block font-popins text-sm text-white_FFFFFF font-normal">
                  -{itemData ? itemData.discountPercentage : 0}%
                </span>
              )}
              <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white_FFFFFF cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF  text-xl">
                <IoHeartOutline />
              </span>
            </div>
            <div className="flex justify-between cursor-pointer">
              <div className="w-[172] h-[152px] flex-1 ">
                <img
                  src={itemData ? itemData.thumbnail : image}
                  alt={image}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white_FFFFFF cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF  text-xl mt-2">
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            <div className="opacity-0 absolute left-0 bottom-0 font-popins font-medium text-lg cursor-pointer  flex justify-center items-center w-full h-12 bg-text_black000000 text-white_FFFFFF group-hover:opacity-100">
              <h3>Add To Cart</h3>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-4">
            <h2 className="text-lg font-popins font-medium cursor-pointer w-full truncate ">
              {itemData ? itemData.title : "HAVIT HV-G92 Gamepad"}
            </h2>
            <div className="flex items-center gap-x-3 cursor-pointer">
              <span className="text-redDB4444 font-medium text-lg font-popins inline-block">
                $
                {useCalculateDiscount(
                  itemData?.price,
                  itemData?.discountPercentage
                ).toFixed(2)}
              </span>
              <span className="text-text_black000000 opacity-50 font-medium text-lg font-popins inline-block line-through">
                ${itemData ? itemData.price.toFixed(2) : 0}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-1 cursor-pointer">
                <Star rating={itemData && itemData.rating} />

                <h3 className="text-text_black000000 opacity-50 font-medium text-lg font-popins ">{`(${itemData?.reviews?.length})`}</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
