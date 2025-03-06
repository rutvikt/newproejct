import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partners.scss";
import logo1 from "../../assets/Logos/AB.jpg";
import logo2 from "../../assets/Logos/BASF.jpg";
import logo3 from "../../assets/Logos/Bayer.jpg";
import logo4 from "../../assets/Logos/BMW.jpg";
import logo5 from "../../assets/Logos/BR.jpg";
import logo6 from "../../assets/Logos/FESTO.jpg";
import logo7 from "../../assets/Logos/IEEE.jpg";
import logo8 from "../../assets/Logos/Microsoft.jpg";
import logo9 from "../../assets/Logos/Midea.jpg";
import logo10 from "../../assets/Logos/Porsche.jpg";
import logo11 from "../../assets/Logos/Samsung.jpg";
import logo12 from "../../assets/Logos/Sanofi.jpg";
import logo13 from "../../assets/Logos/SAP.jpg";
import logo14 from "../../assets/Logos/SZ.jpg";
import logo15 from "../../assets/Logos/UN.jpg";

const Partners = () => {
  // Group logos into slides with 5 logos each
  const slides = [
    {
      id: 1,
      logos: [logo1, logo2, logo3, logo4, logo5],
    },
    {
      id: 2,
      logos: [logo6, logo7, logo8, logo9, logo10],
    },
    {
      id: 3,
      logos: [logo11, logo12, logo13, logo14, logo15],
    },
  ];

  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    fade : true,
    cssEase : "linear",
    speed: 1000, // Transition speed
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-play slides
    autoplaySpeed: 3000, // Auto-play interval
    arrows: false, // Hide navigation arrows
    responsive: [
      {
        breakpoint: 768, // Tablet view
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 480, // Mobile view
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="partners">
      <h2 className="partners__heading">
        Trusted by Global Innovators
      </h2>
      <p className="partners__subheading">
        These industry leaders trust my expertise and vision for the future.
      </p>
      <div className="partners__slider">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="partners__slide">
              <div className="partners__logos">
                {slide.logos.map((logo, index) => (
                  <div key={index} className="partners__logo">
                    <img src={logo} alt={`Partner Logo ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;