// import ProgressBar from "@ramonak/react-progress-bar";

// const progress_data = [
//   {
//     title: "Productivity",
//     completed: 80,
//   },
//   {
//     title: "Digital Marketing",
//     completed: 75,
//   },
//   {
//     title: "Technology",
//     completed: 90,
//   },
// ];

// export default function Business() {
//   return (
//     <section className="business-sec sec-ptb bg-light-greem">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="sec-content h-100 d-flex justify-content-center flex-column">
//               <h6 className="sec-sub-title">Buisness Process</h6>
//               <h2 className="sec-title">
//                 Easy Way Build Success your Buisness Pla
//               </h2>
//               <p className="sec-text">
//                 Solve Business Problems And Automate Workflows With Artificial
//                 Intelligence-Based Solutions. Unlock The Hidden Power Of The
//                 Data You Already Have And Hand.
//               </p>
//               {/* progressbar part start */}{" "}
//               {progress_data?.map((item, i) => (
//                 <div key={i} className="ab-progress">
//                   <h2 className="progress-title">{item.title}</h2>
//                   <ProgressBar
//                     className="ui-progressbar"
//                     completed={item.completed}
//                     animateOnRender={true}
//                     height="8px"
//                     baseBgColor="#a1cebe"
//                     bgColor="var(--thm-teal)"
//                     labelClassName="ui-progressbar-label"
//                   />
//                 </div>
//               ))}
//               {/* progressbar part end */}
//             </div>
//           </div>
//           <div className="col-lg-6 tab-col-gap">
//             <div
//               className="sec-images wow fadeInRight"
//               data-wow-delay="500ms"
//               data-wow-duration="1500ms"
//             >
//               <div className="sec-img-one">
//                 <img
//                   src="/images/about/about03.png"
//                   alt="about-img"
//                   className="h-100"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import ProgressBar from "@ramonak/react-progress-bar";

const progress_data = [
  {
    title: "Reliability Improvement",
    completed: 95,
  },
  {
    title: "Cost Reduction",
    completed: 90,
  },
  {
    title: "Safety & Efficiency",
    completed: 92,
  },
];

export default function AboutUs() {
  return (
    <section className="about-sec sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          {/* Left content */}
          <div className="col-lg-7">
            <div className="sec-content h-100 d-flex justify-content-center flex-column">
              {/* <h6 className="sec-sub-title">About Us</h6> */}
              <h4>
                Delivering Reliability Through Predictive Maintenance
              </h4>
              <p className="sec-text">
                At <b>Sensovibe Reliability Pvt. Ltd.</b>, we specialize in
                Predictive Maintenance and Condition Monitoring solutions that
                help industries reduce downtime, extend equipment life, and cut
                operational costs. Our certified experts use advanced
                technologies like Vibration Analysis, Thermography, Balancing,
                and Power Quality Analysis to ensure maximum efficiency and
                safety.
              </p>
              {/* progressbar part start */}
              {progress_data?.map((item, i) => (
                <div key={i} className="ab-progress mb-3">
                  <h6 className="progress-title mb-1">{item.title}</h6>
                  <ProgressBar
                    className="ui-progressbar"
                    completed={item.completed}
                    animateOnRender={true}
                    height="8px"
                    baseBgColor="#d6d3ce" // light grey from brand palette
                    bgColor="var(--thm-teal)" // green/teal brand color
                    labelClassName="ui-progressbar-label"
                  />
                </div>
              ))}
              {/* progressbar part end */}
            </div>
          </div>

          {/* Right image */}
          <div className="col-lg-5 tab-col-gap">
            <div
              className="sec-images wow fadeInRight"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="">
                <img
                  src="/images/about/custom/aboutUs1.png"
                  alt="MES About Us"
                  className="w-100 rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
