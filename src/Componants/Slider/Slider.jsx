import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const slides = [
  {
    id: 1,
    leftContent: (
      <div className="slide__left-content">
        {/* <h2>Slide 1 Left</h2> */}
        <p>This is the left content of the first slide.
        This is the left content of the first slide.
        This is the left content of the first slide.
        This is the left content of the first slide.
        This is the left content of the first slide.
        This is the left content of the first slide.
        This is the left content of the first slide.

        </p>
      </div>
    ),
    rightContent: (
      <div className="slide__right-content">
        {/* <h2>Slide 1 Right</h2> */}
        <p>
          In a world where technologies such as artificial intelligence are
          seamlessly integrated into everyday life, our grandchildren will grow
          up as "robotic natives." They will be able to interact with and
          control a variety of intelligent machines. This freedom of choice
          will shape their lives in the future more than we can imagine - even
          more than the Internet has changed our lives.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    leftContent: (
      <div className="slide__left-content">
        {/* <h2>Slide 2 Left</h2> */}
        <p>
          This is the left content of the second slide.
          This is the left content of the second slide.
          This is the left content of the second slide.
          This is the left content of the second slide.
          This is the left content of the second slide.
          This is the left content of the second slide.
          This is the left content of the second slide.

        </p>
      </div>
    ),
    rightContent: (
      <div className="slide__right-content">
        {/* <h2>Slide 2 Right</h2> */}
        <p>
          In a world where technologies such as artificial intelligence are
          seamlessly integrated into everyday life, our grandchildren will grow
          up as "robotic natives." They will be able to interact with and
          control a variety of intelligent machines. This freedom of choice
          will shape their lives in the future more than we can imagine - even
          more than the Internet has changed our lives.
        </p>
      </div>
    ),
  },
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="slide__wrapper">
              <div className="slide__left">{slide.leftContent}</div>
              <div className="slide__right">{slide.rightContent}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
