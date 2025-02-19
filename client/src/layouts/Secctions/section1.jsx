import { useState, useEffect } from "react";
import "../../Styles/section2_style/sec1.css";
import img1 from "../../assets/cart.png";
import img2 from "../../assets/amex.png";
import img3 from "../../assets/About us.png";

const images = [
  { url: img1, text: "Welcome to Image 1" },
  { url: img2, text: "Discover Image 2" },
  { url: img3, text: "Explore Image 3" },
];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => {
        setShowText(true);
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setShowText(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => {
      setShowText(true);
    }, 2000);
  };

  const prevSlide = () => {
    setShowText(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="slider" style={{ backgroundImage: `url(${images[currentIndex].url})` }}>
        {showText && <div className="text-overlay">{images[currentIndex].text}</div>}
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Section1;
