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
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // autoplay: true,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="mt-[140px] mb-[60px]">
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
        </div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {[...new Array(10)].map((_, index) => (
              <div className="pr-6">
                <ProductCard />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
