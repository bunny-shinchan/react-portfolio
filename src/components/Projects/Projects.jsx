import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import portfolioData from '../../data/portfolioData';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {portfolioData.projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            demoLink={project.demoLink} 
            repoLink={project.repoLink} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;