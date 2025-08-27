// import { Link } from "react-router-dom";

// export default function ServiceCard({ data, index }) {
//   return (
//     <div
//       className="single-service-style2 wow fadeInUp"
//       data-wow-delay={`${index * 300}ms`}
//       data-wow-duration="1500ms"
//     >
//       <div className="img-box">
//         <img src={data.imgUrl} alt="service" className="h-h-100" />
//       </div>
//       <div className="content-box d-flex">
//         <div className="single-service-content">
//           <h5>
//             <Link to="/service-details">{data.title}</Link>
//           </h5>
//           <p>{data.brief}</p>
//           {/* <Link to="/service-details" className="read-more">
//             Read More <i className="flaticon-right-arrow" />
//           </Link> */}
//         </div>
//         <div className="single-service-icon">
//           <i className={data.icon} />
//         </div>
//       </div>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function ServiceCard({ data, index }) {
  return (
    <div
      className="single-service-style2 wow fadeInUp"
      data-wow-delay={`${index * 300}ms`}
      data-wow-duration="1500ms"
    >
      <div className="img-box">
        {/* Mobile: Slider */}
        <div className="d-block d-lg-none">
          <Swiper
            modules={[Navigation, Autoplay]} // ✅ Added here
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {data.images?.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`service-${i}`} className="w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Slider with navigation + autoplay */}
        <div className="d-none d-lg-block">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {data.images?.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`service-${i}`} className="w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="content-box d-flex">
        <div className="single-service-content">
          <h5>
            <Link to="/service-details">{data.title}</Link>
          </h5>
          <p>{data.brief}</p>
        </div>
        <div className="single-service-icon">
          <i className={data.icon} />
        </div>
      </div>
    </div>
  );
}
