import React from 'react';
import './MyWork.css';
import Greeting from '../../assets/Greeting.png';
import Reg from '../../assets/Reg.png';
import CyberGi from '../../assets/CyberGi.png';
import church from '../../assets/church.png';

const MyWork = () => {
   return(
     <div id="mywork" className="mywork">
       <div className="about-achivement">
         <div className='about-achivements'>
           <h1>PROJECTS COMPLETED</h1>
           <hr />
           <div className='projects-grid'>
             <div className='project-item'>
               <h2>Registration App</h2>
               <p>This app was built to create a user interface that displays a list of registrations...
                 <a href="https://registration-1m0k.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
               </p>
               <img src={Reg} alt="Registration App" />
             </div>
             <div className='project-item'>
               <h2>Greetings App</h2>
               <p>This app was built to test my skill on a DOM widget with separated front-end...
                 <a href="https://greetings-webapp-yi55.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
               </p>
               <img src={Greeting} alt="Greetings App" />
             </div>
             <div className='project-item'>
               <h2>CyberGi App</h2>
               <p>I have built this app with my team to teach Young professionals about Cyber security...
                 <a href="https://cybergi-app-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
               </p>
               <img src={CyberGi} alt="CyberGi App" />
             </div>
             <div className='project-item'>
               <h2>Church App</h2>
               <p>I have built this for my Church to help church members to be able to see the upcoming events, and be able to send prayer requests to the pastor...
                 <a href="https://github.com/ThembakaziNgamlana/church.git" target="_blank" rel="noopener noreferrer">View Project</a>
               </p>
               <img src={church} alt="Church App" />
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}

export default MyWork;
