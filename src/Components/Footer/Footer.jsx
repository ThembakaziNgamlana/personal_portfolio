import React from "react";
import './Footer.css'



const Footer = () => {
   return(
     <div className="footer">
       <div className="footer-top">
          <div className="footer-top-left">
           <img  src="{footer_logo}"  alt=""  />
          <h2>Thembakazi Ngamlana</h2>
           <p>I am a passionate and dedicated Full Stack Developer. My journey into the world of web development has been fueled by a strong desire to build innovative and user-friendly applications that solve real-world problems.</p>
          </div>
          <div className="footer-top-right">
             <div className="footer-email-input">
                <img src="{user_icon}"  alt=""      />
                <input type="text"    placeholder="Enter your email"  />
             </div>
             <div className="footer-subscribe">Subcribe</div>
          </div>
       </div>
       <hr />
       <div  className="footer-bottom">
         <p className="footer-bootm-left"> </p>
         <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
         </div>
       </div>
     </div>

   )
}


export default Footer