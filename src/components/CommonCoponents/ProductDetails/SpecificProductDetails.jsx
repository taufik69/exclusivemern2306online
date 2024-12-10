import React from "react";
import Star from "../../CommonCoponents/Star";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import useCalculateDiscount from "../../../hooks/useCalculateDiscount";
const SpecificProductDetails = ({ ProductDetailsData }) => {
  const {
    title,
    description,
    rating,
    price,
    stock,
    warrantyInformation,
    returnPolicy,
    discountPercentage,

    reviews,
  } = ProductDetailsData;

  const sizes = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];
  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-semibold font-inter text-text_black000000">
          {title || "Havic HV G-92 Gamepad"}
        </h2>
        <div className="flex items-start gap-x-3 mt-4">
          <Star rating={rating} />
          <span className="inline-block text-text_black000000 font-normal font-popins text-md opacity-50">
            {reviews?.length} Review
          </span>
          <span className="inline-block  text-text_black000000 opacity-50">
            {" "}
            |{" "}
          </span>
          <span className="inline-block font-normal font-popins text-md text-button00FF66">
            {stock} Stock
          </span>
        </div>
        <p className="text-2xl font-normal font-inter text-text_black000000 mt-4">
          $ {Math.round(useCalculateDiscount(price, discountPercentage)) || 0}
        </p>

        <h4 className="text-md font-normal font-inter text-text_black000000 mt-4 w-[60%] border-b-[2px] border-b-gray-300 pb-10">
          {description || "Missing"}
        </h4>
      </div>
      {/* card and size component */}
      <div className="mt-7">
        <div className="flex items-center gap-x-3">
          <h2 className="text-[20px]  font-normal font-inter text-text_black000000">
            Colours:
          </h2>
          <div className="border-2 border-text_black000000 rounded-full  w-[24px] h-[24px] flex items-center justify-center ">
            <span className="inline-block w-4 h-4 rounded-full bg-[#A0BCE0] "></span>
          </div>
          <div className="border-2 border-text_black000000 rounded-full  w-[24px] h-[24px] flex items-center justify-center ">
            <span className="inline-block w-4 h-4 rounded-full bg-red-500 "></span>
          </div>
        </div>

        {/* size */}
        <div className="flex items-center gap-x-3 mt-[30px]">
          <h2 className="text-[20px]  font-normal font-inter text-text_black000000">
            Size:
          </h2>

          <div className="flex items-center gap-x-3 ">
            {sizes.map((size) => (
              <div className="border-2 border-x-gray-300 rounded  w-[36px] h-[36px] flex items-center justify-center ">
                <span
                  className="inline-block text-[14px] font-bold  font-popins "
                  key={size.id}
                >
                  {size.size}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        <div className="mt-10 flex items-center  gap-x-4">
          <div className="flex items-center">
            <span className="px-4 py-2 border-2 border-gray-300 rounded-l-lg text-[20px] font-popins text-text_black000000 cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF">
              -
            </span>
            <span className="px-6 py-2 border-2 border-gray-300  text-[20px] font-popins text-text_black000000 border-l-0 cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF">
              2
            </span>
            <span className="px-4 py-2 border-2 border-gray-300 rounded-r-lg text-[20px] font-popins text-text_black000000 border-l-0 cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF">
              +
            </span>
          </div>

          <button className="py-[12px] px-[48px] bg-redDB4444 rounded-[5px] border-none font-popins font-medium text-white_FFFFFF text-[16px]">
            Buy Now
          </button>

          <div className="border-2 border-x-gray-300 rounded  py-1 px-3 cursor-pointer hover:bg-red-500 hover:text-white_FFFFFF ">
            <span className="inline-block text-3xl font-bold  font-popins  w-full h-full ">
              <IoIosHeartEmpty />
            </span>
          </div>
        </div>
        {/* button */}

        {/* condition  */}
        <div className="mt-10">
          <div className="flex items-center gap-x-3 border border-gray-300 w-[55%] px-14 py-4">
            <span className="text-4xl">
              <TbTruckDelivery />
            </span>
            <div>
              <h4 className="text-[16px]  font-medium font-popins text-text_black000000">
                Free Delivery
              </h4>
              <p className="text-[12px]  font-medium font-popins text-text_black000000">
                {warrantyInformation}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-3 border border-gray-300 w-[55%] px-14 py-4">
            <span className="text-4xl">
              <TbTruckDelivery />
            </span>
            <div>
              <h4 className="text-[16px]  font-medium font-popins text-text_black000000">
                Return Delivery
              </h4>
              <p className="text-[12px]  font-medium font-popins text-text_black000000">
                {returnPolicy}
              </p>
            </div>
          </div>
        </div>
        {/* condition  */}
      </div>
    </div>
  );
};

export default SpecificProductDetails;
