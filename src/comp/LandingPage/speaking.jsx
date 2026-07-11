import { SpeakingSection } from "../../assets/styles";

const talks = [
  {
    id: 1,
    year: "2026",
    title: "Building the Future with Tech, Tenacity, and Transformation",
    venue: "APWEN FUNAAB College Symposium",
    description: "Offered practical advice on combining determination and technical skills to utilize opportunities in engineering.",
    slidesUrl: "https://www.canva.com/design/DAG5u6awAZg/71eNApsSvr43fraPS0g4TA/view"
  },
  {
    id: 2,
    year: "2024",
    title: "Enhancing Python Workflows with Python Virtual Environments",
    venue: "PyCon Nigeria 2024",
    description: "Shared insights and practical tips to help developers optimize their development workflows using virtual environments.",
    slidesUrl: "https://docs.google.com/presentation/d/1kYOrK1bMwFLoIZC24Up24liwRTKmRLl2gfzhqXpAEn0/edit"
  },
  {
    id: 3,
    year: "2024",
    title: "LinkedIn Optimisation for Global Opportunities",
    venue: "GDSC FUNAAB Meetup",
    description: "Offered actionable tips on profile building, networking, and leveraging LinkedIn for global career advancement.",
    slidesUrl: "https://www.canva.com/design/DAF_5UdJpNM/ZJxZyigGbsGMaald7DKztg/view"
  }
];

const Speaking = () => {
  return (
    <SpeakingSection id="speaking">
      <h1>Speaking</h1>
      {talks.map((talk) => (
        <div key={talk.id} className="talk-item">
          <div className="talk-year">{talk.year}</div>
          <div className="talk-content">
            <h3 className="talk-title">{talk.title}</h3>
            <p className="talk-venue">{talk.venue}</p>
            <p className="talk-description">{talk.description}</p>
            {talk.slidesUrl && (
              <a
                href={talk.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="talk-link"
              >
                Slides
              </a>
            )}
          </div>
        </div>
      ))}
    </SpeakingSection>
  );
};

export default Speaking;
