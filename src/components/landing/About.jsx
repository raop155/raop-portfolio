import React from 'react';
import AboutMeImage from '../../assets/about_me.jpeg';

const About = () => {
  return (
    <section id='about'>
      <div className='container flex'>
        <h2>About Me</h2>
        <div className='description'>
          <p>
            I am currently working as a Front-end Developer at{' '}
            <a href='https://www.px-group.com/' target='_blank'>
              Px-Group
            </a>{' '}
            for 8+ years.
          </p>
          <p>
            Well-organised person, responsible and a problem solver. Like videogames and father of
            one boy.
          </p>
          <p>
            Enthusiast in the entire Front-end spectrum, capable of working as a Full-stack
            Developer position on ambitious projects with positive people.
          </p>
        </div>
        <div className='image'>
          <img src={AboutMeImage} alt='Father with son' />
          {/* <img src={require('../../assets/about_me.jpeg').default} alt='Father with son' /> */}
        </div>
        <div className='skills'></div>
      </div>
    </section>
  );
};

export default About;
