import React from "react";
import { BreadCrumb } from "../../components/CommonCoponents/BreadCrumb";
import ImageGallery from "../../components/CommonCoponents/ProductDetails/ImageGallery";
import { useGetSingleProductQuery } from "../../Features/Api/ProductApi.js";
import SpecificProductDetails from "../../components/CommonCoponents/ProductDetails/SpecificProductDetails.jsx";
const ProductDetails = () => {
  const { data, error, isLoading } = useGetSingleProductQuery(parseInt(2));
  console.log(data);

  return (
    <div className="py-20">
      <div className="container">
        <BreadCrumb />

        <div className="grid grid-cols-2 gap-x-5">
          <div className="">
            <ImageGallery image={data?.images} />
          </div>
          <div className="w-full ">
            <SpecificProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
