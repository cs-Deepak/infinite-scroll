import React from "react";
import profile from "../assets/profile.jpg";
import "./Hero.css";
import { FaReact, FaNodeJs, FaDatabase, FaArrowRight, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        {/* Left Section */}
        <div className="hero-left">
          <div className="badge">
            <span role="img" aria-label="wave">👋</span> Hello, I'm a Full Stack Developer
          </div>

          <h1 className="hero-title">
            I Build <span className="highlight">Modern</span>,<br />
            Scalable & <span className="highlight">Beautiful</span><br />
            Web Apps
          </h1>

          <p className="hero-description">
            Specializing in the MERN stack. I transform complex requirements
            into seamless digital experiences using React, Node.js, and
            MongoDB.
          </p>

          <div className="tech-stack">
            <span className="tech-label">TECH STACK</span>
            <div className="tech-chips">
              <span className="tech-chip"><FaReact /> React</span>
              <span className="tech-chip"><FaNodeJs /> Node.js</span>
              <span className="tech-chip"><FaDatabase /> MongoDB</span>
             

            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me <FaEnvelope />
            </a>
          </div>

          {/* <div className="hero-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>YEARS EXP.</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>PROJECTS</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>SATISFACTION</p>
            </div>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <div className="image-card">
            <div className="status-badge">
              <span className="status-dot"></span> Open to work
            </div>
            <img src={profile} alt="Profile" className="hero-profile-img" />
            
            <div className="focus-card">
              <div className="focus-icon">🎯</div>
              <div className="focus-text">
                <span className="focus-label">Current Focus</span>
                <span className="focus-value">Full-Stack Architecture</span>
              </div>
              <div className="focus-progress">
                <div className="progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="bg-glow"></div>
    </section>
  );
};

export default Hero;
