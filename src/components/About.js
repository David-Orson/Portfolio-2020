import React from "react";
import profile_pic from "../Assets/pfp.jpg";

import "../css/About.css"

const About = () => {
  return (
    <div className="about">
      <div className="about-main">
        <h1>About me</h1>
        <div className="about-container">
          <div className="pfp-container">
            <img src={profile_pic} className="pfp" />
          </div>
          <div className="about-info-container">
            <p>Hi, my name's David and I live near Sheffield UK and am currently building web applications using Javascript and the React library. I am a self taught developer and have been pursuing coding for almost a year. Have a look at my work and get in contact if you would like to do some work together!
            {/* <h1>
              <span>Hi, I'm</span> David Orson
            </h1>
            <p>
              <span>I'M A</span> SELF TAUGHT WEB DEVELOPER
              <span> CURRENTLY BASED NEAR</span> SHEFFIELD, UK
              <br /> <span>LET'S BUILD SOMETHING OUR</span> CLIENTS
              <span> AND THEIR</span> CUSTOMERS<span> WILL </span>
              LOVE. */}
            </p>
            {/* <a className="button" href="#portfolio">
              See My Work
            </a> */}
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;