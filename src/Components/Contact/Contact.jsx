import React from "react";
import './Contact.css';
import mail_icon from "../../assets/mail_icon.png";
import location_icon from "../../assets/location_icon.png";
import call_icon from "../../assets/call_icon.png";

const Contact = () => {
  return (
    <div className="contact" id="contact" >
      <div className="contact-title">
        <h1>Get in touch</h1>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Feel free to contact me</p>
            <div className="contact-details">
              <div className="contact-detail">
              <img src={mail_icon} alt="" />
                <h2>Location:</h2>
                <p>Johannesburg, Gauteng</p>
              </div>
              <div className="contact-detail">
              <img src={location_icon} alt="" />
                <h2>Email:</h2>
                <p>thembakazingamlana25@gmail.com</p>
              </div>
              <div className="contact-detail">
              <img src={call_icon} alt="" />
                <h2>Contact:</h2>
                <p>0762959055</p>
              </div>
            </div>
          </div>
          {/* Correct the class name here */}
          <form action="" className="contact-right">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" placeholder="Enter your name" name="name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" name="email" />

            <label htmlFor="message">Write your message here</label>
            <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>

            <button type="submit" className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
