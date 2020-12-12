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
            <p>
              Hi, my name's David and I live near Sheffield UK. I am currently building web applications using Javascript and the React library. I am a self taught developer and have been pursuing coding for almost a year. Have a look at my work and get in contact if you would like to create something our clients will love!
            </p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;