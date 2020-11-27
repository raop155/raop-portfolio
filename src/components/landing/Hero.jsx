import React from 'react';

const Hero = () => {
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
      </div>
    </main>
  );
};

export default Hero;
