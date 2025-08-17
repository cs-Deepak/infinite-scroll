import React from 'react';
import './Resume.css';
import profile from '../assets/liquid.jpg'

const Resume = () => {
  return (
    
    <div className="resume-container">
      <div className="resume">
        {/* Header Section */}
        <header className="header">
          <div className="profile-section">
            <div className="avatar">DY</div>
            <div className="header-info">
              <h1 className="name">Deepak Kumar Yadav</h1>
              <p className="title">Full Stack Developer</p>
              <div className="contact-grid">
                <span>📧 d.deepakkumaryadav9162@gmail.com</span>
                <span>📱 +91-9162070486</span>
                <span>🔗 <a href="https://github.com/cs-Deepak">GitHub Profile</a></span>
              </div>
            </div>
          </div>
        </header>

        <div className="main-content">
          {/* Left Column */}
          <div className="left-column">
            {/* About */}
            <section className="section">
              <h2 className="section-title">About</h2>
              <p className="about-text">
                Frontend developer passionate about creating responsive, user-friendly websites. 
                Experienced in modern JavaScript frameworks with focus on performance optimization.
              </p>
            </section>

            {/* Skills */}
            <section className="section">
              <h2 className="section-title">Skills</h2>
              <div className="skills-container">
                <div className="skill-group">
                  <h4>Frontend</h4>
                  <div className="skill-tags">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>HTML/CSS</span>
                  </div>
                </div>
                <div className="skill-group">
                  <h4>Backend</h4>
                  <div className="skill-tags">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                  </div>
                </div>
                <div className="skill-group">
                  <h4>Tools</h4>
                  <div className="skill-tags">
                    <span>Git</span>
                    <span>C++</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section className="section">
              <h2 className="section-title">Interests</h2>
              <div className="interests">
                <span>🤖 Automation</span>
                <span>🎬 Video Editing</span>
                <span>⚛️ ReactJS</span>
                <span>💬 ChatGPT</span>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Education */}
            <section className="section">
              <h2 className="section-title">Education</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="year">2022-26</div>
                  <div className="content">
                    <h3>B.Tech CSE</h3>
                    <p>Global Group of Institutes, Amritsar</p>
                    <span className="grade">SGPA: 6.17</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2020-22</div>
                  <div className="content">
                    <h3>Sr. Secondary</h3>
                    <p>R.B.G.R College, Bihar</p>
                    <span className="grade">56%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="section">
              <h2 className="section-title">Experience</h2>
              <div className="experience-card">
                <h3>Full Stack Training</h3>
                <p className="company">91CoderStreet</p>
                <p className="description">
                  MERN Stack training with 25-member batch. Built Todo App with full CRUD functionality.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="section">
              <h2 className="section-title">Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <h3>QuickSign PDF App</h3>
                  <p>MERN stack app for PDF signing with Google OAuth</p>
                  <a href="https://quicksign3.netlify.app/" target="_blank" rel="noopener noreferrer">
                    View →
                  </a>
                </div>
                <div className="project-card">
                  <h3>Car Showroom Website</h3>
                  <p>Responsive web app with MongoDB integration</p>
                  <a href="https://lara-car-r3qg.vercel.app" target="_blank" rel="noopener noreferrer">
                    View →
                  </a>
                </div>
                <div className="project-card">
                  <h3>Todo App</h3>
                  <p>Full-stack React app with CRUD operations</p>
                  <a href="https://todo-ugwc.vercel.app" target="_blank" rel="noopener noreferrer">
                    View →
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  
    
    </div>
  );
};

export default Resume;