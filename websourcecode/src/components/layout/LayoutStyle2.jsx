import React from "react";
import { Outlet } from "react-router-dom";
import ScrollTop from "../ScrollTop";
import Footer from "../sections/footer/Footer";
import Header2 from "../sections/header/HeaderStyle2";
import Header from "../sections/header/Header";

const LayoutStyle2 = ({companyProfile}) => {
  return (
    <>
      <Header2 companyProfile={companyProfile} />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default LayoutStyle2;
