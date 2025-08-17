// import React, { useState } from 'react';
// import { Github, ExternalLink, ChevronRight, Calendar, Award } from 'lucide-react';
// import './projects.css'
// const ProjectCard = ({
//   title = "Project Title",
//   description = "Brief description of your amazing project",
//   image = "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Project+Image",
//   githubLink = "https://github.com/yourusername/project",
//   liveLink = "https://yourproject.vercel.app",
//   technologies = ["React", "Node.js", "MongoDB"],
//   process = [
//     "Research and Planning - Analyzed user needs and market requirements",
//     "Design & Wireframing - Created user-friendly interface mockups",
//     "Development - Built responsive frontend and robust backend",
//     "Testing & Deployment - Comprehensive testing and cloud deployment"
//   ],
//   press = [
//     {
//       title: "Featured in Tech Magazine",
//       publication: "TechCrunch",
//       date: "March 2024",
//       link: "https://techcrunch.com/article"
//     },
//     {
//       title: "Winner of Innovation Award",
//       publication: "Dev Awards",
//       date: "February 2024",
//       link: "https://devawards.com"
//     },
//     {
//       title: "Winner of Innovation Award",
//       publication: "Dev Awards",
//       date: "February 2024",
//       link: "https://devawards.com"
//     },
//     {
//       title: "Winner of Innovation Award",
//       publication: "Dev Awards",
//       date: "February 2024",
//       link: "https://devawards.com"
//     },
//   ]
// }) => {
//   const [activeTab, setActiveTab] = useState('overview');

//   return (
//     <div className="project-card">
//       <div className="project-image-container">
//         <img 
//           src={image} 
//           alt={title}
//           className="project-image"
//         />
//         <div className="project-overlay">
//           <div className="project-links">
//             <a 
//               href={githubLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="project-link github-link"
//               title="View on GitHub"
//             >
//               <Github size={20} />
//               <span>GitHub</span>
//             </a>
//             <a 
//               href={liveLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="project-link live-link"
//               title="View Live Project"
//             >
//               <ExternalLink size={20} />
//               <span>Live Demo</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="project-content">
//         <div className="project-header">
//           <h3 className="project-title">{title}</h3>
//           <p className="project-description">{description}</p>
//         </div>

//         <div className="project-tech">
//           {technologies.map((tech, index) => (
//             <span key={index} className="tech-tag">{tech}</span>
//           ))}
//         </div>

//         <div className="project-tabs">
//           <button 
//             className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
//             onClick={() => setActiveTab('overview')}
//           >
//             Overview
//           </button>
//           <button 
//             className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
//             onClick={() => setActiveTab('process')}
//           >
//             Process
//           </button>
//           <button 
//             className={`tab-button ${activeTab === 'press' ? 'active' : ''}`}
//             onClick={() => setActiveTab('press')}
//           >
//             In Press
//           </button>
//         </div>

//         <div className="tab-content">
//           {activeTab === 'overview' && (
//             <div className="overview-content">
//               <p>This project showcases modern web development practices with a focus on user experience and performance. Built with cutting-edge technologies to solve real-world problems.</p>
//             </div>
//           )}

