import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">
        At Apple, we are committed to bringing the best personal computing experience to students, educators, creative
        professionals, and consumers around the world through our innovative hardware, software, and internet offerings.
      </p>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to design and create the best personal computing devices and experiences for people around the
          globe.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          Apple is dedicated to the empowerment of man—to making personal computing accessible to each individual so as
          to help change the way we think, work, learn, and communicate.
        </p>
      </div>
    </div>
  );
};

export default About;
