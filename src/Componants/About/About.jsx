import React from 'react';
import './About.scss';
import image4 from '../../assets/Images/image4.jpg';

const About = () => {
  return (
    <>
      {/* About Section */}
      <div className="about" id="about">
        {/* Left Side - Image */}
        <div className="about__image">
          <img src={image4} alt="About Me" />
        </div>

        {/* Right Side - Intro */}
        <div className="about__intro">
          <h2>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Download CV Button */}
          <a href="/path-to-cv.pdf" download className="about__download-btn">
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* Separate Additional Section */}
      <div className="about__additional-section">
        {/* Left Side */}
        <div className="about__additional-left">
          <h3>MY KEYNOTES</h3>
          <button className="about__additional-btn">BOOK A KEYNOTE</button>
        </div>

        {/* Right Side */}
        <div className="about__additional-right">
          <h2>My lectures and keynotes</h2>
          <p>
          I am often asked to speak at conferences, corporate events, universities and colleges. I speak about topics such as robotics, AI, innovation, futurology and technological trends. I really enjoy sharing my knowledge and exchanging ideas with other people about how innovations and technological advances will shape our world. Some people call me an "evangelist". I see myself more as an "innomancer". I don't just want to talk about innovations, I want to conjure them up. With my lectures, I want to inspire people not only to accept and drive technological progress, but to actually push it forward.          </p>
        </div>
      </div>
    </>
  );
};

export default About;
