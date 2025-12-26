import React, { useState, useEffect } from "react";
import "./navbar.css";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import resume from "./assets/Deepak_Kumar_Resume.pdf";
import profileImg from "./assets/profile.jpg";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    closeMenu();
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

        {/* Mobile Toggle Button */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Mobile Sidebar Overlay */}
        <div
          className={`sidebar-overlay ${isOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Sidebar */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {/* Header: Profile & Close */}
          <div className="sidebar-header">
            <div className="sidebar-profile">
              <div className="profile-img-container">
                <img
                  src={profileImg}
                  alt="Deepak"
                  className="sidebar-profile-img"
                />
                <span className="online-status"></span>
              </div>
              <div className="sidebar-profile-info">
                <h3>Deepak Kumar</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="close-icon" onClick={closeMenu}>
              <FaTimes />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="sidebar-nav-list">
            <div
              className={`nav-item ${
                activeLink === "home" ? "active-item" : ""
              }`}
            >
              <a
                href="#home"
                className="nav-links"
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </a>
            </div>
            <div
              className={`nav-item ${
                activeLink === "projects" ? "active-item" : ""
              }`}
            >
              <a
                href="#projects"
                className="nav-links"
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </a>
            </div>
            <div
              className={`nav-item ${
                activeLink === "resume" ? "active-item" : ""
              }`}
            >
              <a
                href="#resume"
                className="nav-links"
                onClick={() => onUpdateActiveLink("resume")}
              >
                Experience
              </a>
            </div>
            <div
              className={`nav-item ${
                activeLink === "contact" ? "active-item" : ""
              }`}
            >
              <a
                href="#contact"
                className="nav-links"
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mobile-actions">
            <a
              href="https://wa.me/9162070486"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn whatsapp-btn"
            >
              <FaWhatsapp className="btn-icon-mobile" /> CHAT ON WHATSAPP
            </a>
            <a
              href={resume}
              download="Deepak_Kumar_Resume.pdf"
              className="action-btn resume-btn"
            >
              <FaDownload className="btn-icon-mobile" /> Download Resume
            </a>
          </div>

          {/* Sidebar Footer */}
          <div className="sidebar-footer">
            <span className="follow-text">Follow me</span>
            <div className="footer-socials">
              <a href="#" className="footer-icon">
                <FaGithub />
              </a>
              <a href="#" className="footer-icon">
                <FaLinkedin />
              </a>
              <a href="#" className="footer-icon">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

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
