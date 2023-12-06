import React from "react";
import "./styles.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons from Font Awesome

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p className="number-font" >2465 Chestnut Street, San Francisco, CA, USA</p>
        <p className="number-font">Email: thomasavice@maisonavice.com</p>
        <p className="number-font">Phone: +415-407-3693</p>
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/anna-wender/" className="linkedinIcon">
          <FaLinkedin />
        </a>{" "}
        {/* LinkedIn icon */}
        <a href="#instagram" className="instaIcon">
          <FaInstagram />
        </a>{" "}
        {/* Instagram icon */}
      </div>
      <div className="footer-newsletter">
        <h4>Subscribe to Our Newsletter</h4>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-note">
        <p>
          Discover the perfect blend of traditional building methods and
          cutting-edge technology with Maison Avice, a leader in luxury
          sustainable architecture.
        </p>
        <p className="number-font">
          &#169; 2023 Maison Avice. All rights reserved.
        </p>{" "}
        {/* Copyright notice */}
      </div>
    </footer>
  );
}

export default Footer;
