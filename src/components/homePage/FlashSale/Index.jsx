import React, { useEffect } from "react";
import ProductCommonLayout from "../../CommonCoponents/ProductCommonLayout";
import ProductCard from "../../CommonCoponents/ProductCard";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";
const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className="container">
      <div className="flex flex-col items-center border-b-[1px] border-b-black_363738 mb-10">
        <ProductCommonLayout
          ProductCard={ProductCard}
          timeStamp={true}
          timeofOffer={1}
          isArrowsTrue={true}
          heading="Today's"
          description="Flash Sales"
          partialItemShow={6}
          componentData={data?.products}
          isLoading={isLoading}
        />
        <div className="pb-20 ">
          <button className="px-[48px] py-4 bg-redDB4444 rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
