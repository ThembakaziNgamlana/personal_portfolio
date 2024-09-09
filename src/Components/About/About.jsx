import React from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.png';

const About = () => {
  return (
    <div id="about" className='about'>
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className='about-left'>
          <img src={profile_img} alt="Profile" />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I am a passionate and dedicated Full Stack Developer. My journey into the world of web development has been fueled by a strong desire to build innovative and user-friendly applications that solve real-world problems.</p>
            <p> As a learner, I am committed to mastering both front-end and back-end technologies...</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML</p><hr style={{width:"50%"}} /></div>
            <div className='about-skill'><p>CSS</p><hr style={{width:"50%"}} /></div>
            <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}} /></div>
            <div className='about-skill'><p>Java(Spring-Boot)</p><hr style={{width:"30%"}} /></div>
            <div className='about-skill'><p>Progress Sql</p><hr style={{width:"60%"}} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

