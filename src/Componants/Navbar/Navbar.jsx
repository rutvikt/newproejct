import React, { useState } from 'react';
import './Navbar.scss'; // Import SCSS for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // FUNCTION TO HANDLE SMOOTH SCROLLING
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };
  

  return (
    <nav className="navbar">
      {/* Left side - Logo */}
      <div className="navbar__logo">
        <span>NIKUNJ</span> {/* Replace with your logo or font logo */}
      </div>

      {/* Right side - Navigation Links */}
      <div className={`navbar__links ${isMenuOpen ? 'active' : ''}`}>
      <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
<a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
<a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }}>Blog</a>
<a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>

      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <div className={`hamburger__line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`hamburger__line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`hamburger__line ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;