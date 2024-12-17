import React, { useState } from "react";
import { BreadCrumb } from "../../components/CommonCoponents/BreadCrumb";
import aboutImg from "../../assets/about.png";
import ProfileCard from "../../components/AboutComponents/ProfileCard";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CustomerService from "../../components/homePage/CustomerService/Index";
const About = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
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
            border: "3px solid gray",
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
            background: "gray",
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

  const reviewsObject = [
    {
      id: 1,
      title: "10.5k",
      summary: "Sallers active our site",
    },
    {
      id: 2,
      title: "33k",
      summary: "Mopnthly Produduct Sale",
    },
    {
      id: 3,
      title: "33k",
      summary: "Customer active in our site",
    },
    {
      id: 4,
      title: "23k",
      summary: "Anual gross sale in our site",
    },
  ];
  return (
    <div className="mb-[140px]">
      <div className="container">
        <BreadCrumb />

        <div className="flex items-center justify-between">
          <div className="w-[40%]">
            <h1 className="text-[54px] font-inter font-semibold text-text_black000000 mb-10">
              Our Story
            </h1>
            <p className="font-popins text-[16px] font-normal text-text_black000000">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
              <span className="mt-10">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </span>
            </p>
          </div>

          <div className="relative right-[-11%]">
            <img src={aboutImg} alt="" />
          </div>
        </div>

        {/* reviews */}
        <div className="flex items-center justify-between mt-[140px]">
          {reviewsObject?.map((item) => (
            <div
              className="flex items-center justify-center group "
              key={item.id}
            >
              <div className="w-[350px] border rounded-lg p-6 shadow-md text-center cursor-pointer group-hover:bg-redDB4444 transition-all">
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-200 mb-4 group-hover:bg-gray-200">
                  {/* Store Icon */}
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-black">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 9.75L5.25 4.5h13.5L21 9.75m-18 0h18m-18 0v9.75a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25V9.75M6.75 14.25h10.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* Stats Text */}
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-white_FFFFFF">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2 group-hover:text-text_whiteFAFAFA">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* reviews */}

        <div className="slider-container mt-[140px]">
          <Slider {...settings}>
            {[...new Array(10)].map((_, index) => (
              <div key={index}>
                <ProfileCard />
              </div>
            ))}
          </Slider>
        </div>

        {/* customer servie */}
        <div className="my-[140px]">
          <CustomerService />
        </div>
      </div>
    </div>
  );
};

export default About;
