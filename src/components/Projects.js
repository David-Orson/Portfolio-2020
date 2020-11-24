import React from "react";
import Project from "./Project";
import surfSecrets from "../Assets/surf-secrets.png";
import LockLogo from "../Assets/LockLogo1.png";
import Omnigateway from "../Assets/omnigateway_icon.png"
import codeQuizzer from "../Assets/code-quizzer.png";

import ProjectLock from "../Assets/ProjectLock.PNG"

import "../css/Projects.css"

const Projects = () => {
  const sSBadges = [
    "JavaScript",
    "Node",
    "Express",
    "React",
    "Firebase",
    "Redux",
    "TypeScript",
    "CSS",
    "Sass",
  ];

  const lGBadges = ["Javascript", "React", "CSS"]

  const oGBadges = ["Javascript", "React", "CSS"]

  const cQBadges = ["JavaScript", "React", "Context", "Semantic UI", "CSS"];

  return (
    <div id="portfolio" className="projects">
      <div className="projects-main">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-layout">          
          <div className="projects-tagline-container">
          <p className="projects-tagline">
            <span>
              I try to develop my skills, working with online resources like articles, udemy and youtube tutorials. I focus on developing the skills which will have a real world application and try to remove learning in technologies which spread my knowledge rather than refine it. These are my favourite projects from this year, feel free to take a look at the hosted demos or the code in the github repositories. 
            </span>
          </p>
          </div>
          <div className="projects-container">
            <div className="project-container">
              <img src={ProjectLock} className="project1"/>
            </div>
            <div className="project-container">
              <img src={ProjectLock} className="project2"/>
            </div>
            <div className="project-container">
              <img src={ProjectLock} className="project2"/>
            </div>
            <div className="project-container">
              <img src={ProjectLock} className="project1"/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
