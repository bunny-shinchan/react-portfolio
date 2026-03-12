import React from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, demoLink, repoLink }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;