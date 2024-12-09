import React from "react";
import { BreadCrumb } from "../CommonCoponents/BreadCrumb";
import {
  useGetAllProductQuery,
  useGetProductByCategoryQuery,
} from "../../Features/Api/ProductApi";
import ProductCard from "../../components/CommonCoponents/ProductCard";
import Slider from "react-slick";
import Heading from "../CommonCoponents/Heading";
const WishList = () => {
  const { data, isLoading, error } = useGetAllProductQuery();
  const justForYou = useGetProductByCategoryQuery("smartphones");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
  };

  return (
    <div className="mt-[80px] mb-[140px]">
      <div className="container">
        <BreadCrumb />

        <div className="flex items-center justify-between">
          <h3 className="text-[20px] font-popins font-medium text-text_black000000">
            Wishlist (4)
          </h3>

          <button className="px-[48px] py-[16px] border border-gray-200 text-[16px] font-popins font-medium text-text_black000000 rounded">
            Move All To Cart
          </button>
        </div>

        {/* wish list slider */}
        <div className="mt-[60px]">
          <Slider {...settings}>
            {data?.products.map((item) => (
              <div className="px-4">
                <ProductCard itemData={item} />
              </div>
            ))}
          </Slider>
        </div>
        {/* wish list slider */}
        {/* Just for you */}
        <div className="mt-[96px]">
          <div className="flex items-center justify-between">
            <Heading title="Just For You" />

            <button className="px-[28px] py-[16px] border border-gray-200 text-[16px] font-popins font-medium text-text_black000000 rounded">
              See All
            </button>
          </div>
        </div>

        <div className="mt-[60px]">
          <Slider {...settings}>
            {justForYou?.data?.products.map((item) => (
              <div className="px-4">
                <ProductCard itemData={item} />
              </div>
            ))}
          </Slider>
        </div>
        {/* Just for you */}
      </div>
    </div>
  );
};

export default WishList;
