import  { useState } from 'react';

import  pic from "../assets/section2_cards/product-011-img.jpg"

import "../Styles/section2_style/Card1.css"

const Card3 = () => {
    const [hover, setHover] = useState(false);
  return (
    <div
          className={`card ${hover ? "hover" : ""}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={pic}
            alt="Product"
            className="card-image"
          />
          <div className="card-content">
            <h2>BEDS</h2>
            <h3>Premium Bed Wooden</h3>
            <p>{hover ? "Add to Cart" : "$20.00"}</p>
          </div>
        </div>
  )
}

export default Card3