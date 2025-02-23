import  { useState, useEffect } from "react";
import "../../Styles/section2_style/sec7.css";

import img1 from "../../assets/section7_img/product-category-01.png"
import img2 from "../../assets/section7_img/Productt-Category-02.png"; 
import img3 from "../../assets/section7_img/Product-Category-img-03.png"; 
import img4 from "../../assets/section7_img/product-category-04.png"; 
import img5 from "../../assets/section7_img/product-category-05.png"; 
import img6 from "../../assets/section7_img/product-category-06.png"; 
import img7 from "../../assets/section7_img/Product-Category-Img-07.png"; 
import img8 from "../../assets/section7_img/product-category-08.png"; 

const images = [
  { src: img1, label: "Toys" },
  { src: img2, label: "Other" },
  { src: img3, label: "Specials" },
  { src: img4, label: "Carriage" },
  { src: img5, label: "New" },
  { src: img6, label: "Bottles" },
  { src: img7, label: "Cribs" },
  { src: img8, label: "Beds" }
];

const Section7 = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>&lt;</button>
      <div className="slider">
        {images.map((img, i) => {
          let position = (i - index + images.length) % images.length;
          return (
            <div key={i} className={`slide ${position === 0 ? "active" : ""}`}>
              <img src={img.src} alt={img.label} className="circle-image" />
              <p>{img.label}</p>
            </div>
          );
        })}
      </div>
      <button className="arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Section7