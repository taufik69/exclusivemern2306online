import React from "react";
import Header from "./Header/Index";
import Navbar from "./Navbar/Index";
import Footer from "./Footer/Index";
import { Outlet } from "react-router-dom";
export const RootMainLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
