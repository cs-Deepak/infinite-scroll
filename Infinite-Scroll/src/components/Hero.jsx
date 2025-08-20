import React, { useEffect } from "react";
import profile from "../assets/profile.jpg"; 
import pro from "../assets/port.jpg";
import "./Hero.css";
import resume from "../assets/Deepak_Kumar_Resume.pdf";
import silver from "../assets/liquid.jpg"; 
//floating icons
import { gsap } from "gsap";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaCode,  FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaWhatsapp   } from "react-icons/fa";

const Hero = () => {
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

  // CV download function
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Deepak_Kumar_Resume.pdf";
    link.click();
    console.log("Downloading CV...");
  };

  return (
    <section className="hero" id="home">
      {/* Floating Icons */}
  

      {/* Left Side */}
      <div className="hero-left">
        <img src={silver} alt="silver effect" className="silver-effect" />
        <div className="hero-text">
          <img
            className="hero-title"
            style={{ mixBlendMode: "screen" }}
            src={pro}
            alt="Portfolio Title"
          />

          <p className="hero-intro">
            A passionate <span className="highlight">MERN Stack Developer</span>{" "}
            who loves crafting beautiful, functional websites. I turn ideas into
            clean, responsive, and modern digital experiences that make a
            difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <button onClick={handleDownloadCV} className="btn download">
              <i className="fas fa-download"></i> Download CV
            </button>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/9162070486?text=Hello%20Deepak%2C%20I%20want%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary btn-whatsapp"
              >
                <FaWhatsapp /> WhatsApp
              </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
         
      <div className="hero-right">
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
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
