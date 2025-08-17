


import React from "react";
import "./projects.css";
import projectimg from "../assets/project2.png";



const projectsData = [
  {
    id: 1,
    title: "Car Showroom Website",
    description: "A full-stack project built with HTML, CSS, JavaScript and PHP. Includes live demo and GitHub code.",
    image: projectimg,
    github: "https://github.com/yourusername/car-showroom",
    live: "https://lara-car-r3qg.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication and session handling.",
    image: projectimg,
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-ugwc.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication and session handling.",
    image: projectimg,
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-ugwc.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication and session handling.",
    image: projectimg,
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-ugwc.vercel.app/",
  },

];

const Projects = () => {
  return (
    <section className="projects-section">
     
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="btn live-btn">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
