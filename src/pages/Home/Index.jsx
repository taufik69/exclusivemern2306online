import React from "react";
import Header from "../../components/RootLayout/Header/Index";
import Navbar from "../../components/RootLayout/Navbar/Index";
import Banner from "../../components/homePage/Banner/Index";
import FlashSale from "../../components/homePage/FlashSale/Index";
import Category from "../../components/homePage/Category/Index";
import BestSellilng from "../../components/homePage/BestSelling/Index";
import Experience from "../../components/homePage/Experience/Index";
const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
      <BestSellilng />
      <Experience />
    </div>
  );
};

export default Homepage;
