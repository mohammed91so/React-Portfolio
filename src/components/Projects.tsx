import { Github, ExternalLink } from 'lucide-react';
import cartImg from '../img/cart.jpg';
import medicalImg from '../img/medical.jpg';
import shoesImg from '../img/Shoese.jpg';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, TypeScript, Vite, and PostgreSQL",
    image: cartImg,
    github: "#",
    live: "#",
    tags: ["React", "TypeScript", "PostgreSQL"]
  },
  {
    title: "Hospital Management System",
    description: "Real-time Hospital management application with collaborative features",
    image: medicalImg,
    github: "#",
    live: "#",
    tags: ["Python", "SQLite3"]
  },
  {
    title: "Shoe Store",
    description: "E-commerce website for selling shoes using React, Vite, and TypeScript.",
    image: shoesImg,
    github: "#",
    live: "#",
    tags: ["React", "TypeScript", "Vite", "PostgreSQL"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
