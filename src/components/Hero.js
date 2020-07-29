import React from "react";
import profile_pic from "../Assets/profile_pic.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <img src={profile_pic} className="pfp" />
      </div>
      <div className="container">
        <h1>
          <span>Hi, I'm</span> David Orson
        </h1>
        <p>
          <span>I'm a</span> self taught Web Developer
          <span> currently based near</span> Sheffield, UK
          <br /> <span>Let's build something our</span> clients
          <span> and their</span> customers <span>will </span>
          love
        </p>

        <button>See My Work</button>
      </div>
    </div>
  );
};

export default Hero;
