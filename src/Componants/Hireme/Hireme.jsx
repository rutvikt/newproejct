import React from 'react';
import './Hireme.scss';

const Hireme = () => {
  return (
    <div className="hireme" id = "contact">
      {/* Left Section - Upcoming Shows */}
      <div className="hireme-left">
        <h2 className="hireme-left__heading">My Upcoming Shows</h2>
        <ul className="hireme-left__shows">
          <li className="hireme-left__show">Show 1: Future Tech Summit - October 2023</li>
          <li className="hireme-left__show">Show 2: Innovation Expo - November 2023</li>
          <li className="hireme-left__show">Show 3: Global AI Conference - December 2023</li>
          <li className="hireme-left__show">Show 4: Tech Leadership Forum - January 2024</li>
        </ul>
      </div>

      {/* Right Section - Book Me */}
      <div className="hireme-right">
        <h2 className="hireme-right__heading">
          Would You Like to Book Me for Your Next Event?
        </h2>
        <p className="hireme-right__text">
          My approach of “Innovating for Impact” has already motivated and encouraged tens of 
          thousands of people around the world to embrace change and think ahead. I would be 
          happy to come to your next event to inspire your audience to think more deeply about 
          the future, new technologies, and their impact on society!
        </p>
        <button className="hireme-right__button">Book Here</button>
      </div>
    </div>
  );
};

export default Hireme;
