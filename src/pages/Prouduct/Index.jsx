import React from "react";
import ProductLeft from "../../components/ProductPageComponent/ProductLeft";
import { BreadCrumb } from "../../components/CommonCoponents/BreadCrumb";
import ProductRight from "../../components/ProductPageComponent/ProductRight";
import { useGetAllProductCategoryListQuery } from "../../Features/Api/ProductApi";
const ProductPage = () => {
  const { data, error, isLoading } = useGetAllProductCategoryListQuery();

  return (
    <div className="container py-20">
      <BreadCrumb />
      <div className="flex justify-between">
        <ProductLeft categoryData={data} isLoading={isLoading} error={error} />
        <ProductRight />
      </div>
    </div>
  );
};

export default ProductPage;
