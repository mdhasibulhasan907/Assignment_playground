import "../../Styles/section2_style/sec5.css";

// import backgroundImage from './assets/section5_img/h1-back-img-1.jpg';
import backgroundImage from "../../assets/section5_img/h1-back-img-1.jpg"
const Section5 = () => {
  return (
    <div
      className="newsletter-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamically set background
    >
      <div className="form-box">
        <h2>NEWSLETTER</h2>
        <p>Risus viverra adipiscing at in tellus.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Section5