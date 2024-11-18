import React, { useRef } from "react";
import Heading from "../CommonCoponents/Heading.jsx";
import Timer from "../CommonCoponents/Timer";
import Slider from "react-slick";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import ProductSkeleton from "../../helpers/ProductSeleton.jsx";
const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  heading = "today's",
  description = "flash sale",
  partialItemShow = 4,
  componentData = [],
  isLoading = false,
  viewButton = false,
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow,
    slidesToScroll: partialItemShow - 1,
    // autoplay: true,
  };

  const next = () => {
    sliderRef.current.slickPrev();
  };

  const prev = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="mt-[140px] mb-[60px] ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-end gap-x-[87px]">
            <Heading title={heading} description={description} />
            {timeStamp && <Timer timeofOffer={timeofOffer} />}
          </div>
          {isArrowsTrue && (
            <div className="flex items-center gap-x-4">
              <h1
                onClick={next}
                className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoMdArrowBack />
                </span>
              </h1>
              <h1
                onClick={prev}
                className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoArrowForward />
                </span>
              </h1>
            </div>
          )}

          {viewButton && (
            <div className="bg-redDB4444  text-md font-popins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
              View All
            </div>
          )}
        </div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(6)]?.map((_, index) => (
                  <div
                    className={partialItemShow > 4 ? "pr-8" : "pr-6"}
                    key={index}
                  >
                    <ProductSkeleton />
                  </div>
                ))
              : componentData?.map((item, index) => (
                  <div
                    className={partialItemShow > 4 ? "pr-8" : "pr-6"}
                    key={item.key}
                  >
                    <ProductCard itemData={item ? item : {}} />
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
