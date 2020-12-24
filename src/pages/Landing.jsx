import { useRef } from 'react';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Hero from '../components/landing/Hero';
import Projects from '../components/landing/Projects';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import PropTypes from 'prop-types';

const Landing = ({ setCurrentSection }) => {
  const heroComponent = useRef(null);
  const projectsComponent = useRef(null);
  const aboutComponent = useRef(null);
  const contactComponent = useRef(null);

  useIntersectionObserver({
    target: heroComponent,
    onIntersect: () => setCurrentSection('hero'),
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  useIntersectionObserver({
    target: projectsComponent,
    onIntersect: () => setCurrentSection('projects'),
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  useIntersectionObserver({
    target: aboutComponent,
    onIntersect: () => setCurrentSection('about'),
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  useIntersectionObserver({
    target: contactComponent,
    onIntersect: () => setCurrentSection('contact'),
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  return (
    <div>
      <Hero ref={heroComponent} />
      <Projects ref={projectsComponent} />
      <About ref={aboutComponent} />
      <Contact ref={contactComponent} />
    </div>
  );
};

Landing.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Landing;
