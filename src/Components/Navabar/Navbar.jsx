import React from 'react';
import './Navbar.css';
import logo from '../../assets/Photoroom.png';

const Navbar = () => {
   return(
     <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#mywork">My Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect"><a href="#contact">Connect with me</a></div>
     </div>
   );
}

export default Navbar;
