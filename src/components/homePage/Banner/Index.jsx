import React, { useState } from "react";
import { category } from "../../../../Data/data";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { LiaAngleRightSolid } from "react-icons/lia";
import BannerSkeleton from "../../Skeletion/bannerSkeletion.jsx";
import {
  useGetAllBannerQuery,
  useGetAllCategoryQuery,
} from "../../../Features/Api/exlusiveApi.js";
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
  const { data, error, isLoading } = useGetAllBannerQuery();
  const [openDropdown, setOpenDropdown] = useState(null);
  const allCategory = useGetAllCategoryQuery();

  // handle dropdown funtion
  const handledropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div>
      <div className="container">
        <div className="flex  justify-between">
          <div className="w-[23%]  pt-10 border-r-[1.5px] border-r-text_black7D8184">
            <ul>
              {allCategory?.data?.data?.map((item) => (
                <div key={item._id}>
                  <div className="flex items-center justify-between hover:bg-gray-200 transition-all cursor-pointer">
                    <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer">
                      {item.name}
                    </li>
                    {item.subCategory.length > 0 && (
                      <div>
                        <span
                          className="pr-10 text-xl text-text_black000000"
                          onClick={() => handledropdown(item._id)}
                        >
                          <LiaAngleRightSolid />
                        </span>
                      </div>
                    )}
                  </div>

                  {openDropdown === item._id &&
                    item.subCategory.map((subItem) => (
                      <div
                        key={subItem._id}
                        className="flex flex-col hover:bg-blue-200 transition-all bg-gray-300 my-2"
                      >
                        <li className="font-popins hover:px-5 transition-all text-md text-text_black000000 font-normal py-3 cursor-pointer pl-5">
                          {subItem.name}
                        </li>
                      </div>
                    ))}
                </div>
              ))}
            </ul>
          </div>
          <div className="w-[77%] h-[440px] pl-[45px] mt-10">
            <div className="slider-container">
              {isLoading ? (
                <BannerSkeleton />
              ) : (
                <Slider {...settings}>
                  {data?.data.map((banner, index) => (
                    <div key={index}>
                      <img
                        src={banner.image}
                        alt={banner.image}
                        className="w-full h-[440px] object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
