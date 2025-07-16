import { Code2, Database, Palette, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Code2 size={24} />,
    items: ["HTML", "Tailwind CSS", "JavaScript", "React", "TypeScript", "Vite"]
  },
  {
    category: "Backend",
    icon: <Terminal size={24} />,
    items: ["Laravel", "PHP", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Database size={24} />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"]
  },
  {
    category: "Design",
    icon: <Palette size={24} />,
    items: ["UI/UX", "Responsive Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3 className="skill-title">{skill.category}</h3>
              </div>
              <ul className="skill-list">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}