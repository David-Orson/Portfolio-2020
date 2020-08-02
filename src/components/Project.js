import React from "react";
import Badge from "./Badge";

const Project = (props) => {
  return (
    <div className="section">
      <div className="container logo-container">
        <img src={props.image} />
      </div>
      <div className="container">
        <p>
          <span>Project</span>
        </p>
        <h1>{props.title}</h1>

        {props.badges
          ? props.badges.map((badge, index) => (
              <Badge name={badge} key={index} />
            ))
          : null}
        <p>
          <span>{props.body}</span>
        </p>
      </div>
    </div>
  );
};

export default Project;
