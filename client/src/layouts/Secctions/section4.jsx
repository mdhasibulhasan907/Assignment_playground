import "../../Styles/section2_style/sec4.css";
const testimonials = [
  {
    id: 1,
    name: "PAWEL, CHICAGO",
    review: "Donec pretium vulputate sapien nec sagittis aliquam hac habitass platea dictumst quisque sagitt.",
    rating: 5,
  },
  {
    id: 2,
    name: "JASMINE, CALIFORNIA",
    review: "Facilisis magna etiam tempor orci eu lobortis elementum nibh. Id donec ultrices tincidunt aru.",
    rating: 5,
  },
  {
    id: 3,
    name: "LOLA, LONDON",
    review: "Massa eget egestas purus viverra a in nisl nisi. Ut tortor pretium viverra suspendise potenti tempor orc ed.",
    rating: 5,
  },
];

const Section4 = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">HAPPY CUSTOMERS</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="stars">
              {"★".repeat(testimonial.rating)}
            </div>
            <p className="review">{testimonial.review}</p>
            <p className="customer-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4