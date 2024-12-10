import React from "react";

const useCalculateDiscount = (orginalPrice = 0, discountPercentange = 0) => {
  const discountAmount = (orginalPrice * discountPercentange) / 100;
  const discountPrice = orginalPrice - discountAmount;
  return discountPrice;
};

export default useCalculateDiscount;
