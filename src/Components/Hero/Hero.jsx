import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
   return(
     <div id="home" className='hero'>
       <img src={profile_img} alt="Profile" />
       <h1><span>I'm Thembakazi Ngamlana</span>, Fullstack developer based in South Africa</h1>
       <p>I am a Fullstack developer from Gauteng, I specialized in building responsive applications that are user-friendly.</p>
       <div className="hero-action">
         <div className="hero-connect">Connect with me</div>
         <div className="hero-resume">My resume</div>
       </div>
    </div>
   );
}

export default Hero;
