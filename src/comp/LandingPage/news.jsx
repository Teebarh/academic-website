import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 1,
    date: "June 2026",
    description: (
      <>
        Awarded the{" "}
        <a href="https://www.wiml.org/" target="_blank" rel="noopener noreferrer">Women in Machine Learning (WiML)</a>{" "}
        travel grant to attend the{" "}
        <a href="https://sites.google.com/wimlworkshop.org/wimlsymposium-2026/" target="_blank" rel="noopener noreferrer">WiML Workshop at ICML 2026</a>.
      </>
    ),
  },
  {
    id: 2,
    date: "May 2026",
    description: (
      <>
        Our paper &quot;A Stone Against Goliath: Addressing Occlusion Without LiDAR on Resource-Constrained
        Robots&quot; had its abstract accepted at the{" "}
        <a href="https://www.wiml.org/" target="_blank" rel="noopener noreferrer">Women in Machine Learning (WiML) Workshop</a>,
        co-located with the{" "}
        <a href="https://sites.google.com/wimlworkshop.org/wimlsymposium-2026/" target="_blank" rel="noopener noreferrer">International Conference on Machine Learning (ICML) 2026</a>.{" "}
        <a href="https://drive.google.com/file/d/1qiv65y--1eFMUMTqcnVDF-GOh_Z7J6EK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">[Poster]</a>
      </>
    ),
  },
  {
    id: 3,
    date: "March 2026",
    description: (
      <>
        Recognized in the Wiley Index of Inspiring Black Scientists, 2026, highlighting outstanding Black
        scientists contributing to research and STEM advancement.
      </>
    ),
  },
  {
    id: 4,
    date: "Jan 2026",
    description: (
      <>
        Delivered a talk, &quot;Building the Future with Tech, Tenacity, and Transformation,&quot; at the APWEN
        FUNAAB College Symposium.
      </>
    ),
  },
  {
    id: 5,
    date: "Oct 2025",
    description: (
      <>
        I was part of Team Mamalens, and we were a finalist at the Data Science for Health Ideathon (in
        collaboration with the{" "}
        <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer">Deep Learning Indaba</a>).
        We also won the &quot;most fun project&quot; award!{" "}
        <a href="https://docs.google.com/presentation/d/17LVUDp3HcsDdlQ2ZxIaimRf1jW5snWvd-r6mWReY9Eo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">[Slides]</a>
      </>
    ),
  },
  {
    id: 6,
    date: "Sept 2025",
    description: (
      <>
        Began leading the Robotics Focus Group at{" "}
        <a href="https://mlcollective.org" target="_blank" rel="noopener noreferrer">ML Collective</a>, developing
        an occlusion-aware perception model for autonomous navigation using monocular depth estimation.
      </>
    ),
  },
  {
    id: 7,
    date: "Sept 2025",
    description: (
      <>
        Completed the Aircraft Maintenance Engineering internship at 7 Star Global, Murtala Muhammed
        International Airport, Lagos, having assisted with corrosion control, servicing, and inspections during
        a major C-check event.
      </>
    ),
  },
  {
    id: 8,
    date: "Aug 2025",
    description: (
      <>
        Attended{" "}
        <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer">Deep Learning Indaba 2025</a>{" "}
        in Kigali, Rwanda, with funding from{" "}
        <a href="https://mlcollective.org" target="_blank" rel="noopener noreferrer">ML Collective</a>. Thank you
        to everyone who made it a reality!{" "}
        <a href="https://medium.com/@Toyibat_Adele/living-the-magic-of-the-indaba-for-the-first-time-6989de08dfa5" target="_blank" rel="noopener noreferrer">[Read about it]</a>
      </>
    ),
  },
  {
    id: 9,
    date: "Aug 2025",
    description: (
      <>
        Ended the mentorship program at{" "}
        <a href="https://www.researchgirl.org/" target="_blank" rel="noopener noreferrer">Research Girl, Inc.</a>
      </>
    ),
  },
  {
    id: 10,
    date: "Jul 2025",
    description: (
      <>
        Began the mentorship program at{" "}
        <a href="https://www.researchgirl.org/" target="_blank" rel="noopener noreferrer">Research Girl, Inc.</a>,
        conducting an independent survey study on predictive maintenance in aerospace systems and identifying
        research gaps in rotary-wing maintenance.
      </>
    ),
  },
  {
    id: 11,
    date: "May 2025",
    description: (
      <>
        My talk proposal, &quot;Making Robots See: Using Python for Basic Computer Vision,&quot; was accepted at
        DjangoCon Africa 2025. I also received the Opportunity Travel Grant to attend.
      </>
    ),
  },
  {
    id: 12,
    date: "Apr 2025",
    description: (
      <>
        Began an Aircraft Maintenance Engineering internship at 7 Star Global, Murtala Muhammed International
        Airport, Lagos.
      </>
    ),
  },
  {
    id: 13,
    date: "Jan 2025",
    description: (
      <>
        Received the Diversity Travel Grant to attend PyCon DE & PyData 2025.
      </>
    ),
  },
  {
    id: 12,
    date: "Dec 2024",
    description: (
      <>
        My talk proposal, &quot;Making Robots See: Using Python for Basic Computer Vision,&quot; was accepted at
        PyCon DE & PyData 2025.
      </>
    ),
  },
  {
    id: 13,
    date: "Nov 2024",
    description: (
      <>
        Co-founded Engineering Girls in Tech (FUNAAB), empowering female engineering students through technical
        skill-building and career development support.
      </>
    ),
  },
  {
    id: 14,
    date: "Oct 2024",
    description: (
      <>
        Completed an Aircraft Maintenance Engineering internship at the Naval Air Base, Navy Town, Lagos, having
        assisted with second- and third-line helicopter maintenance and rotor balancing.
      </>
    ),
  },
  {
    id: 15,
    date: "Sept 2024",
    description: (
      <>
        Our poster on &quot;Maternify&quot; was presented at{" "}
        <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer">Deep Learning Indaba 2024</a>{" "}
        in Dakar, Senegal, with full sponsorship from the DLI Committee.
      </>
    ),
  },
  {
    id: 16,
    date: "Sept 2024",
    description: (
      <>
        Attended PyCon Africa 2024 in Accra, Ghana, thanks to full sponsorship from the Python community.{" "}
        <a href="https://medium.com/python-in-plain-english/my-experience-attending-pycon-africa-for-the-first-time-5623daa93f3f" target="_blank" rel="noopener noreferrer">[Read about it]</a>
      </>
    ),
  },
  {
    id: 16,
    date: "Aug 2024",
    description: (
      <>
        Began an Aircraft Maintenance Engineering internship at the Naval Air Base, Navy Town, Lagos.
      </>
    ),
  },
  {
    id: 17,
    date: "May 2024",
    description: (
      <>
        I built &quot;Maternify,&quot; an ML-powered prenatal care chatbot, with Ilerioluwakiiye Abolade, Kelechi
        Chibundu, and Muslimah Sarumi, and we ranked Top 5 in the &quot;Microsoft Ambassador&apos;s AI
        Challenge.&quot;
      </>
    ),
  },
  {
    id: 18,
    date: "May 2024",
    description: (
      <>
        Delivered a talk, &quot;Enhancing Python Workflows with Python Virtual Environments,&quot; at PyCon
        Nigeria 2024.
      </>
    ),
  },
  {
    id: 19,
    date: "March 2024",
    description: (
      <>
        Delivered a talk, &quot;LinkedIn Optimisation for Global Opportunities,&quot; at the GDSC FUNAAB Meetup.
      </>
    ),
  },
  {
    id: 20,
    date: "Aug 2023",
    description: (
      <>
        Selected as one of five Microsoft Student Ambassadors on campus, facilitating student engagement through
        events and Microsoft-led learning initiatives.
      </>
    ),
  },
  {
    id: 21,
    date: "Dec 2022",
    description: (
      <>
        Co-founded Muslimah in Tech, building a community mentoring Muslim women in tech through workshops and
        networking opportunities.
      </>
    ),
  }
];

const News = () => {
  return (
    <NewsSection id="news">
      <h1 className="text-2xl font-semibold font-serif tracking-tight">News</h1>
      <div className="mt-4 space-y-3">
        {newsItems.map((item, index) => (
          <div key={`${item.date}-${index}`} className="news-item flex items-start gap-3">
            <span className="date shrink-0 w-28 text-sm tracking-wide text-slate-600">
              {item.date}:
            </span>
            <span className="description flex-1 leading-relaxed">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </NewsSection>
  );
};

export default News;
