import React from "react";
import './Footer.css'



const Footer = () => {
   return(
     <div className="footer">
       <div className="footer-top">
          <div className="footer-top-left">
           <img  src="{footer_logo}"  alt=""  />
          <h2>Thembakazi Ngamlana</h2>
          <p>Thanks for visiting my portfolio! I’m always eager to connect with fellow developers and industry professionals. If you have any questions or just want to chat about tech, feel free to reach out.</p>
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