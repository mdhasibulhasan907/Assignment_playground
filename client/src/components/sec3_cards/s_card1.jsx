
import Image from "../../assets/section3_cards/img-1.jpg"
import "../../Styles/section2_style/sec-card1.css"
const S_card1 = () => {
  return (
    <div className="card">
    <div className="card-image">
      <img src={Image} alt="Colorful Cutlery" />
      <div className="date-box">
        <span className="date">5</span>
        <span className="month">MAY</span>
      </div>
    </div>
    <div className="card-content">
      <h2 className="card-title">
        Fun colourful cutlery for toddlers to more enjoy dining
      </h2>
      <p className="card-text">
        Pretium fusce id velit ut tortor. Euismod quis viverra nibh
        cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas
        ipsum. Sed risus ultricies tristique nulla aliquet.
      </p>
      <a href="#" className="read-more">READ MORE</a>
    </div>
  </div>
  )
}

export default S_card1;