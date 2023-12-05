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
          <a href="/" className="link-logo-image-banner">
            <img src={logoImageMonogram} alt="Maison Avice" />
            <h2 className="company-name-h2-banner">MAISON AVICE</h2>
          </a>
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
              <a href="/blog">Blog</a>
            </li>

            <li>
              <a
                href="https://calendly.com/maisonavice/book-your-discovery-call"
                className="contact-button"
                target="_blank"
                rel="noreferrer"
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
