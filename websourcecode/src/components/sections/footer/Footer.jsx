import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-sec">
      <div className="section-overlay sec-pt">
        <div className="container">
          <div className="row">
            {/* Logo & About */}
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <div className="footer-widget-logo">
                  <Link to="/">
                    <img src="/images/logo/sensoLogo.png" alt="site-logo" />
                  </Link>
                </div>
                <div className="footer-widget-content">
                  <p className="ft-text">
                    Mauris ut enim sit amet lacus ornare ullamcor. Praesent
                    placerat nequ puru rhoncu tincidunt odio ultrices. Sed odio
                    feugiat feugiat felis.
                  </p>
                  <div className="footer-social">
                    <div className="footer-social-icon d-flex">
                      {/* <Link to="https://facebook.com" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter" />
                      </Link> */}
                      <Link to="https://www.linkedin.com/company/sensovibe-reliability-pvt-ltd/" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link to="https://www.instagram.com/sensovibe_reliability?igsh=cjhueGxsODZmZzYx" target="_blank">
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="col-sm-6 offset-xl-1 col-xl-2">
              <div className="footer-widget">
                <h4 className="footer-widget-title tx-white">Our Services</h4>
                <div className="footer-widget-content">
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to="#">Vibration Analysis</Link>
                      </li>
                      <li>
                        <Link to="#">In-Situ Dynamic Balancing</Link>
                      </li>
                      <li>
                        <Link to="#">Laser Shaft Alignment</Link>
                      </li>
                      <li>
                        <Link to="#">Infrared Thermography</Link>
                      </li>
                      <li>
                        <Link to="#">Ultrasound Monitoring</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-sm-6 offset-xl-1 col-xl-2">
              <div className="footer-widget pages-links">
                <h4 className="footer-widget-title tx-white">Useful Links</h4>
                <div className="footer-widget-content">
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      {/* <li>
                        <Link to="/careers">Careers</Link>
                      </li> */}
                      {/* <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms">Terms & Conditions</Link>
                      </li> */}

                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms & Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <h4 className="footer-widget-title tx-white">Company Info</h4>
                <div className="footer-widget-content">
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <strong>Sensovibe Reliability Pvt. Ltd.</strong>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        C- 819 gera imperium gateway, CTC no 2656, next to hotel kalasagar. Nashik phata metro station,Village-Bhosari,  Tal- Haveli,  PCMC, pune 411034 Maharashtra
                      </li>
                      <li>
                        <i className="fas fa-phone"></i>
                        +91 98765 43210
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:info@sensovibe.com">info@sensovibe.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Company Info */}
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <h4 className="footer-widget-title tx-white">Company Info</h4>
                <div className="footer-widget-content">
                  <div className="footer-contact-box">
                    <p>
                      <strong>Sensovibe Reliability Pvt. Ltd.</strong>
                    </p>

                    <div className="footer-contact-item d-flex mb-2">
                      <i className="fas fa-map-marker-alt me-2 mt-1"></i>
                      <span>
                        C-819 Gera Imperium Gateway, CTC No 2656, Next to Hotel Kalasagar,
                        Nashik Phata Metro Station, Village-Bhosari, Tal-Haveli, PCMC,
                        Pune 411034, Maharashtra
                      </span>
                    </div>

                    <div className="footer-contact-item d-flex mb-2">
                      <i className="fas fa-phone me-2 mt-1"></i>
                      <span>+91 7588029980</span>
                    </div>

                    <div className="footer-contact-item d-flex">
                      <i className="fas fa-envelope me-2 mt-1"></i>
                      <a href="mailto:info@sensovibe.com">admin@sensovibe.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Divider */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sx-12 p-0">
              <hr className="footer-hr" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container">
          <div className="row footer-copyright">
            <div className="col">
              <div className="footer-copyright-text text-center">
                <p className="mb-0">
                  © Sensovibe Reliability Pvt. 2025. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
