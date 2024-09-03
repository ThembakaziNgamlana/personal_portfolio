import React from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.png';
import Greeting from '../../assets/Greeting.png';
import Reg from '../../assets/Reg.png';
import CyberGi from '../../assets/CyberGi.png';

const About = () => {
  return (
    <div className='about'>
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
            <p>As a learner, I am committed to mastering both front-end and back-end technologies...</p>
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

      <div className='about-achivements'>
        <h1>PROJECTS COMPLETED</h1>
        <hr />
        <div className='projects-grid'>
          <div className='project-item'>
            <h2>Registration App</h2>
           
            <p>This app was built to create a user interface that displays a list of registrations...
            https://registration-1m0k.onrender.com
            </p>
            <img src={Reg} alt="Registration App" />
          </div>
          <div className='project-item'>
            <h2>Greetings App</h2>
          
            <p>This app was built to test my skill on a DOM widget with separated front-end...
              https://greetings-webapp-yi55.onrender.com
           </p>
            <img src={Greeting} alt="Greetings App" />
          </div>
          <div className='project-item'>
            <h2>CyberGi App</h2>
            <p>I have built this app with my team to teach Young professionals about Cyber security...</p>
            <img src={CyberGi} alt="CyberGi App" />
          </div>
          <div className='project-item'>
            <h2>Church App</h2>
            <p>I have built this for my Church to help church members to be abkle to see the upcoming events and be send prayer request to the pastor
             https://github.com/ThembakaziNgamlana/church.git
            </p>
            <img src={CyberGi} alt="CyberGi App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
