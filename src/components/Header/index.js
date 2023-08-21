import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Maison Avice</div>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
