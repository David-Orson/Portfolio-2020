import React from "react";

import "../css/Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-name">
          <p>David Orson</p>
        </div>
        <div className="header-links">
          <a href="#top" className="header-link">Home</a>
          <a href="#about" className="header-link">About me</a>
          <a href="#portfolio" className="header-link">Projects</a>
          <a href="#coding-challenges" className="header-link">Coding Challenges</a>
          <a href="#cv" className="header-link">Contact me</a>
        </div>
      </div>            
    </div>
  );
};

export default Header;
