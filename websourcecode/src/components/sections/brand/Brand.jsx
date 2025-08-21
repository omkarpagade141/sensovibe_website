import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
  "/images/brand/brand1.png",
  "/images/brand/brand2.png",
  "/images/brand/brand3.png",
  "/images/brand/brand4.png",
  "/images/brand/brand5.png",
  "/images/brand/brand1.png",
  "/images/brand/brand2.png",
  "/images/brand/brand3.png",
  "/images/brand/brand4.png",
  "/images/brand/brand5.png",
];

export default function Brand() {
  return (
    <section className="brand-sec sec-ptb bg-green">
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 offset-lg-4 col-lg-4">
            <div className="sec-content text-center mb-5">
              <h5 className="brand-text">
                We have more than <span>270+</span> Happy Customers with
                satisfaction
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="brand-slider owl-carousel owl-theme">
              <Swiper
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
              >
                {brands?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item d-flex justify-content-center">
                      <img src={item} alt="brand" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
