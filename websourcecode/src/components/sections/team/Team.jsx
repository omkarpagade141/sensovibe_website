import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { teams } from "../../../data/site";
import TeamCard from "../../ui/cards/TeamCard";

export default function Team() {
  return (
    <section className="team-sec sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-content">
              <h6 className="sec-sub-title">Our Team Members</h6>
              <h2 className="sec-title">
                Building A Smarter future Through IT
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* team slider card part start */}
            <div className="team-slider position-relative pt-5">
              <Swiper
                spaceBetween={30}
                navigation={{
                  nextEl: ".owl-next",
                  prevEl: ".owl-prev",
                }}
                modules={[Navigation]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
              >
                {teams?.slice(0, 6).map((item, i) => (
                  <SwiperSlide key={i}>
                    <TeamCard data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="owl-nav">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="owl-prev"
                >
                  <i className="flaticon-left-arrow" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="owl-next"
                >
                  <i className="flaticon-right-arrow" />
                </a>
              </div>
            </div>
            {/* team slider card part end */}
          </div>
        </div>
      </div>
    </section>
  );
}
