import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../..//assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin from '../../assets/linkedin.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "07e63ac8-2354-4b3a-ac0d-8ee81a22749c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Feel free to reach out! Whether you have a project idea, a question,
            or just want to connect, I'm here to help. Drop me a message and
            let's start turning your vision into reality.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>NitishSharma.Work@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p> +91 7065294211</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>New Delhi, India</p>
            </div>
          </div>
        </div>
        <form  onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="email">Email Id</label>
          <input type="text" placeholder="Enter your Email Id" name="email" />
          <label htmlFor="message">Write your message here</label>
          <textarea
            placeholder="Write your message here"
            name="message"
            rows="8"
          />
          <button type="submit">
            Submit Now
          </button>
        </form>
      </div>
      <hr />
      <div className="footer">
        <div className="footer-left">
          @2024 Nitish Kr. Sharma. All rights reserved.
        </div>
        <div className="footer-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
