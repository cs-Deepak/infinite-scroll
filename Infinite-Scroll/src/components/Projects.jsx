import React, { useState, useEffect } from "react";
import "./projects.css";
import carimg from "../assets/laracar.png";
import todo from "../assets/project2.png";
import sign from "../assets/quicksign.png";
import q1 from "../assets/q1.png";
import q2 from "../assets/q2.png";
import t1 from "../assets/t1.png";
import t3 from "../assets/t3.png";
import t2 from "../assets/t2.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";
import g8 from "../assets/g8.png";
import g9 from "../assets/g9.png";
import g10 from "../assets/g10.png";

const projectsData = [
  {
    id: 1,
    title: "Animal Welfare & Organic Products Platform",
    description:
      "Developed a full-stack Livestock & Agri Products Management Web Application using React.js for frontend and NestJS for backend. The platform enabled users to make online donations and purchase agri-based products such as dairy items and organic vegetables. Implemented secure RESTful APIs, integrated MongoDB for managing users, donations, orders, and products, and added JWT-based authentication for secure access. Focused on building a scalable, user-friendly, and production-ready application.",
    images: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10],
    // github: "https://github.com/cs-Deepak/Lara_Car",
    // live: "https://lara-car-r3qg.vercel.app/",
  },
  {
    id: 1,
    title: "Car Showroom Website",
    description:
      "A full-stack project built with HTML, CSS, JavaScript and PHP.",
    images: [carimg, c1, c2, c3],
    github: "https://github.com/cs-Deepak/Lara_Car",
    live: "https://lara-car-r3qg.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "A MERN stack based Todo application with Google OAuth authentication.",
    images: [t1, t3, t2],
    github: "https://github.com/cs-Deepak/todo",
    live: "https://todo-1-6mzd.onrender.com/",
  },
  {
    id: 3,
    title: "PDF Signage Platform",
    description:
      "A MERN stack based PDF signing platform with user authentication and file upload.",
    images: [sign, q1, q2],
    github: "https://github.com/cs-Deepak/BoloSign-Assignment",
    live: "https://quicksign3.netlify.app/",
  },
];

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // 3 sec delay
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="project-card">
      <div className="slider-container">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.title}
            className={`project-img ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p
        className={`project-desc ${isExpanded ? "expanded" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
        title="Click to read more"
      >
        {project.description}
      </p>
      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="btn live-btn"
        >
          <span className="demo-live-buttom" style={{ color: "white" }}>
            Live Demo
          </span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
