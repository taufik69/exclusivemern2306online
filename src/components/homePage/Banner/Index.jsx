import React, { useState } from "react";
import { category } from "../../../../Data/data";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { LiaAngleRightSolid } from "react-icons/lia";
import Bannerimg from "../../../assets/banner/banner.jpg";
const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ffff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
  };

  return (
    <div>
      <div className="container">
        <div className="flex  justify-between">
          <div className="w-[23%]  pt-10 border-r-[1.5px] border-r-text_black7D8184">
            <ul>
              {category?.map((item) => (
                <div className="flex items-center justify-between hover:bg-gray-200 transition-all">
                  <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer">
                    {item.category}
                  </li>
                  {item.subCategory && (
                    <span className="pr-10 text-xl text-text_black000000">
                      <LiaAngleRightSolid />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="w-[77%] h-[344px] pl-[45px] mt-10">
            <div className="slider-container">
              <Slider {...settings}>
                {[...new Array(10)].map((_, index) => (
                  <div key={index}>
                    <img
                      src={Bannerimg}
                      alt={Bannerimg}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
