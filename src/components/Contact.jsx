import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subheading">Apple Retail Stores, India</p>
      <div className="contact-location">
        <h1>Delhi</h1>
        <p>
          New Delhi, Saket <br />
          F-11, Select CITYWALK <br />
          District Centre, Saket <br />
          New Delhi, Delhi, 110017 <br />
          000800 040 4503
        </p>
      </div>
      <div className="contact-location">
        <h1>Maharashtra</h1>
        <p>
          Mumbai, BKC <br />
          G1-G2, Jio World Drive <br />
          Bandra Kurla Complex <br />
          Mumbai, Maharashtra, 400051 <br />
          000800 040 4504
        </p>
      </div>
    </div>
  );
};

export default Contact;
