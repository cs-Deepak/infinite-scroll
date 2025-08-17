import React from "react";
import profile from "../assets/profile.jpg"; // apna image path
import "./Hero.css"; // neeche CSS milegi

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Left Content */}
      <div className="hero-text">
        <h1 className="hero-title">Portfolio</h1>
        <p className="hero-name">Deepak Kumar Yadav</p>
        <p className="hero-role">
          MERN <span className="highlight">STACK</span> Developer
        </p>

        <h2 className="hero-greet">Namaste 🙏</h2>
        <p className="hero-intro">
          I am Deepak Yadav, a passionate and self-made Web Developer with a
          strong focus on <span className="highlight">creative design</span> and
          modern web technologies.
        </p>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img
          src={profile}
          alt="Profile"
          className="profile-img"
        />
      </div>
    </section>
  );
};

export default Hero;
