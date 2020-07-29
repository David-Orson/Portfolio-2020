import React from "react";
import image from "../Assets/surf-secrets.png";
import Badge from "./Badge";

const Project = () => {
  return (
    <div className="section">
      <div className="container">
        <img src={image} />
      </div>
      <div className="container">
        <p>
          <span>Project</span>
        </p>
        <h1>Surf Secrets</h1>
        <Badge name="JavaScript" />
        <Badge name="React" />
        <Badge name="Redux" />
        <Badge name="TypeScript" />
        <Badge name="Firebase" />
        <Badge name="CSS" />
        <Badge name="Sass" />
        <p>
          <span>
            Lorem this and that and well yes and but maybe no but then when i
            consider it longer i get to see that the best thing about that was
            when it was back to that other time when we did this and that but
            never took the time to consider that we can never go back to that
            time.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Project;
