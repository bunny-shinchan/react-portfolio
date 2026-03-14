import './About.css';
import aboutBackground from '../../assets/about-me-background.png';
import { motion } from 'framer-motion';

const paragraphVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04
    }
  }
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: "easeOut"
    }
  }
};

const RevealText = ({ text }) => {
  return (
    <motion.p
      className="about-text"
      variants={paragraphVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{
            display: "inline-block",
            marginRight: "6px"
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const About = () => {
  return (
    <section
      className="about-section"
      id="about"
      style={{ '--about-bg-image': `url(${aboutBackground})` }}
    >
      <div className="about-container">
        <div className="about-content">

          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <RevealText text="I’m a Software Developer focused on building automation tools, data extraction systems, and developer-friendly workflows. My work primarily involves using Python and JavaScript to automate repetitive processes, collect structured data from complex sources, and build reliable backend pipelines." />

          <RevealText text="Currently, I’m working as an SDE Intern where I’m developing an intelligent system that extracts and organizes ITAT case law data, transforming unstructured legal documents into structured datasets." />

          <RevealText text="I enjoy designing systems that combine automation, scraping, and backend services to solve real-world problems and improve developer workflows." />

          <RevealText text="My background in infrastructure and system operations also gives me a strong understanding of networking, security fundamentals, and debugging complex production systems." />

        </div>
      </div>
    </section>
  );
};

export default About;