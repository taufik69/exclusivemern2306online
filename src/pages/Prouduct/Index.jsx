import React, { useState } from "react";
import ProductLeft from "../../components/ProductPageComponent/ProductLeft";
import { BreadCrumb } from "../../components/CommonCoponents/BreadCrumb";
import ProductRight from "../../components/ProductPageComponent/ProductRight";
import { useGetAllCategoryQuery } from "../../Features/Api/exlusiveApi";
const ProductPage = () => {
  const [categoryid, setCategoryid] = useState("");

  const { data, error, isLoading } = useGetAllCategoryQuery();
  const handleCategory = (id) => {
    setCategoryid(id);
  };

  return (
    <div className="container py-20">
      <BreadCrumb />
      <div className="flex justify-between">
        <ProductLeft
          categoryData={data?.data}
          isLoading={isLoading}
          error={error}
          handleCategory={handleCategory}
        />
        <ProductRight categorywiseData={categoryid} />
      </div>
    </div>
  );
};

export default ProductPage;
