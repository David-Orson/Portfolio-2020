import React from "react";
import Project from "./Project";
import surfSecrets from "../Assets/surf-secrets.png";
import LockLogo from "../Assets/LockLogo1.png";
import Omnigateway from "../Assets/omnigateway_icon.png"
import codeQuizzer from "../Assets/code-quizzer.png";

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
          <h1>Portfolio</h1>
          <p>
            <span>
              These are my favourite projects from this year, take a look around
              and check the code as you please
            </span>
          </p>
        </div>
        <div className="section-container">
          <Project
            title="Surf Secrets"
            body="Surf Secrets is a social media site for gamers who play a modded version of Counter-Strike: Global Offensive (and CS: Source!). I wanted this site to have functionality like a basic social media account, where people can signup, create posts and react to the posts of other users. They can also customise their profile and create a todo list for surf maps they are looking at competing on. Users are notified if another user likes or comments on their posts."
            body2="This site offered me the bulk of my challenges so far, integrating React with firebase was difficult for me at the time, even though I had experience using firebase with Javascript apps. I made the decision to transition from using the standard Firebase SDK in frontend Javascript to using Cloud functions, which meant that I had to understand and implement Node.JS and Express. This was the right decision in terms of making a more viable product for the use case and supports the apps future."
            body3="I had a coding friend who mentored me and advised me that if I wanted this to be a long term project, I should transition to typescript. This presented challenges (even though I knew how to set types) with implementing this fully with React/Redux as many of the errors I handled were difficult to understand, I now understand how to set the types for props and state and use interfaces. This site was also my first implementation of Redux, learning about a functioning store with actions and reducers which use Axios pull the data from the cloud functions."
            body4="I have been given access to an API for the leading CS:GO / CS:S server so that I can implement player stats from the game into their profiles amongst other functionalities. For the future of this app, I intend to integrate: automatic posts of in-game achievements, ranking system based on performance amongst multiple servers, in-game challenges which are rewarded with site badges. In the distant future, I intend to make a match making system so that players can arrange competitive games and report the score with evidence of the result, but this may require creating my own surf server."
            image={surfSecrets}
            badges={sSBadges}
            site="https://cssurfsecrets.com"
            code="https://github.com/David-Orson/cs-surf-secrets-v2"
            imagecss="surfsecrets-logo"
          />
          <Project
            title="The Lock Gym and Fitness"
            body="The Lock Gym and Fitness is a gym in my local town which I had been using for around 6 months, I was aware that they didn't have a website and knew that it would benefit their business with easier customer acquisition. I approached the owners of the business and gained their trust by helping them manage their GoogleBusiness page."
            body2="I worked closely with the owners to manage their expectations and meet on design ideas which suit their needs. We also agreed to meet before the gym opened one day during development to take many photos of the gym so that the site could have a personalised and professional look."
            body3="I wanted to improve my eye for design and have a foundation in freelancing for local businesses. I took much care to ensure that this site was responsive and appropriate for users on all screen sizes down to iphone 6/6s/7 as I knew that I had made mistakes in the past, I wanted to ensure a trouble free launch for the client. I also have considered a few new best practices in terms of layering text over images and responsive design."
            image={LockLogo}
            badges={lGBadges}
            site="https://davidorson.online/codequizzer"
            code="https://github.com/David-Orson/web-dev-quiz"
            imagecss="lock-logo"
          />
          <Project
            title="Omnigateway"
            body="This project was my first ever freelance project. The client needed a UI for their API to use as a prototype for demonstration for sales and client acquisition. I worked closely with the client and their backend developer to make the site to their design specification and correctly implement the required API calls."
            body2="The client relied on my design feedback and allowed me liberty to improve against the specification where I felt it was needed. The client wanted to design close to material design standards which I have a low level familiarity with but can deliver a site with that desired feel. I also gave feedback on how the user would flow through the site with the action buttons and animations which they would trigger, much of which was agreed to."
            body3="I gained experience from this project although I was already familiar with much of the work required, I was very eager to deliver the project to the client as desired. I learnt more about how to manage myself as a business, predicting workloads, negotiating on project price and providing adequate feedback and client care.  "
            image={Omnigateway}
            badges={oGBadges}
            site="https://davidorson.online/codequizzer"
            code="https://github.com/David-Orson/web-dev-quiz"
            imagecss="omnigateway-logo"
          />
          <Project
            title="Code Quizzer"
            body="Code Quizzer is a quiz website with Questions for people learning JavaScript. I decided to create this app as a challenge to myself by not using any video tutorials, mainly using documentation and Stack Overflow. I want to progress my proficiency with the tech that I typically use."
            body2="Currently there is only one quiz available for users. I intend to implement multiple quizzes with more advanced topics, and a login system so that users can track their high scores and strive to complete all the quizzes I create."
            body3="I also want to take this as an opportunity to solidify the more theoretical concepts that I have been studying but seldom use, having read much of 'You Don't Know JavaScript' and am looking at advanced JavaScript Tutorials on Udemy. "
            image={codeQuizzer}
            badges={cQBadges}
            site="https://davidorson.online/codequizzer"
            code="https://github.com/David-Orson/web-dev-quiz"
            imagecss="codequizzer-logo"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
