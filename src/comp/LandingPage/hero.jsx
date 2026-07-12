import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/headshot.webp"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Toyibat Adele</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:abdulbasirtoyiba@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://drive.google.com/file/d/1IVydHcOPnLMNP11TRmn7uh1zPbOUzZjq/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/Teebarh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/toyibatadele" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/Teebarh_" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>

          <p>
            I am Toyibat Adele, a final-year Mechatronics Engineering student at the Federal University of
            Agriculture, Abeokuta (FUNAAB), Nigeria. I am currently the Lead Independent Researcher for the
            Robotics Focus Group at <a href="https://mlcollective.org" target="_blank" rel="noopener noreferrer">ML Collective</a>,
            and I previously completed a summer research program at{" "}
            <a href="https://www.researchgirl.org/" target="_blank" rel="noopener noreferrer">Research Girl, Inc.</a>
          </p>

          <p>
            My research centers on robotic perception, computer vision, and machine learning for autonomous
            systems. I&apos;m currently working on a lightweight, occlusion-aware perception framework that
            enables reliable object detection on resource-constrained robots without relying on LiDAR.
          </p>

          <p>
            When I&apos;m not thinking about occlusion and robots, I&apos;m probably living vicariously through a fictional character in a book. I&apos;m in a bit of a reading slump though, so recommendations are always welcome. I&apos;m
            also an unapologetic cat person, no cat of my own yet, but I&apos;m working on it. I&apos;m a sucker
            for a good sci-fi movie. Horror, though, is where I draw the line.
          </p>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
