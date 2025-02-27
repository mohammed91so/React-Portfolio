import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    title: "Master's in Computer Science",
    institution: "Tech University",
    period: "2020 - 2022",
    description: "Specialized in Artificial Intelligence and Machine Learning",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: "Bachelor's in Software Engineering",
    institution: "Engineering College",
    period: "2016 - 2020",
    description: "Focus on software development and system design",
    icon: <BookOpen className="w-6 h-6 text-white" />,
  },
  {
    title: "Web Development Certification",
    institution: "Tech Academy",
    period: "2019",
    description: "Advanced web development and modern frameworks",
    icon: <Award className="w-6 h-6 text-white" />,
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