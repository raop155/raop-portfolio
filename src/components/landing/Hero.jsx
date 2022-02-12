import React from 'react';
import DarkModeToggler from '../hero/DarkModeToggler';
import PropTypes from 'prop-types';

const Hero = React.forwardRef((_, ref) => {
  return (
    <main id='hero'>
      <div className='container flex'>
        <h1>I'm Ricardo</h1>
        <p>Front-end Developer</p>
        <p className="description">
            Passionate about applying the necessary technologies to improve
        </p>
        <a href='#projects' className='button button--primary'>
          PROJECTS
        </a>

        <DarkModeToggler />
        <div className='hero-observer' ref={ref}></div>
      </div>
    </main>
  );
});

Hero.propTypes = {
  _: PropTypes.any,
};

export default Hero;
