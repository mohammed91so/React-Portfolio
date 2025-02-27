import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    image: "../img/honey.jpg",
    github: "#",
    live: "#",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Hospital Management System",
    description: "Real-time Hospital management application with collaborative features",
    image: "../img/medical.jpg",
    github: "#",
    live: "#",
    tags: ["python", "sqlite3"]
  },
  {
    title: "AI Image Generator",
    description: "Web app that generates images using AI models and APIs",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=300&fit=crop",
    github: "#",
    live: "#",
    tags: ["Next.js", "OpenAI", "AWS"]
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
                  <a href={project.github} className="project-link">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="project-link">
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