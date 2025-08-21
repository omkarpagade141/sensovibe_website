import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutStyle2 from "./components/layout/LayoutStyle2";
import ScrollTopOnLoad from "./components/ScrollTopOnLoad";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import ContactPage from "./pages/Contact/ContactPage";
import FaqsPage from "./pages/Faq/FaqsPage";
import HomePageStyle2 from "./pages/Home/HomePageStyle2";
import PricePlanPage from "./pages/PricePlan/PricePlanPage";
import ProjectDetailsPage from "./pages/ProjectDetails/ProjectDetailsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ServicesPage from "./pages/Service/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetails/ServiceDetailsPage";
import TeamPage from "./pages/Team/TeamPage";
import TeamDetailsPage from "./pages/TeamDetails/TeamDetailsPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import RedDotCursor from "./components/ui/pointerdot/RedDotCursor";
import GlowCursor from "./components/ui/pointerdot/GlowCursor";
import MagneticCursor from "./components/ui/pointerdot/MagneticCursor";
import Login from "./components/admin/Login";
import AdminPanel from "./components/admin/AdminPanel";
import PrivateRoute from "./components/config/PrivateRoute";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axiosClient from "./components/config/axiosClient";

const App = () => {

  const [companyProfile, setCOmpanyProfile] = useState(null);

  const fetchSettings = async () => {
    try {
      const response = await axiosClient.get("/public/fetchsettings");
      if (response.status === 200) {
        console.log(response.data);
        
         setCOmpanyProfile(response.data) 
         
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }

  }


  useEffect(() => {
    fetchSettings();
  }, [])






  return (
    <BrowserRouter>
      <RedDotCursor />
      {/* <GlowCursor /> */}
      {/* <MagneticCursor /> */}
      <ScrollTopOnLoad />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<LayoutStyle2 companyProfile={companyProfile} />}>
          <Route index element={<HomePageStyle2 />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team-details" element={<TeamDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/price-plan" element={<PricePlanPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/adminpanel" element={<AdminPanel companyProfile={companyProfile} />} />
        </Route>

        {/* <Route path="/home-2" element={<LayoutStyle2 companyProfile={companyProfile} />}>
          <Route index element={<HomePageStyle2 />} />
        </Route> */}
        {/* <Route path="/home-3" element={<LayoutStyle3 companyProfile={companyProfile} />}>
          <Route index element={<HomePageStyle3 />} />
        </Route> */}
      </Routes>



      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
};

export default App;
