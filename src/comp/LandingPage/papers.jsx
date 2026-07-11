import { PapersSection } from "../../assets/styles";

const papers = [
  {
    id: 1,
    title: "A Stone Against Goliath: Addressing Occlusion Without LiDAR on Resource-Constrained Robots",
    authors: "Adele, T., Onyeweankwu, C., Abdulkareem, S., & Eje, O.",
    venue: "Women in Machine Learning (WiML) Workshop, co-located with the International Conference on Machine Learning (ICML) 2026",
    status: "Abstract accepted; full manuscript in preparation",
    year: "2026",
    links: [
      {
        text: "Poster",
        url: "https://drive.google.com/file/d/1qiv65y--1eFMUMTqcnVDF-GOh_Z7J6EK/view?usp=drive_link"
      }
    ]
  }
];

const Papers = () => {
  const renderAuthorsWithBoldName = (authors) => {
    const nameToBold = "Adele, T.";
    const parts = authors.split(nameToBold);

    if (parts.length === 1) {
      // Name not found, return as is
      return authors;
    }

    const result = [];
    for (let i = 0; i < parts.length; i++) {
      if (parts[i]) {
        result.push(parts[i]);
      }
      if (i < parts.length - 1) {
        result.push(<strong key={i}>{nameToBold}</strong>);
      }
    }
    return result;
  };

  return (
    <PapersSection id="publications">
      <h1>Publications</h1>
      {papers.map((paper) => (
        <div key={paper.id} className="paper-item">
          <div className="paper-year">{paper.year}</div>
          <div className="paper-content">
            <h3 className="paper-title">{paper.title}</h3>
            <p className="paper-authors">{renderAuthorsWithBoldName(paper.authors)}</p>
            <p className="paper-venue">{paper.venue}</p>
            <p className="paper-status">{paper.status}</p>
            {paper.links && paper.links.length > 0 && (
              <div className="paper-links">
                {paper.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </PapersSection>
  );
};

export default Papers;
