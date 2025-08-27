import { Helmet } from "react-helmet-async";
import About from "../../components/sections/about/About";
import Business from "../../components/sections/business/Business";
import CompanyInfo from "../../components/sections/companyInfo/CompanyInfo";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import Team from "../../components/sections/team/Team";
import Testimonial from "../../components/sections/testimonial/Testimonial";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "About",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Sensovibe Reliability Pvt. Ltd. | Pune</title>
        <meta
          name="description"
          content="Sensovibe Reliability Pvt. Ltd. in Pune specializes in Predictive Maintenance and Condition Monitoring solutions including Vibration Analysis, Thermography, Shaft Alignment, Dynamic Balancing, and Power Quality Analysis."
        />
        <meta
          name="keywords"
          content="Predictive Maintenance, Condition Monitoring, Vibration Analysis, Thermography, Shaft Alignment, Balancing, Power Quality, Pune, Maharashtra"
        />
        <link rel="canonical" href="https://www.sensovibe.in/about" />
      </Helmet>



      <BreadCrumb data={breadcumb_data} />
      <About />
      <Business />
      <CompanyInfo />
      <Testimonial />
      {/* <Team /> */}
      {/* <NewslatterStyle3 bg_color="bg-light-greem" /> */}
    </>
  );
}
