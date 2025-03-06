import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider3.scss";

const reviews = [
    {
      id: 1,
      text: "This service was amazing! The team was professional, responsive, and truly understood our requirements. The end result exceeded our expectations, and I would highly recommend them to anyone looking for top-notch service.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "A wonderful experience from start to finish! The team paid attention to every detail, ensuring the final product was not only visually appealing but also highly functional. I am thoroughly impressed with their work ethic.",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "Absolutely fantastic! From the initial consultation to the final delivery, the process was seamless. They went above and beyond to make sure everything was perfect, and I will definitely be using their services again in the future.",
      author: "Michael Johnson",
    },
    {
      id: 4,
      text: "Very professional and top-quality work. Their approach to problem-solving is commendable, and they always ensure timely delivery without compromising on quality. I have worked with many service providers, but this team stands out!",
      author: "Emily Brown",
    },
    {
      id: 5,
      text: "Great attention to detail and a truly customer-centric approach. They listened to my concerns, provided insightful suggestions, and delivered a final product that was beyond my expectations. Highly recommended!",
      author: "David Wilson",
    },
    {
      id: 6,
      text: "Fast, efficient, and worth every penny! Their expertise is evident in the quality of their work. I appreciate their dedication to excellence and their willingness to go the extra mile to ensure client satisfaction.",
      author: "Sophia Martinez",
    },
  ];
  
const slides = [
  reviews.slice(0, 3), // First slide (3 reviews)
  reviews.slice(3, 6), // Second slide (3 reviews)
];

const Slider3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase : "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="slider3-container">
      <h2 className="slider3-title">What Others Say</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider3-slide">
            <div className="review-grid">
              {slide.map((review) => (
                <div key={review.id} className="review-card">
                  <p className="review-text">"{review.text}"</p>
                  <p className="review-author">- {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider3;
