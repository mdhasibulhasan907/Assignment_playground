
import Image from "../../assets/section3_cards/img-1.jpg"
import "../../Styles/section2_style/sec-card1.css"
const S_card1 = (props) => {
  return (
    <div className="card">
    <div className="card-image">
      <img src={Image} alt="Colorful Cutlery" />
      <div className="date-box">
        <span className="date">{props.date}</span>
        <span className="month">{props.month}</span>
      </div>
    </div>
    <div className="card-content">
      <h2 className="card-title">
        {props.title}
      </h2>
      <p className="card-text">
        {props.des}
      </p>
      <a href="#" className="read-more">{props.more}</a>
    </div>
  </div>
  )
}

export default S_card1;