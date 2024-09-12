import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Photoroom.png';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='navbar-logo' />
      <img
        src={isMenuOpen ? menu_close : menu_open}
        alt="Menu Toggle"
        className='nav-menu-toggle'
        onClick={toggleMenu}
      />
      <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
        <li><a href="#mywork" onClick={toggleMenu}>My Work</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
      {/* {isMenuOpen && (
        <div className="nav-connect">
          <a href="#contact">Connect with me</a>
        </div>
      )} */}
    </div>
  );
}

export default Navbar;

