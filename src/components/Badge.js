import React from "react";

const Badge = (props) => {
  return (
    <div className="badge">
      <p>
        <span>{props.name}</span>
      </p>
    </div>
  );
};

export default Badge;
