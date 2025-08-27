// import { Link } from "react-router-dom";

// export default function About() {
//   return (
//     <section className="about-sec sec-ptb">
//       <div className="container">
//         <div className="row">
//           {/* <div className="col-lg-6">
//             <div className="sec-images">
//               <div
//                 className="sec-img-one overflow-hidden wow fadeInLeft"
//                 data-wow-delay="500ms"
//                 data-wow-duration="1500ms"
//               >
//                 <img
//                   src="/images/about/about01.png"
//                   alt="about-img"
//                   className="h-100"
//                 />
//               </div>
//               <div
//                 className="sec-img-two overflow-hidden wow fadeInRight"
//                 data-wow-delay="500ms"
//                 data-wow-duration="1500ms"
//               >
//                 <img
//                   src="/images/about/about02.png"
//                   alt="about-img"
//                   className="h-100"
//                 />
//               </div>
//             </div>
//           </div> */}
//           <div
//             className="col-lg-6 tab-col-gap wow fadeInUp"
//             data-wow-delay="500ms"
//             data-wow-duration="1500ms"
//           >
//             <div className="sec-content">
//               <h6 className="sec-sub-title">About Your Company</h6>
//               <h2 className="sec-title">
//                 We Execute Our ideas From The Start to Finish
//               </h2>
//               <p className="sec-text">
//                 Solve Business Problems And Automate Workflows With Artificial
//                 Work Intelligence-Based Solutions. Unlock The Hidden Power Of
//                 The Data You Already Have And Hand Hampers The Creativity.
//               </p>
//               {/* <ul className="sec-list-item">
//                 <li>
//                   <i className="fa-solid fa-square-check" />
//                   Development of Financial Models
//                 </li>
//                 <li>
//                   <i className="fa-solid fa-square-check" />
//                   Nifty team is a diverse network of consultants
//                 </li>
//                 <li>
//                   <i className="fa-solid fa-square-check" />
//                   Industry professionals with a global mindset
//                 </li>
//               </ul>
//               <div className="sec-btn">
//                 <Link to="/about" className="thm-btn">
//                   <span className="txt">Read More</span>
//                 </Link>
//               </div> */}
//             </div>
//           </div>

//            <div
//             className="col-lg-6 tab-col-gap wow fadeInUp"
//             data-wow-delay="500ms"
//             data-wow-duration="1500ms"
//           >
//              <div className="sec-content">
//               <h6 className="sec-sub-title">About Your Company</h6>
//               {/* <h2 className="sec-title">
//                 We Execute Our ideas From The Start to Finish
//               </h2>
//               <p className="sec-text">
//                 Solve Business Problems And Automate Workflows With Artificial
//                 Work Intelligence-Based Solutions. Unlock The Hidden Power Of
//                 The Data You Already Have And Hand Hampers The Creativity.
//               </p> */}
//               <ul className="sec-list-item">
//                 <li>
//                   <i className="fa-solid fa-square-check" />
//                   Development of Financial Models
//                 </li>
//                 <li>
//                   <i className="fa-solid fa-square-check" />
//                   Nifty team is a diverse network of consultants
//                 </li>
//                 <li>
//                   <i className="fa-solid fa-square-check" />
//                   Industry professionals with a global mindset
//                 </li>
//               </ul>
//               <div className="sec-btn">
//                 <Link to="/about" className="thm-btn">
//                   <span className="txt">Read More</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-sec sec-ptb">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div
            className="col-lg-6 tab-col-gap wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">About Us</h6>
              <h2 className="sec-title">
                Delivering Reliability Through Predictive Maintenance
              </h2>
              <p className="sec-text">
                At <b> Sensovibe Reliability Pvt. Ltd.</b>, we specialize in
                Predictive Maintenance and Condition Monitoring solutions that
                help industries reduce downtime, extend equipment life, and cut
                operational costs. Our certified experts use advanced
                technologies like Vibration Analysis, Thermography, Balancing,
                and Power Quality Analysis to ensure efficiency, reliability,
                and safety across industries.
              </p>
              <div className="sec-btn">
                <Link to="/about" className="thm-btn">
                  <span className="txt">Read More</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="col-lg-6 tab-col-gap wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">Our Expertise</h6>
              <ul className="sec-list-item">
                <li>
                  <i className="fa-solid fa-square-check" />
                  Vibration Analysis & In-Situ Dynamic Balancing
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Laser Shaft Alignment & Infrared Thermography
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Ultrasound Monitoring & Motor Current Analysis
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Lube Oil & Wear Debris Analysis
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Non-Destructive Testing (NDT) & Borescope Inspection
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Power Quality Analysis
                </li>
              </ul>
              <div className="sec-btn">
                <Link to="/services" className="thm-btn">
                  <span className="txt">Explore Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
