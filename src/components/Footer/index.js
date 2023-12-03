import React from 'react';
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>123 Maison Avice Street, San Francisco, CA, USA</p>
        <p>Email: info@maisonavice.com</p>
        <p>Phone: +000 000 0000</p>
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <a href="#facebook">Facebook</a>
        <a href="https://www.linkedin.com/in/anna-wender/">Linkedin</a>
        <a href="#instagram">Instagram</a>
       
      </div>
      <div className="footer-newsletter">
        <h4>Subscribe to Our Newsletter</h4>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      
      <div className="footer-note">
        <p>Discover the perfect blend of traditional building methods and cutting-edge technology with Maison Avice, a leader in luxury sustainable architecture.</p>
      </div>
    </footer>
  );
}

export default Footer;