//           {activeTab === 'process' && (
//             <div className="process-content">
//               <div className="process-steps">
//                 {process.map((step, index) => (
//                   <div key={index} className="process-step">
//                     <div className="step-number">{index + 1}</div>
//                     <div className="step-content">
//                       <p>{step}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'press' && (
//             <div className="press-content">
//               {press.length > 0 ? (
//                 <div className="press-items">
//                   {press.map((item, index) => (
//                     <div key={index} className="press-item">
//                       <div className="press-icon">
//                         <Award size={16} />
//                       </div>
//                       <div className="press-details">
//                         <h4 className="press-title">{item.title}</h4>
//                         <div className="press-meta">
//                           <span className="press-publication">{item.publication}</span>
//                           <span className="press-date">
//                             <Calendar size={14} />
//                             {item.date}
//                           </span>
//                         </div>
//                       </div>
//                       <a 
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="press-link"
//                       >
//                         <ChevronRight size={16} />
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="no-press">No press coverage yet.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage component
// const ProjectShowcase = () => {
//   const sampleProjects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with modern UI and secure payments",
//       image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=E-Commerce+Platform",
//       githubLink: "https://github.com/yourusername/ecommerce",
//       liveLink: "https://ecommerce-demo.vercel.app",
//       technologies: ["React", "Node.js", "Stripe", "MongoDB"],
//       process: [
//         "Market Research - Analyzed competitor platforms and user needs",
//         "UI/UX Design - Created wireframes and prototypes in Figma",
//         "Backend Development - Built REST API with authentication",
//         "Frontend Implementation - Responsive React application",
//         "Payment Integration - Secure Stripe payment processing",
//         "Testing & Launch - Comprehensive testing and deployment"
//       ],
//       press: [
//         {
//           title: "Featured Project of the Month",
//           publication: "React Weekly",
//           date: "April 2024",
//           link: "https://reactweekly.com/featured"
//         }
//       ]
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with modern UI and secure payments",
//       image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=E-Commerce+Platform",
//       githubLink: "https://github.com/yourusername/ecommerce",
//       liveLink: "https://ecommerce-demo.vercel.app",
//       technologies: ["React", "Node.js", "Stripe", "MongoDB"],
//       process: [
//         "Market Research - Analyzed competitor platforms and user needs",
//         "UI/UX Design - Created wireframes and prototypes in Figma",
//         "Backend Development - Built REST API with authentication",
//         "Frontend Implementation - Responsive React application",
//         "Payment Integration - Secure Stripe payment processing",
//         "Testing & Launch - Comprehensive testing and deployment"
//       ],
//       press: [
//         {
//           title: "Featured Project of the Month",
//           publication: "React Weekly",
//           date: "April 2024",
//           link: "https://reactweekly.com/featured"
//         }
//       ]
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with modern UI and secure payments",
//       image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=E-Commerce+Platform",
//       githubLink: "https://github.com/yourusername/ecommerce",
//       liveLink: "https://ecommerce-demo.vercel.app",
//       technologies: ["React", "Node.js", "Stripe", "MongoDB"],
//       process: [
//         "Market Research - Analyzed competitor platforms and user needs",
//         "UI/UX Design - Created wireframes and prototypes in Figma",
//         "Backend Development - Built REST API with authentication",
//         "Frontend Implementation - Responsive React application",
//         "Payment Integration - Secure Stripe payment processing",
//         "Testing & Launch - Comprehensive testing and deployment"
//       ],
//       press: [
//         {
//           title: "Featured Project of the Month",
//           publication: "React Weekly",
//           date: "April 2024",
//           link: "https://reactweekly.com/featured"
//         }
//       ]
//     },
//     {
//       title: "Task Management App",
//       description: "A collaborative task management tool with real-time updates",
//       image: "https://via.placeholder.com/600x400/10b981/ffffff?text=Task+Manager",
//       githubLink: "https://github.com/yourusername/taskapp",
//       liveLink: "https://taskapp-demo.vercel.app",
//       technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
//       process: [
//         "Requirements Gathering - Defined core features and user stories",
//         "Architecture Design - Planned real-time data flow",
//         "Development Sprint 1 - User authentication and basic CRUD",
//         "Development Sprint 2 - Real-time collaboration features",
//         "Testing & Optimization - Performance tuning and bug fixes"
//       ],
//       press: []
//     }
//   ];

//   return (
//     <div style={{ padding: '2rem', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//         <h2 style={{ 
//           textAlign: 'center', 
//           marginBottom: '3rem',
//           fontSize: '2.5rem',
//           fontWeight: 'bold',
//           color: '#1e293b'
//         }}>
//           My Projects
//         </h2>
        
//         <div className="projects-grid">
//           {sampleProjects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectShowcase;



import React from "react";
import "./projects.css";


const projectsData = [
  {
    id: 1,
    title: "Car Showroom Website",
    description: "A full-stack project built with HTML, CSS, JavaScript and PHP. Includes live demo and GitHub code.",
    image: "./src/assets/project2.png",
    github: "https://github.com/yourusername/car-showroom",
    live: "https://lara-car-r3qg.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication and session handling.",
    image: "./src/assets/project2.png",
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-ugwc.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication and session handling.",
    image: "./src/assets/project2.png",
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-ugwc.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A MERN stack based Todo application with Google OAuth authentication and session handling.",
    image: "./src/assets/project2.png",
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
