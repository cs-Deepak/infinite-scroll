import React from "react";
import profile from "../assets/profile.jpg"; 
import pro from "../assets/port.jpg"
import "./Hero.css";
import resume from "../assets/Deepak_Kumar_Resume.pdf";
import silver from "../assets/liquid.jpg"; // left side silver texture (tum jo image diya hai usko use karna)

const Hero = () => {

    const handleDownloadCV = () => {
    // Add your CV download logic here
    const link = document.createElement('a');
    link.href = resume; // Replace with your CV path
    link.download = 'Deepak_Kumar_Resume.pdf';
    link.click();
    console.log('Downloading CV...');
  };
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-left">
        
      
        <img  src={silver} alt="silver effect" className="silver-effect" />
        <div className="hero-text">
          <img className="hero-title" style={{mixBlendMode:"screen"}} src={pro} alt="" />
          
           <p className="hero-intro">
            A passionate <span className="highlight">MERN Stack Developer</span> who loves crafting 
            beautiful, functional websites. I turn ideas into clean, responsive, 
            and modern digital experiences that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
             <button onClick={handleDownloadCV} className="btn download">
              <i className="fas fa-download"></i>
              Download CV
            </button>
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
