import  { useState } from 'react';

import  pic from "../assets/section2_cards/Shop-Single-gallery-img-05.jpg"

import "../Styles/section2_style/Card1.css"

const Card1 = () => {
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
        // <div
        //   className="card"
        //   onMouseEnter={() => setIsHovered(true)}
        //   onMouseLeave={() => setIsHovered(false)}
        // >
        //   <div className="card-content">
        //     <h2>BEDS</h2>
        //     <h3>Premium Bed Wooden</h3>
        //     {isHovered ? (
        //       <img src={pic} alt="Hovered Bed" />
        //     ) : (
        //       <img src={pic} alt="Premium Bed Wooden" />
        //     )}
        //     <p>$320.00</p>
        //     <button>ADD TO CART</button>
        //   </div>
        // </div>
      )
   }


export default Card1;