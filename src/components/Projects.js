import React from "react";
import Project from "./Project";
import surfSecrets from "../Assets/surf-secrets.png";

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
        <Project
          title="Surf Secrets"
          body="Lorem this and that and well yes and but maybe no but then when i
            consider it longer i get to see that the best thing about that was
            when it was back to that other time when we did this and that but
            never took the time to consider that we can never go back to that
            time."
          image={surfSecrets}
          badges={sSBadges}
        />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
