import React from "react";
import ProductCommonLayout from "../../CommonCoponents/ProductCommonLayout";
import ProductCard from "../../CommonCoponents/ProductCard";
import { useGetAllBestSellingProudctQuery } from "../../../Features/Api/exlusiveApi";
const BestSellilng = () => {
  const { data, error, isLoading } = useGetAllBestSellingProudctQuery();
  console.log(data?.data);
  const bestSellilngProduct = data?.data?.map((item) => {
    return item.product;
  });

  return (
    <div className="container border-t-[1.5px] border-gray-300">
      <ProductCommonLayout
        heading="This Month's"
        description="Best Selling Products"
        ProductCard={ProductCard}
        partialItemShow={6}
        componentData={bestSellilngProduct}
        isLoading={isLoading}
        viewButton={true}
      />
    </div>
  );
};

export default BestSellilng;
