import React from 'react';
import './styles.css';
import contactImage from '../../assets/images/contact-image.jpeg'; 

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-grid">
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" name="phone" id="phone" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" rows="5" required></textarea>
            </div>
            <div className="form-field">
              <button type="submit" className="cta-button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
