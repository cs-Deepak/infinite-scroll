

import React from "react";
import "./projects.css";
import projectimg from "../assets/project2.png";
import laracar from '../assets/laracar.png';
import quick from '../assets/quicksign.png';

const projectsData = [
  {
    id: 1,
    title: "Car Showroom Website",
    description: "A full-stack project built with HTML, CSS, JavaScript and PHP. Includes live demo and GitHub code.",
    image: laracar,
    github: "https://github.com/cs-Deepak/Lara_Car",
    live: "https://lara-car-r3qg.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication and session handling.",
    image: projectimg,
    github: "https://github.com/cs-Deepak/todo",
    live: "https://todo-ugwc.vercel.app/",
  },
  {
    id: 2,
    title: "PDF Signature Generator",
    description: "A pdf signature generator usiging MERN stack and React. You can sign your own signatures in PDF format. and download the signed PDF.",
    image: quick,
    github: "https://github.com/cs-Deepak/BoloSign-Assignment",
    live: "https://quicksign3.netlify.app/",
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
              <a  href={project.live} target="_blank" rel="noreferrer" className="btn live-btn">
               <span className="demo-live-buttom" style={{color:"white"}}>Live Demo</span> 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
