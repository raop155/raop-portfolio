import React from 'react';
import DarkModeToggler from '../hero/DarkModeToggler';

const Hero = (_, ref) => {
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
        <div className='hero-observer' ref={ref}></div>
      </div>
    </main>
  );
};

export default React.forwardRef(Hero);
