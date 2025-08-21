import { Link } from "react-router-dom";

export default function AboutStyle2() {
  return (
    <section className="about-sec about-sec2 sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-images sec-img-style" style={{
              marginTop:"100px"
            }}> 
              <div
                className="sec-img-one wow fadeInLeft"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <img src="/images/about/custom/aboutUs1.png" alt="about-img" />
              </div>
              <div
                className="sec-img-info d-flex flex-column justify-content-center align-items-center wow fadeInRight"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <span className="year-experience">5+</span>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 tab-col-gap wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">About Us</h6>
              <h2 className="sec-title">
                We Execute Our ideas From The Start to Finish
              </h2>
              <p className="sec-text">
                Delivering Reliability Through Predictive Maintenance and Condition Monitoring Services.
                We help industries unlock the hidden potential of their assets by reducing downtime, optimizing performance, and extending equipment life.
              </p>
              <ul className="sec-list-item">
                <li>
                  <i className="fa-solid fa-square-check" />
                  Vibration Analysis & Dynamic Balancing
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Motor Current Analysis (MCSA)
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Power Quality Analysis
                </li>
              </ul>
              <div className="sec-btn">
                <Link to="/about" className="thm-btn">
                  <span className="txt">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
