import React from "react";

import "../css/Challenges.css"

const Challenges = () => {
  return (
    <div className="challenges">
      <div className="challenges-main">
        <div className="container">
          <h1 className="projects-title">Challenges</h1>
          <p className="projects-tagline">
            <span>
              I love completing coding challenges and enjoy bringing them to life for people to play with and enjoy!
            </span>
          </p>
        </div>
        <div className="challenges-container">
          <a className="challenge" href="https://reverse-a-string.netlify.app/" target="_blank">
            <div className="challenge-icon1"></div>
            <div className="challenge-title-container">
              <h2>Reverse a String</h2>
            </div>
          </a>
          <a className="challenge" href="https://palindrone.netlify.app/" target="_blank">
            <div className="challenge-icon2"></div>
            <div className="challenge-title-container">
              <h2>Palindrone</h2>
            </div>
          </a>
          <a className="challenge" href="https://reverse-an-integer.netlify.app/" target="_blank">
            <div className="challenge-icon3"></div>
            <div className="challenge-title-container">
              <h2>Reverse an Integer</h2>
            </div>            
          </a>
        </div>
      </div>  
    </div>
  )
}

export default Challenges;