import { Link } from "react-router-dom";

export default function HeroStyle2() {
  return (
    <section className="hero-sec2 bg-light hero-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content hero-content-style1 h-100 d-flex justify-content-center flex-column">
              <span className="hero-tagline">
                Predictive Condition Maintenance Monitoring Services Team
              </span>
              <h1 className="hero-title tx-white">
                Predictive Maintenance and Condition Monitoring Service for Your Industry
              </h1>
              <p>
                Our diverse expertise in Predictive Maintenance and Condition Monitoring helps industries reduce downtime, improve reliability, and cut maintenance costs through advanced techniques such as Vibration Analysis, Thermography, Dynamic Balancing, and Power Quality Analysis.
              </p>
              <div className="hero-btn-area">
                <Link to="/about" className="thm-btn">
                  <span className="txt">Read More</span>
                </Link>
                <Link to="/contact" className="thm-btn thm-btn-style2 btm-rm">
                  <span className="txt">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-images hero-style2">
              <div className="hero-feature-img feature-one br-style1 br-style2">
                <img
                  className="br-style1 br-style2 h-100"
                  src="/images/hero/sensoHeroSectionImg.jpg"
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
