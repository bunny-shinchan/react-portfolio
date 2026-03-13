import { motion } from 'framer-motion';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.15,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="project-card-top">
        <div>
          <h3 className="project-title">{project.title}</h3>
          {project.status && (
            <span className="project-status">{project.status}</span>
          )}
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="project-features">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="project-tech">
        {project.techStack.map((tech) => (
          <span key={tech} className="project-tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;