import { useState } from 'react';
import "../Styles/ImageGallery.css"

import image1 from "../assets/section9_img/h1-img-10.jpg"
import image2 from "../assets/section9_img/h1-img-11.jpg"
import image3 from "../assets/section9_img/h1-img-12.jpg"
import image4 from "../assets/section9_img/h1-img-13.jpg"
import image5 from "../assets/section9_img/h1-img-14.jpg"
import image6 from "../assets/section9_img/h1-img-15.jpg"
import image7 from "../assets/section9_img/h1-img-16.jpg"
import image8 from "../assets/section9_img/h1-img-17.jpg"
import image9 from "../assets/section9_img/h1-img-18.jpg"
import image10 from "../assets/section9_img/h1-img-19.jpg"
import image11 from "../assets/section9_img/h1-img-20.jpg"
import image12 from "../assets/section9_img/h1-img-21.jpg"

const ImageGallery = () => { 
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace these with your actual image URLs
  const images = [
    image1,image2, image3 , image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12
  ];

  const openSlider = (index) => {
    setCurrentIndex(index);
    setSliderOpen(true);
  };

  const closeSlider = () => {
    setSliderOpen(false);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openSlider(index)}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Slider Modal */}
      {sliderOpen && (
        <div className="slider-overlay">
          <div className="slider-content">
            <button className="close-button" onClick={closeSlider}>×</button>
            <button className="nav-button prev-button" onClick={goToPrevious}>‹</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="nav-button next-button" onClick={goToNext}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;