import { Helmet } from "react-helmet-async";
import Newslatter from "../../components/sections/newsletter/Newsletter";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import Pricing from "../../components/sections/pricing/Pricing";
import ServiceStyle2 from "../../components/sections/service/ServiceStyle2";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";
import { services_2 } from "../../data/site";
const breadcumb_data = {
  title: "Our Services",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/services",
    },
  ],
};

export default function ServicesPage() {
  const services = services_2;
  return (
    <>
      <Helmet>
        <title>Our Services | Sensovibe Reliability Pvt. Ltd. | Pune</title>
        <meta
          name="description"
          content="Sensovibe Reliability Pvt. Ltd. in Pune specializes in Predictive Maintenance and Condition Monitoring solutions including Vibration Analysis, Thermography, Shaft Alignment, Dynamic Balancing, and Power Quality Analysis."
        />
        <meta
          name="keywords"
          content="Predictive Maintenance, Condition Monitoring, Vibration Analysis, Thermography, Shaft Alignment, Balancing, Power Quality, Pune, Maharashtra"
        />
        <link rel="canonical" href="https://www.sensovibe.in/services" />
      </Helmet>




      <BreadCrumb data={breadcumb_data} />
      <ServiceStyle2 data={services} />
      {/* <Newslatter /> */}
      {/* <Pricing /> */}
      {/* <NewslatterStyle3 /> */}
    </>
  );
}
