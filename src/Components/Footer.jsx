import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; 
import "../Styles/Footer.css"; // CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a 
          href="https://github.com/RishavBurnwal" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/rishav-burnwal-549055293/" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://www.instagram.com/rishavburnwal.5/" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;