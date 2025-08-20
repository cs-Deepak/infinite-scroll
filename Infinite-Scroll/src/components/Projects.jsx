import React, { useState, useEffect } from "react";
import "./projects.css";
import carimg from "../assets/laracar.png";
import todo from "../assets/project2.png";
import sign from "../assets/quicksign.png";
import q1 from "../assets/q1.png";
import q2 from "../assets/q2.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";

const projectsData = [
  {
    id: 1,
    title: "Car Showroom Website",
    description: "A full-stack project built with HTML, CSS, JavaScript and PHP.",
    images: [carimg, c1, c2, c3],
    github: "https://github.com/cs-Deepak/Lara_Car",
    live: "https://lara-car-r3qg.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "A MERN stack based Todo application with Google OAuth authentication.",
    images: [t1, todo, t2],
    github: "https://github.com/cs-Deepak/todo",
    live: "https://todo-ugwc.vercel.app/",
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
      <p className="project-desc">{project.description}</p>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="btn">
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
