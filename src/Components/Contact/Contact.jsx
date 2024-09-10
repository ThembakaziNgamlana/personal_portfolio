import React from "react";
import './Contact.css';


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f73803a1-0c67-4160-9c8f-c1a7db88f8eb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
         
            <div className="contact-details">
              <h2>Feel free to contact me <span>😊</span></h2>

              <div className="contact-detail">
               
                <h2>Location:</h2>
                <p>Johannesburg, Gauteng</p>
              </div>
              <div className="contact-detail">
               
                <h2>Email:</h2>
                <p>thembakazingamlana25@gmail.com</p>
              </div>
              <div className="contact-detail">
            
                <h2>Contact:</h2>
                <p>0762959055</p>
              </div>
            </div>
          </div>
          <form  onSubmit={onSubmit} action="" className="contact-right">
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

