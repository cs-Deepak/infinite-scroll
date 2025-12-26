import React from "react";
import {
  Mail,
  Phone,
  Github,
  ExternalLink,
  Code,
  Database,
  Globe,
  Zap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";
import "./Resume.css";
import profile from "../assets/profile.jpg";

const Resume = () => {
  return (
    <div className="deepak-resume-container">
      <div className="deepak-resume-card">
        {/* Header Section */}
        {/* <div className="deepak-header-section">
       
        </div> */}

        <div className="deepak-main-grid">
          {/* Left Column */}
          <div className="deepak-left-column">
            {/* About Section */}
            <div className="deepak-about-section">
              <h2 className="deepak-section-title">
                <Globe
                  className="deepak-section-icon deepak-about-icon"
                  size={24}
                />
                About Me
              </h2>
              <p className="deepak-about-text">
                I am a frontend developer who enjoys making websites that look
                good and work well on all devices. I like learning new tools and
                technologies to improve my skills. My goal is to build websites
                that are easy to use and give a smooth experience to users.
              </p>
            </div>

            {/* Skills Section */}
            <div className="deepak-skills-section">
              <h2 className="deepak-section-title">
                <Code
                  className="deepak-section-icon deepak-skills-icon"
                  size={24}
                />
                Skills
              </h2>
              <div className="deepak-skills-grid">
                <div className="deepak-skill-item deepak-skill-html">HTML</div>
                <div className="deepak-skill-item deepak-skill-css">CSS</div>
                <div className="deepak-skill-item deepak-skill-js">
                  JavaScript
                </div>
                <div className="deepak-skill-item deepak-skill-react">
                  ReactJs
                </div>
                <div className="deepak-skill-item deepak-skill-express">
                  ExpressJs
                </div>
                <div className="deepak-skill-item deepak-skill-express">
                  NodeJs
                </div>
                <div className="deepak-skill-item deepak-skill-express">
                  NestJs
                </div>
                <div className="deepak-skill-item deepak-skill-express">
                  Nextjs
                </div>
                <div className="deepak-skill-item deepak-skill-mongo">
                  MongoDB
                </div>
                <div className="deepak-skill-item deepak-skill-git">
                  Git & GitHub
                </div>
                <div className="deepak-skill-item deepak-skill-cpp">C++</div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="deepak-interests-section">
              <h2 className="deepak-section-title">
                <Zap
                  className="deepak-section-icon deepak-interests-icon"
                  size={24}
                />
                Interests
              </h2>
              <div className="deepak-interests-list">
                <span className="deepak-interest-tag">Automation</span>
                <span className="deepak-interest-tag">ChatGPT</span>
                <span className="deepak-interest-tag">Video Editing</span>
                <span className="deepak-interest-tag">ReactJS</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="deepak-right-column">
            {/* Experience Section */}
            <div className="deepak-experience-section">
              <h2 className="deepak-section-title">
                <Award
                  className="deepak-section-icon deepak-experience-icon"
                  size={24}
                />
                Experience
              </h2>
              <div className="deepak-experience-item">
                <div className="deepak-experience-header">
                  <h3 className="deepak-experience-title">
                    Full Stack Developer Intern
                  </h3>
                  <span className="deepak-experience-date">
                    Aug 2025 - Dec 2025
                  </span>
                  <span className="deepak-experience-company-name">
                    AntCreatives Pvt. Ltd
                  </span>
                </div>
                <p className="deepak-experience-company">NestJs</p>

                <p className="deepak-experience-description">
                  – Built a full-stack management web application using NestJS,
                  HBS and MongoDB. <br />
                  – Created secure REST APIs with JWT authentication and
                  role-based access.
                  <br /> – Worked on frontend UI, backend logic, and database
                  integration.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="deepak-education-section">
              <h2 className="deepak-section-title">
                <BookOpen
                  className="deepak-section-icon deepak-education-icon"
                  size={24}
                />
                Education
              </h2>
              <div className="deepak-education-list">
                <div className="deepak-education-item">
                  <div className="deepak-education-header">
                    <h3 className="deepak-education-title">
                      Bachelor of Technology in Computer Science and Engineering
                    </h3>
                    <span className="deepak-education-year">2022 - 2026</span>
                  </div>
                  <p className="deepak-education-institute">
                    Global Group of Institutes, Amritsar
                  </p>
                </div>

                <div className="deepak-education-item">
                  <div className="deepak-education-header">
                    <h3 className="deepak-education-title">
                      Sr. Secondary Higher Education (Non-Medical)
                    </h3>
                    <span className="deepak-education-year">2020 - 2022</span>
                  </div>
                  <p className="deepak-education-institute">
                    R.B.G.R College, Siwan - Bihar
                  </p>
                  <p className="deepak-education-grade">Percentage: 56%</p>
                </div>

                <div className="deepak-education-item">
                  <div className="deepak-education-header">
                    <h3 className="deepak-education-title">
                      Secondary School Education
                    </h3>
                    <span className="deepak-education-year">2019 - 2020</span>
                  </div>
                  <p className="deepak-education-institute">
                    Uma Shankar High School, Siwan - Bihar
                  </p>
                  <p className="deepak-education-grade">Percentage: 79.2%</p>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            {/* <div className="deepak-projects-section">
              <h2 className="deepak-section-title">
                <Database className="deepak-section-icon deepak-projects-icon" size={24} />
                Projects
              </h2>
              <div className="deepak-projects-list">
                
                <div className="deepak-project-item">
                  <div className="deepak-project-header">
                    <h3 className="deepak-project-title">Todo App – Full Stack Project</h3>
                    <a target='_blank'rel="noopener noreferrer" href="https://todo-ugwc.vercel.app" className="deepak-project-link">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="deepak-project-description">
                    Built during training at 91CoderStreet using React. Implemented add, delete, and update task features with full CRUD functionality.
                  </p>
                  <div className="deepak-project-tags">
                    <span className="deepak-project-tag">React</span>
                    <span className="deepak-project-tag">CRUD</span>
                  </div>
                </div>

                <div className="deepak-project-item">
                  <div className="deepak-project-header">
                    <h3 className="deepak-project-title">Online Car Showroom Website</h3>
                    <a target='_blank'rel="noopener noreferrer" href="https://lara-car-r3qg.vercel.app" className="deepak-project-link">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="deepak-project-description">
                    Built a responsive car showroom web app using HTML, CSS, JavaScript, and MongoDB. Users can browse cars, view details, and submit inquiries. The site features dynamic UI and backend integration for storing and managing car data.
                  </p>
                  <div className="deepak-project-tags">
                    <span className="deepak-project-tag">HTML</span>
                    <span className="deepak-project-tag">CSS</span>
                    <span className="deepak-project-tag">JavaScript</span>
                    <span className="deepak-project-tag">MongoDB</span>
                  </div>
                </div>

                <div className="deepak-project-item">
                  <div className="deepak-project-header">
                    <h3 className="deepak-project-title">QuickSign – PDF Signing Web App</h3>
                    <a target='_blank'rel="noopener noreferrer" href="https://quicksign3.netlify.app/" className="deepak-project-link">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="deepak-project-description">
                    Developed a MERN stack web application that allows users to securely upload PDF files, draw digital signatures, and download signed documents. Integrated Google OAuth for authentication and used react-pdf & signature canvas for smooth document handling.
                  </p>
                  <div className="deepak-project-tags">
                    <span className="deepak-project-tag">MERN</span>
                    <span className="deepak-project-tag">Google OAuth</span>
                    <span className="deepak-project-tag">React PDF</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
