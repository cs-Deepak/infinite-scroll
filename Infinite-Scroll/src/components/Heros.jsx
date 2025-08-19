import React, { useState, useEffect } from 'react';
import profile from "../assets/profile.jpg"; 
import pro from "../assets/port.jpg";
import silver from "../assets/liquid.jpg";
import "./Hero.css";

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const roles = ['Frontend Developer', 'MERN Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'];

  // Typing animation effect
  useEffect(() => {
    const speed = isDeleting ? 50 : 150;
    const currentFullText = roles[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, roles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const handleDownloadCV = () => {
    // Add your CV download logic here
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // Replace with your CV path
    link.download = 'Deepak_Kumar_Yadav_CV.pdf';
    link.click();
    console.log('Downloading CV...');
  };

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/cs-Deepak', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fas fa-envelope', url: 'mailto:d.deepakkumaryadav9162@gmail.com', label: 'Email' }
  ];

  return (
    <section className="hero" id="home">
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Left Side */}
      <div className="hero-left">
        <img src={silver} alt="silver effect" className="silver-effect" />
        
        <div className="hero-text">
          <div className="hero-greeting">👋 Hello, I'm</div>
          
          

        
          <h1 className="deepak-main-title">
            DEEPAK KUMAR YADAV
          </h1>
          
          <div className="typing-container">
            <span className="typing-text">
              {currentText}
              <span className="cursor">{showCursor ? '|' : ''}</span>
            </span>
          </div>
          
          <p className="hero-intro">
            A passionate <span className="highlight">MERN Stack Developer</span> who loves crafting 
            beautiful, functional websites. I turn ideas into clean, responsive, 
            and modern digital experiences that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              <i className="fas fa-code"></i>
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
            <button onClick={handleDownloadCV} className="btn download">
              <i className="fas fa-download"></i>
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <div className="image-container">
          <img 
            src={profile} 
            alt="Deepak Kumar Yadav" 
            className="profile-img" 
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            className="social-link"
            data-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>

      {/* Stats */}
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2+</span>
          <span className="stat-label">Years</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Commits</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;