import CountUp from "react-countup";

const counter_info = [
  {
    icon: "flaticon-management",
    count: 200,
    type: "+",
    text: "Team Member",
  },
  {
    icon: "flaticon-completed-task",
    count: 25,
    type: "K+",
    text: "Complete Project",
  },
  {
    icon: "flaticon-handshake",
    count: 18,
    type: "K+",
    text: "Client Review",
  },
];

export default function CompanyInfo() {
  return (
    <section className="company-qinfo-sec">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="company-qinfo-raaper bg-green d-lg-flex">
              {/* counter info part start */}
              {counter_info.map((item, i) => (
                <div
                  key={i}
                  className="single-info flex-lg-fill d-flex align-items-center justify-content-center"
                >
                  <div className="info-icon">
                    <i className={item.icon} />
                  </div>
                  <div className="info">
                    <h2>
                      <CountUp
                        className="countfect"
                        end={item.count}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                      {item.type}
                    </h2>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
              {/* counter info part end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
