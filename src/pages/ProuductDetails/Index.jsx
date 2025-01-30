import React from "react";
import { BreadCrumb } from "../../components/CommonCoponents/BreadCrumb";
import ImageGallery from "../../components/CommonCoponents/ProductDetails/ImageGallery";

import SpecificProductDetails from "../../components/CommonCoponents/ProductDetails/SpecificProductDetails.jsx";
import { useParams } from "react-router-dom";
import ProductDetailsSkeletion from "../../components/Skeletion/ProductDetailsSkeletion.jsx";
import Heading from "../../components/CommonCoponents/Heading.jsx";
import Slider from "react-slick";

import {
  useGetSingleProductQuery,
  useGetSingleCategoryQuery,
} from "../../Features/Api/exlusiveApi.js";

import ProductCard from "../../components/CommonCoponents/ProductCard.jsx";
const ProductDetails = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetSingleProductQuery(params?.id);
  /**
   * todo : useGetProductByCategoryQuery query invoked
   */

  const categoryData = useGetSingleCategoryQuery(data?.data?.category?._id);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
  };

  return (
    <div className="py-20">
      <div className="container">
        {isLoading ? (
          <ProductDetailsSkeletion />
        ) : (
          <div>
            <BreadCrumb />

            <div className="grid grid-cols-2 gap-x-[70px]">
              <div className="">
                <ImageGallery image={data?.data?.image} />
              </div>
              <div className="w-full ">
                <SpecificProductDetails ProductDetailsData={data?.data} />
              </div>
            </div>
          </div>
        )}

        {/* related product */}
        <div className="py-[140px]">
          <Heading title="Related Item" description={false} />
          <Slider {...settings}>
            {categoryData?.data?.data?.product.map((item) => (
              <div className="mx-4">
                <ProductCard itemData={item} />
              </div>
            ))}
          </Slider>
        </div>
        {/* related product */}
      </div>
    </div>
  );
};

export default ProductDetails;
