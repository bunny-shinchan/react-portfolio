import './Hero.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile.png';

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.9,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-nav-placeholder">
        <span className="hero-logo">Sudhanshu Verma</span>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-title" variants={fadeUpVariants}>
            Hi, I&apos;m
          </motion.p>

          <motion.h1 className="hero-intro" variants={fadeUpVariants}>
            Sudhanshu
          </motion.h1>

          <motion.p className="hero-tags" variants={fadeUpVariants}>
            SDE Intern @ Astraea | Python • SQL • Web Scraping • Data Analysis
          </motion.p>

          <motion.p className="hero-description" variants={fadeUpVariants}>
            I build Python tools that automate data collection and processing
            workflows. My work focuses on web scraping, data extraction, and
            building pipelines that transform unstructured information into
            structured datasets for analysis and insights.
          </motion.p>

          <motion.div className="hero-socials" variants={fadeUpVariants}>
            
            <motion.a
              href="https://www.linkedin.com/in/vermsudh/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              href="https://github.com/bunny-shinchan"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="mailto:vermsudh@gmail.com"
              className="hero-social-link"
              aria-label="Email"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <FiMail />
            </motion.a>
          </motion.div>

        </motion.div>

        <motion.div
          className="hero-right"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Sudhanshu profile"
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;