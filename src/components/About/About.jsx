import './About.css';
import aboutBackground from '../../assets/about-me-background.png';

const About = () => {
  return (
    <section
      className="about-section"
      id="about"
      style={{ '--about-bg-image': `url(${aboutBackground})` }}
    >
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I’m a Software Developer focused on building automation tools, data
            extraction systems, and developer-friendly workflows. My work
            primarily involves using Python and JavaScript to automate
            repetitive processes, collect structured data from complex sources,
            and build reliable backend pipelines.
          </p>

          <p className="about-text">
            Currently, I’m working as an SDE Intern where I’m developing an
            intelligent system that extracts and organizes ITAT case law data,
            transforming unstructured legal documents into structured datasets.
          </p>

          <p className="about-text">
            I enjoy designing systems that combine automation, scraping, and
            backend services to solve real-world problems and improve developer
            workflows.
          </p>

          <p className="about-text">
            My background in infrastructure and system operations also gives me
            a strong understanding of networking, security fundamentals, and
            debugging complex production systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;