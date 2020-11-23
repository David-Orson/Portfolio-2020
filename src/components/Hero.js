import React, { useState } from "react";
import starSky from "../Assets/starsky.jpg";

import "../css/Hero.css"

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  window.addEventListener('scroll', () => {
      
      setScrollPosition(window.pageYOffset);
  })

  console.log(scrollPosition)

  const parralax = {
    transform: `translateY(${scrollPosition * 0.5}px)`
  }

  return (
    <div className="hero">
      <h1 className="hero-title">David Orson</h1>
      <h2 className="hero-tagline">React/Javascript Developer</h2>
      <img src={starSky} className="hero-img" style={parralax} />
    </div>
  );
};

export default Hero;
