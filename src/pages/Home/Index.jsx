import React from "react";
import Header from "../../components/RootLayout/Header/Index";
import Navbar from "../../components/RootLayout/Navbar/Index";
import Banner from "../../components/homePage/Banner/Index";
import FlashSale from "../../components/homePage/FlashSale/Index";
import Count from "../Count";
const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
    </div>
  );
};

export default Homepage;
