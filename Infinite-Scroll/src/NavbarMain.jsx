import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaBars, FaTimes, FaWhatsapp, FaDownload } from "react-icons/fa";
import resume from "./assets/Deepak_Kumar_Resume.pdf";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">
            Deepak<span className="dot">.</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-links" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMenu}>
              Contact
            </a>
          </li>

          {/* Mobile Only Actions */}
          <div className="mobile-actions">
            <a
              href="https://wa.me/9162070486"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn whatsapp-btn"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href={resume}
              download="Deepak_Kumar_Resume.pdf"
              className="action-btn resume-btn"
            >
              Resume <FaDownload className="download-icon" />
            </a>
          </div>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a
            href="https://wa.me/9162070486"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn whatsapp"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href={resume}
            download="Deepak_Kumar_Resume.pdf"
            className="btn-resume"
          >
            Resume <FaDownload className="btn-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
