import React from "react";
import profile_pic from "../Assets/pfp.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container pfp-container">
        <img src={profile_pic} className="pfp" />
      </div>
      <div className="container">
        <h1>
          <span>Hi, I'm</span> David Orson
        </h1>
        <p>
          <span>I'M A</span> SELF TAUGHT WEB DEVELOPER
          <span> CURRENTLY BASED NEAR</span> SHEFFIELD, UK
          <br /> <span>LET'S BUILD SOMETHING OUR</span> CLIENTS
          <span> AND THEIR</span> CUSTOMERS<span> WILL </span>
          LOVE.
        </p>

        <a className="button" href="#portfolio">
          See My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
