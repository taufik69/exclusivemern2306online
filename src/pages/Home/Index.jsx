import React from "react";
import Banner from "../../components/homePage/Banner/Index";
import FlashSale from "../../components/homePage/FlashSale/Index";
import Category from "../../components/homePage/Category/Index";
import BestSellilng from "../../components/homePage/BestSelling/Index";
import Experience from "../../components/homePage/Experience/Index";
import ExploreProduct from "../../components/homePage/ExploreProduct/Index";
import NewArrival from "../../components/homePage/newArrival/Index";
import CustomerService from "../../components/homePage/CustomerService/Index";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Category />
      <BestSellilng />
      <Experience timeDuration={5} />
      <ExploreProduct />
      <NewArrival />
      <CustomerService />
    </div>
  );
};

export default Homepage;
