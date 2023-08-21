import React, { useState } from "react";
import "./styles.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Maison Avice</div>
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
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
