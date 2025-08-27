import { Helmet } from "react-helmet-async";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";
import ContactMap from "../../components/ui/contact/ContactMap";
import ContactForm from "../../components/ui/form/ContactForm";

const breadcumb_data = {
  title: "Contact Us",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>

      <Helmet>
        <title>Contact Us | Sensovibe Reliability Pvt. Ltd. | Pune</title>
        <meta
          name="description"
          content="Sensovibe Reliability Pvt. Ltd. in Pune specializes in Predictive Maintenance and Condition Monitoring solutions including Vibration Analysis, Thermography, Shaft Alignment, Dynamic Balancing, and Power Quality Analysis."
        />
        <meta
          name="keywords"
          content="Predictive Maintenance, Condition Monitoring, Vibration Analysis, Thermography, Shaft Alignment, Balancing, Power Quality, Pune, Maharashtra"
        />
        <link rel="canonical" href="https://www.sensovibe.in/contact" />
      </Helmet>





      <BreadCrumb data={breadcumb_data} />
      <ContactForm />
      <ContactMap />

      {/* <NewslatterStyle3 /> */}

    </>
  );
}
