import React from 'react';

import "../css/Skills.css"

import coding from '../Assets/coding.svg';
import design from '../Assets/design.svg';
import problemsolving from '../Assets/problemsolving.svg'

const Skills = () => {
  return <div className="skills">
    <div className="skills-main">
      <h1 className="skills-title">What I Do</h1>
      <div className="skills-container">
      <div className="skill-container">
        <img src={coding} className="skill-icon" />
        <h1>Development</h1>
        <p>I have a strong focus and passion for web development. I understand the importance of writing clean, scalable, maintainable code which grows into elegant software. I strive to sharpen my skills and implement more technologies to bring the best user experience possible.</p>
      </div>
      <div className="skill-container">
        <img src={design} className="skill-icon" />
        <h1>Design</h1>
        <p>As a developer, it's easy to get lost in functionality, but design is essential to the user experience of the end product. I strive to improve my eye for design and regularly try new ideas to make my products pleasing to the eye.</p>
      </div>
      <div className="skill-container">
        <img src={problemsolving} className="skill-icon" />
        <h1>Problem Solving</h1>
        <p>I love that moment when I find the solution to a challenge, this work always keeps me growing and on my toes. I take my time to reflect on all issues when it is necessary to find a unique approach. I also have grown competent at identifying the specific issue and using online resources.</p>
      </div>
      </div>
      
    </div>
  </div>
}

export default Skills;