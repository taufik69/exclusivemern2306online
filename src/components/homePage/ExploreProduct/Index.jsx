import React from "react";
import ProductCommonLayout from "../../CommonCoponents/ProductCommonLayout";
import ProductCard from "../../CommonCoponents/ProductCard";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";
const ExploreProduct = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  return (
    <div className="container">
      <div className="flex flex-col items-center border-b-[1px] border-b-black_363738 mb-10">
        <div>
          <ProductCommonLayout
            heading="Our Products"
            description="Explore Our Products"
            isArrowsTrue={true}
            ProductCard={ProductCard}
            componentData={data?.products}
            partialItemShow={5}
            rows={2}
            isLoading={isLoading}
          />
        </div>
        <div className="pb-20 ">
          <button className="px-[48px] py-4 bg-redDB4444 rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
