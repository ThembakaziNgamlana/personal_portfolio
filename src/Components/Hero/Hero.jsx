import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
  // Handler to scroll to contact section
  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler to open resume link
  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1eo37_iRJRTs1qZu8KcJZbM04mp5KMiLI/edit', '_blank');
  };

  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Thembakazi Ngamlana</span>, Fullstack developer based in South Africa</h1>
      <p>I am a Fullstack developer from Gauteng, I specialize in building responsive applications that are user-friendly.</p>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleConnectClick}>Connect with me</div>
        <div className="hero-resume" onClick={handleResumeClick}>My resume</div>
      </div>
    </div>
  );
}

export default Hero;
