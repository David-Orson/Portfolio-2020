import React from "react";
import Badge from "./Badge";

const Project = (props) => {
  const codeText = `</>`;
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
        <div className="container">
          <a className="button" href={props.site} target="_blank">
            Demo
          </a>
          <a className="button" href={props.code} target="_blank">
            {codeText} Code
          </a>
        </div>
        <div className="scroll">
          <p>
            <span>{props.body}</span>
          </p>
          <p>
            <span>{props.body2}</span>
          </p>
          <p>
            <span>{props.body3}</span>
          </p>
          <p>
            <span>{props.body4}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
