import React from "react";
import "./Hero.css";
import profile_picture from "../../assets/Profile_picture.png";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="profile-picture">

      <img src={profile_picture} alt="" />
      </div>
      <h1>
       <span> I'm Nitish,</span> Front End Developer <br />based in Delhi, India
      </h1>
      <p>
      I love creating websites that are easy to use and look great. Let's make your ideas come to life online.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href="https://drive.google.com/file/d/1DlLcS6PnWZa5BoCcPH1_eIpHCO5Mr348/view?usp=sharing" target="_blank">        <div className="hero-resume">My Resume</div></a>

      </div>
    </div>
  );
};
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default Hero;
