export default function TestimonialCard({ data }) {
  return (
    <div className="single-testimonial">
      <div className="feedback">
        <div className="rating">
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
        </div>
        <p className="comment">
          “I requested a UI update gig and received job excellent from Maria!
          talented young UI/UX designer who will beat your expectation! and
          quick feedback. Will definitely work with again!”
        </p>
      </div>
      <div className="customar-info">
        <div className="customar-img">
          <img src={data.imgUrl} alt="testimonial" />
        </div>
        <div className="customar-title">
          <h5>{data.name}</h5>
          <span className="title">{data.title}</span>
        </div>
      </div>
      <div className="com-logo">
        <i className="flaticon-ux" />
      </div>
    </div>
  );
}
