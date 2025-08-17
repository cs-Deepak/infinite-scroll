import React from "react";
import profile from "../assets/profile.jpg"; 
import pro from "../assets/port.jpg"
import "./Hero.css";
import silver from "../assets/liquid.jpg"; // left side silver texture (tum jo image diya hai usko use karna)

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-left">
        
      
        <img  src={silver} alt="silver effect" className="silver-effect" />
        <div className="hero-text">
          <img className="hero-title" style={{mixBlendMode:"screen"}} src={pro} alt="" />
          
          <p className="hero-intro">
            Hey, I’m <span className="highlight">Deepak 👋</span> A web developer who loves crafting 
            beautiful, functional websites. I turn ideas into clean, responsive, 
            and modern digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
