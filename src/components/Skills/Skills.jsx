import './Skills.css';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import { SiMysql, SiGit } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Microsoft Admin Center', icon: null, shortLabel: 'MS', color: '#5E5E5E' },
];

const duplicatedSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-marquee">
          <motion.div
            className="skills-track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="skill-card"
                  style={{ '--brand-color': skill.color }}
                >
                  {Icon ? (
                    <Icon className="skill-icon" />
                  ) : (
                    <span className="skill-icon skill-icon--text">
                      {skill.shortLabel}
                    </span>
                  )}

                  <span className="skill-name">{skill.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;