import React, { useEffect } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaCode, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { gsap } from "gsap";

const Footer = () => {
  // floating icons animation
  useEffect(() => {
    gsap.utils.toArray(".floating-icon").forEach((icon) => {
      gsap.set(icon, {
        x: gsap.utils.random(0, window.innerWidth - 50), // Random horizontal start position
        y: window.innerHeight + 100, // Neeche se start
      });

      gsap.to(icon, {
        y: "-120vh", // Upar ki taraf
        duration: gsap.utils.random(6, 12),
        repeat: -1,
        delay: gsap.utils.random(0, 5),
        ease: "linear",
      });
    });
  }, []);

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
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=d.deepakkumaryadav9162@gmail.com" 
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
          <a href="https://github.com/cs-Deepak" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/deepak-kumar-yadav-5559562b7/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Deepak Kumar Yadav | All Rights Reserved</p>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <FaReact className="floating-icon" />
        <FaNodeJs className="floating-icon" />
        <FaDatabase className="floating-icon" />
        <FaJsSquare className="floating-icon" />
        <FaCode className="floating-icon" />
        <FaHtml5 className="floating-icon" />
        <FaCss3Alt className="floating-icon" />
        <FaGithub className="floating-icon" />
        <FaGitAlt className="floating-icon" />
      </div>
    </footer>
  );
};

export default Footer;
