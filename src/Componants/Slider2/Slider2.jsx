import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider2.scss";
import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";
import image6 from "../../assets/Images/image6.jpg";
import image7 from "../../assets/Images/image7.jpg";
import image8 from "../../assets/Images/image8.jpg";
import image9 from "../../assets/Images/image9.jpg";
import image10 from "../../assets/Images/image10.jpg";

const Slider2 = () => {
  // Group images into slides with 4 images each
  const slides = [
    {
      id: 1,
      images: [image4, image5, image6, image7]
    },
    {
      id: 2,
      images: [image8, image9, image10, image4]
    },
    {
      id: 3,
      images: [image5, image6, image7, image8]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    fade: true,
    cssEase : "linear",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="slider2-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slider2-slide">
            <div className="image-grid">
              {slide.images.map((img, index) => (
                <div key={index} className="image-container">
                  <img src={img} alt={`Slide ${slide.id} - ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;