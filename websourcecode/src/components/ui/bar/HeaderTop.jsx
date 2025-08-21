import { Link } from "react-router-dom";

export default function HeaderTop({ companyProfile }) {
  return (
    <div className="main-header-one__top">
      <div className="main-header-one__top-pattern" />
      <div className="main-header-one__top-inner">
        <div className="main-header-one__top-left">
          {/* <div className="header-contact-info">
            <ul>
              {companyProfile && (
                <>
                  <li>
                    <div className="icon-box">
                      <i className="flaticon-maps-and-flags" />
                    </div>
                    <p>{`${companyProfile.companyLocalAddress}, ${companyProfile.companyCityStatePin}`}</p>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="flaticon-gmail-logo" />
                    </div>
                    <p>
                      <Link to={`mailto:${companyProfile.companyEmail}`}>
                        {companyProfile.companyEmail}
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="flaticon-call" />
                    </div>
                    <p>
                      <Link to={`tel:${companyProfile.companyContact}`}>
                        {companyProfile.companyContact}
                      </Link>
                    </p>
                  </li>
                </>
              )}
            </ul>
          </div> */}
        </div>
        <div className="main-header-one__top-right">
          <div className="inner">
            <div className="header-social-links">
              <ul>
                {/* <li>
                  <Link to="/">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li> */}
                <li>
                  <Link to="https://www.linkedin.com/company/sensovibe-reliability-pvt-ltd/" target="_blank">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                </li>
                {/* <li>
                  <Link to="/">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </li> */}
                <li>
                  <Link to="https://www.instagram.com/sensovibe_reliability?igsh=cjhueGxsODZmZzYx" target="_blank">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
