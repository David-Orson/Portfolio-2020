import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CV from "../components/CV";
import Challenges from "../components/Challenges";
import CTA from "../components/CTA";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Challenges />
      <CTA />
      <Contact />
    </div>
  );
};

export default Home;
