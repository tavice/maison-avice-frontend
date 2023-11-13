import React, { useState } from "react";
import "./styles.css";
import logoImage from "../../assets/images/poppy_transparent.png";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-image">
        <img
          src={logoImage}
          alt="Maison Avice"
        />
      </div>

      <div className="company-name">
        <div className="company-name-h1">
          <h1>MAISON AVICE</h1>
        </div>
        <div className="company-name-h2">
          <h2>INTERIOR DESIGN</h2>
        </div>
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
            <button className="contact-button">Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
