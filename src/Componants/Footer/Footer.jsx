import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section 1: Branding */}
      <div className="footer__section footer__first">
        <h2 className="footer__heading">FUTURE TECHNOLOGY EVANGELISM</h2>
        <div className="footer__logo">
          {/* Add your logo component or img tag here */}
          <span>NIKUNJ</span>
        </div>
      </div>

      {/* Section 2: Contact */}
      <div className="footer__section">
        <h3 className="footer__subheading">CONTACT</h3>
        <p className="footer__text">Name</p>
        <p className="footer__text">Number</p>
        <p className="footer__text">Email</p>
        <p className="footer__text">Address</p>
      </div>

      {/* Section 3: Legal */}
      <div className="footer__section">
        <h3 className="footer__subheading">LEGAL</h3>
        <p className="footer__text">All rights reserved</p>
        <p className="footer__text">©2024</p>
      
      </div>

      {/* Section 4: More */}
      <div className="footer__section">
        <h3 className="footer__subheading">MORE</h3>
        <p className="footer__text">ABOUT</p>
        <p className="footer__text">BLOG</p>
        <p className="footer__text">KEYNOTES</p>
        <p className="footer__text">WORKSHOP</p>
      </div>
    </footer>
  );
};

export default Footer;
