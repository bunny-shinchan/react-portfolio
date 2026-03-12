import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate developer with experience in building dynamic and responsive web applications. My skills include React, JavaScript, and CSS, and I enjoy creating user-friendly interfaces.
      </p>
      <p>
        In my spare time, I love to explore new technologies and work on personal projects that challenge my skills and creativity.
      </p>
      <div className="profile-picture">
        <img src="/path/to/profile-picture.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default About;