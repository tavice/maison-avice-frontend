import React, { useState } from "react";
import "./styles.css";
import logoImage from "../../assets/images/poppy_transparent.png";
import logoImageMonogram from "../../assets/images/monogram_poppy_transparent.png";
import poppyBackground from "../../assets/images/poppy_pattern_transparent.png";

//import PoppyAnimation from "../PoppyAnimation";
import PoppyAnimation from "../PoppyAnimation";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${poppyBackground})` }}>
      <div className="nav-banner" >
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
              <button className="contact-button">Contact Us</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="logo-and-image" >
        
    
          <PoppyAnimation />
     

        <div className="company-name">
          <div className="company-name-h1">
            <h1>MAISON AVICE</h1>
          </div>
          <div className="company-name-h2">
            <h2>INTERIOR DESIGN</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
