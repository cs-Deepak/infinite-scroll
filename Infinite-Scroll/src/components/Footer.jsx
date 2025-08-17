import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <h2>Deepak Kumar Yadav</h2>
          <p>MERN Stack Developer</p>
        </div>

        {/* Center Section - Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="footer-social">
          <a href="mailto:yourmail@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/yourgithub" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank"><FaLinkedin /></a>
          <a href="https://twitter.com/yourtwitter" target="_blank"><FaTwitter /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Deepak Kumar Yadav | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
