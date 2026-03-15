import './Projects.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Case Law Extraction AI Agent',
    status: 'In Progress',
    description:
      'AI-powered system that extracts and structures ITAT case law data using intelligent agents and automated pipelines.',
    features: [
      'Extracts legal case data from ITAT orders',
      'Structures unstructured legal documents',
      'Backend system for managing extracted data',
      'Focus on scalability and accuracy',
    ],
    techStack: ['Python', 'AI Agents', 'Automation', 'Backend Systems'],
  },
  {
    id: 2,
    title: 'LinkedIn Commenting Automation System',
    description:
      'Automation framework that discovers LinkedIn posts and generates AI-assisted comments while maintaining safety and human review workflows.',
    features: [
      'Scrapes LinkedIn posts',
      'Generates rule-constrained AI comments',
      'Human-review output workflow',
      'Secure environment-based credential management',
    ],
    techStack: ['Python', 'Playwright', 'Automation', 'AI APIs'],
    
  },
  {
    id: 3,
    title: 'TaxTech Intelligence Automation Pipeline',
    description:
      'Modular Python pipeline that collects and processes tax technology insights from unstructured sources and distributes them as structured intelligence.',
    features: [
      'Multi-stage scraping pipeline',
      'Data extraction and normalization',
      'Automated email distribution',
      'Modular architecture',
    ],
    techStack: ['Python', 'Automation', 'Data Processing', 'Web Scraping'],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Selected Projects</h2>
          <p className="projects-subtitle">Automation systems, data workflows, and developer tools</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;