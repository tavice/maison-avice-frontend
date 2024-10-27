import React, { useState } from "react";
import "./styles.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons from Font Awesome

const Footer = (props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${props.URL}/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

   

      if (response.ok) {
        setMessage("Thank you for subscribing!");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

 

  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Contact Us</h4>
        {/* <p className="number-font">123 main street, San Francisco, CA, USA</p> */}
        <p className="number-font">Email: info@maisonavice.com</p>
        {/* <p className="number-font">Phone: +000-000-0000</p> */}
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <a href="maisonavice.com" className="linkedinIcon">
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      <div className="footer-note">
        <p>
          Discover the perfect blend of traditional building methods and
          cutting-edge technology with Maison Avice, a leader in luxury
          sustainable architecture.
        </p>
        <p className="number-font">
          &#169; 2024 Maison Avice. All rights reserved.
        </p>{" "}
        {/* Copyright notice */}
      </div>
    </footer>
  );
};

export default Footer;
