import React, { useRef } from 'react';
import DarkModeToggler from '../hero/DarkModeToggler';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Hero = ({ setCurrentSection }) => {
  const refComponent = useRef(null);

  const changeHeader = () => {
    console.log('Hero Section');
    setCurrentSection('hero');
  };

  useIntersectionObserver({
    target: refComponent,
    onIntersect: changeHeader,
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  return (
    <main id='hero'>
      <div className='container flex'>
        <h1>I'm Ricardo</h1>
        <p>Full-stack Developer focused on Front-end development</p>
        <p>
          <i>
            Passionate about applying the necessary technologies to improve the UX & quality of the
            product
          </i>
        </p>
        <a href='#projects' className='button button--primary'>
          PROJECTS
        </a>

        <DarkModeToggler />
        <div className='hero-observer' ref={refComponent}></div>
      </div>
    </main>
  );
};

export default Hero;
