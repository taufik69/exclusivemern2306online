import React from "react";
import Heading from "../../CommonCoponents/Heading";
import Timer from "../../CommonCoponents/Timer";
import Count from "../../../pages/Count";
import ProductCard from "../../CommonCoponents/ProductCard";
const FlashSale = () => {
  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={"Today's"} description={"Flash Sales"} />
          <Timer />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
