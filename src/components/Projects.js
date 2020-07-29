import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1>Portfolio</h1>
        <p>
          <span>
            These are my favourite projects from this year, take a look around
            and check the code as you please
          </span>
        </p>
      </div>
      <div className="section">
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
