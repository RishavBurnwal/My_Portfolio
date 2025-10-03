import React from 'react';

import "../Styles/Navbar.css"
// Navbar Component
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="logo">
            Portfolio
          </a>
    
          <ul className="nav-links">
            <li><a href="#about"><big>About</big></a></li>
            <li><a href="#contact"><big>Contact</big></a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar