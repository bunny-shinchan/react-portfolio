import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <p className="footer-title">Thanks for visiting.</p>
        <p className="footer-subtitle">Get in touch</p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/vermsudh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon-link"
            style={{ '--brand-color': '#0A66C2' }}
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:vermsudh@gmail.com"
            aria-label="Email"
            className="footer-icon-link"
            style={{ '--brand-color': '#EA4335' }}
          >
            <HiOutlineMail />
          </a>

          <a
            href="https://www.instagram.com/sudhanshu.verma/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-icon-link"
            style={{ '--brand-color': '#E4405F' }}
          >
            <FaInstagram />
          </a>
        </div>

        <div className="footer-credit">
          <p>© 2026 Sid</p>
          <p>Built with React + Vite</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;