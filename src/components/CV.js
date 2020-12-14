import React from 'react';

import starSky from "../Assets/starsky.jpg";

import "../css/CV.css"

const CV = () => {
    return (
    <div className="cv">
        <div className="cv-main">
            <h1 className="cv-title">Grab my CV</h1>
            <a className="button" href="https://davidorson.tech/CV.pdf" target="_blank">CV</a>
        </div>
    </div>
    )
}

export default CV;