import ServiceCard from "../../ui/cards/ServiceCard";

export default function ServiceStyle2({ data }) {
  return (
    <section className="service-sec2 sec-ptb">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center mb-5">
              <h6 className="sec-sub-title">What We Do</h6>
              <h2 className="sec-title">Services That Help You Grow</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* service part start */}
          {data?.map((item, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <ServiceCard data={item} index={i} />
            </div>
          ))}
          {/* service part end */}
        </div>
      </div>
    </section>
  );
}
