import { GraduationCap, School, BadgeCheckIcon } from "lucide-react";

const education = [
  {
    title: "Degree in development",
    institution: "La voie Inset",
    period: "2023 - 2025",
    description: "Specialized in software and web development",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: "Python Certificate",
    institution: "Hackerrank",
    period: "November-2025",
    description: "Specialized in python language",
    icon: <BadgeCheckIcon className="w-6 h-6 text-white" />,
  },
  {
    title: "SQL Certificate",
    institution: "Hackerrank",
    period: "Febrary-2025",
    description: "Specialized sql language for database",
    icon: <BadgeCheckIcon className="w-6 h-6 text-white" />,
  },
  {
    title: "Baccalaureat in Science Phisics",
    institution: "High School",
    period: "2020",
    description: "Specialized in science phisics",
    icon: <School className="w-6 h-6 text-white" />,
  },
];

export default function Education() {
  return (
    <section className="education py-20" id="education">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My <span className="highlight">Education</span></h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className={`timeline-container ${index % 2 === 1 ? 'right' : 'left'}`}>
              <div className="timeline-content">
                <div className="timeline-icon">
                  {edu.icon}
                </div>
                <h3 className="timeline-title">{edu.title}</h3>
                <div className="timeline-info">
                  <h4 className="timeline-institution">{edu.institution}</h4>
                  <p className="timeline-period">{edu.period}</p>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}