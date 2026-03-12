import React from 'react';
import './Navbar.css';

const Navbar = ({ activeLink }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className={activeLink === 'hero' ? 'active' : ''}>
          <a href="#hero">Home</a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={activeLink === 'skills' ? 'active' : ''}>
          <a href="#skills">Skills</a>
        </li>
        <li className={activeLink === 'projects' ? 'active' : ''}>
          <a href="#projects">Projects</a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;