import { ExperienceSection } from '../../assets/styles';

const experienceData = [
  {
    role: "Research Assistant",
    company: "Federal University of Agriculture, Abeokuta",
    duration: "Sept 2024 - Present",
    tags: ["Solar Tracking", "Energy Optimization", "Research"],
    description: "Developing a dual-axis solar tracking system for energy optimization.",
    achievements: [
      "Co-authoring a paper under review",
      "Designed and implemented the tracking system",
      "Collaborated on renewable energy solutions"
    ],
    // links: [
    //   { text: "Research Details", url: "#" }
    // ]
  },
  {
    role: "Independent Researcher",
    company: "ML Collective",
    duration: "Oct 2024 - Present",
    tags: ["Medical Imaging", "Explainable AI", "Deep Learning"],
    description: "Researching deep learning in medical imaging and explainable AI.",
    achievements: [
      "Enhanced diagnostic tools through research",
      "Explored advanced explainable AI techniques",
      "Shared knowledge with fellow researchers"
    ],
    // links: [
    //   { text: "ML Collective Overview", url: "#" }
    // ]
  },
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h1>Experience</h1>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="role">{exp.role}</h3>
            <div className="company">{exp.company}</div>
            <div className="duration">{exp.duration}</div>
            <div className="tags">
              {exp.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <p className="description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            {exp.links && (
              <div className="links">
                {exp.links.map((link, i) => (
                  <a key={i} href={link.url}>{link.text}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ExperienceSection>
  );
};

export default Experience;