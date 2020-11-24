import React from 'react';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Hero from '../components/landing/Hero';
import Projects from '../components/landing/Projects';

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Landing;
