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
        <div className="container">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-tagline">
            <span>
              These are my favourite projects from this year, take a look around
              and check the code as you please
            </span>
          </p>
        </div>
        <div className="projects-container">
          <div className="project-container">
            <img src={ProjectLock} className="project1" />
          </div>
          <div className="project-container">
            <img src={ProjectLock} className="project2"/>
          </div>
          <div className="project-container">
            <img src={ProjectLock} className="project1"/>
          </div>
          <div className="project-container">
            <img src={ProjectLock} className="project2"/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
