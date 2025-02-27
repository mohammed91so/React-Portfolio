import { Code2, Database, Palette, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Code2 size={24} />,
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Terminal size={24} />,
    items: ["Node.js", "Python", "SQL", "REST APIs", "GraphQL"]
  },
  {
    category: "Database",
    icon: <Database size={24} />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
  },
  {
    category: "Design",
    icon: <Palette size={24} />,
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"]
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