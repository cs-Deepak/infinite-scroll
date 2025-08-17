import React, { useState, useEffect } from "react";
import "./projects.css";
import carimg from "../assets/laracar.png";
import todo from "../assets/project2.png";
import sign from "../assets/quicksign.png";


const projectsData = [
  {
    id: 1,
    title: "Car Showroom Website",
    description: "A full-stack project built with HTML, CSS, JavaScript and PHP.",
    images: [
      carimg,
      todo,
      carimg
    ],
    github: "https://github.com/yourusername/car-showroom",
    live: "https://lara-car-r3qg.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication.",
    images: [
       carimg,
      todo,
      carimg
    ],
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-ugwc.vercel.app/",
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
      <img
        src={project.images[currentIndex]}
        alt={project.title}
        className="project-img"
      />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="btn">
          GitHub
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" className="btn live-btn">
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
