import React from "react";
import { Outlet } from "react-router-dom";
import ScrollTop from "../ScrollTop";
import Footer from "../sections/footer/Footer";
import Header2 from "../sections/header/HeaderStyle2";
import { Helmet } from "react-helmet-async";

const LayoutStyle2 = ({ companyProfile }) => {
  return (
    <>
      <Helmet>
        <title>Predictive Maintenance & Condition Monitoring | Sensovibe Reliability Pvt. Ltd. | Pune</title>
        <meta
          name="description"
          content="Sensovibe Reliability Pvt. Ltd. in Pune specializes in Predictive Maintenance and Condition Monitoring solutions including Vibration Analysis, Thermography, Shaft Alignment, Dynamic Balancing, and Power Quality Analysis."
        />
        <meta
          name="keywords"
          content="Predictive Maintenance, Condition Monitoring, Vibration Analysis, Thermography, Shaft Alignment, Balancing, Power Quality, Pune, Maharashtra"
        />
        <link rel="canonical" href="https://www.sensovibe.in/" />
      </Helmet>






      <Header2 companyProfile={companyProfile} />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default LayoutStyle2;
