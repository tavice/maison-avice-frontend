import React, { useState } from "react";
import "./styles.css";

import logoImageMonogram from "../../assets/images/monogram_poppy_transparent.png";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  return (
    <header className="header">
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
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>

            <li>
              <a
                href="mailto:thomasavice@maisonavice.com?subject=Contact%20from%20Our%20Website&body=Hello,%20I%20would%20like%20to%20inquire%20about..."
                className="contact-button"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
