import React from 'react';

import "../css/CTA.css"

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta-main">
        {/* <div className="container"> */}
          <h1 className="cta-title">Why Choose me?</h1>
          <p className="cta-tagline-left">
            <span>
              I am very excited to break into the tech world and prove what I can do! I have a history of working hard and satisfying customer and client needs. I pay close attention to communication and the needs of a client in order to deliver the most appropriate product and value for their expectations.
            </span>
          </p>
          <p className="cta-tagline-right">
            <span>
              I have developed competency in multiple leading web development technologies and am capable of using my Firebase - Express - React - Node stack to create unique solutions to application needs. I have spent time refining my skills and studying the more nuanced distinctions of these technologies so that I am capable of delivering to your needs.
            </span>
          </p>
          <p className="cta-tagline-left">
            <span>
              I am looking for Coding work, both contractual and individual projects for Front-end, Full-Stack and Design projects. I am available for work now and am excited to hear from you! 
            </span>
          </p>
        {/* </div> */}
      </div>
    </div>
  )
}

export default CTA;