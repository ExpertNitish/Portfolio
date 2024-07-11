import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Profile_picture from "../../assets/Profile_picture.png";
const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Profile_picture} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            Hi there! I'm a dedicated frontend developer passionate about bringing ideas to life online. I focus on clean, efficient code and beautiful design to create user-friendly and visually appealing experiences.
            </p>
            <p>
            In frontend development, I've gained solid skills in HTML, CSS, and JavaScript, and I've worked extensively with frameworks like React. I'm always learning new technologies and best practices to keep my work current and innovative..
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
            <p >HTML & CSS</p> <hr style={{ width: "79%" }} /> </div>
            <div className="about-skill"><p >JavaScript</p> <hr style={{ width: "60%" }} /> </div>
            <div className="about-skill"><p >React Js</p> <hr style={{ width: "70%" }} /> </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import "./About.css";
export default About;
