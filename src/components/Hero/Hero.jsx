import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">I'm a passionate developer ready to take on new challenges.</p>
        <a href="#projects" className="hero-cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;