import React from 'react';
import './Banner.scss'; // Import SCSS for styling
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons

const Banner = () => {
  return (
    <div className="banner" id = "home">
      {/* Banner Section */}
      <div className="banner__background">
        {/* Left Side - Text and Icons */}
        <div className="banner__left">
          <div className="banner__text">
            <p>Speaker & Author</p>
            <p>Futurologist & Techno-Optimist</p>
            <p>Innomancer & Professor</p>
            <p>Father & Geek</p>
          </div>
          <div className="banner__icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon" />
            </a>
          </div>
          {/* Your Name */}
          <div className="banner__name">
            NIKUNJ KOLADIA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;