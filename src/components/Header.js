import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>LAXIT JANGID</h1>
      <nav>
        <ul>
          <li><NavLink to="/" activeclassname="active" exact="true">About</NavLink></li>
          <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
          <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
