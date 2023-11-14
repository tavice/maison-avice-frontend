import React, { useState } from "react";
import "./styles.css";

import logoImageMonogram from "../../assets/images/monogram_poppy_transparent.png";


function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    window.location.href = "thomasavice@maisonavice.com?subject=Inquiry from the Website&body=Hi there,";
  };
  



  return (
    <header
      className="header"
     
    >
      <div className="nav-banner">
        <div className="logo-image-banner">
          <img src={logoImageMonogram} alt="Maison Avice" />
          <h1 className="company-name-h1-banner">MAISON AVICE</h1>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? "X" : "☰"}
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>

            <li>
            <button className="contact-button" onClick={handleContactClick}>Contact Us</button>
            </li>
          </ul>
        </nav>
      </div>
    
    </header>
  );
}

export default Header;
