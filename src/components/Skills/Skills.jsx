import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'CSS', level: '70%' },
    { name: 'Node.js', level: '65%' },
    { name: 'Git', level: '85%' },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
            <span className="skill-percentage">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;