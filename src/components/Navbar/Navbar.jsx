import './Navbar.css';
import logo from '../../assets/navbar-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
       <a href="#hero" className="navbar-logo">
          <img src={logo} alt="Sudhanshu logo" />
        </a>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;