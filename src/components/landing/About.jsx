import React from 'react';
import AboutMeImage from '../../assets/about_me.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faNode,
  faReact,
  faPhp,
  faHtml5,
  faCss3,
  faVuejs,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

import { faFileCode, faCode, faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id='about'>
      <div className='container flex'>
        <h2>About Me</h2>
        <div className='information flex'>
          <div className='description'>
            <p>
              I am currently working as a Front-end Developer at{' '}
              <a href='https://www.px-group.com/' rel='noreferrer' target='_blank'>
                Px-Group
              </a>{' '}
              for 8+ years.
            </p>
            <p>
              Well-organised person, responsible and a problem solver. Like videogames, married and
              father of one boy.
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
        </div>

        <h3>Skills</h3>
        <div className='skills flex'>
          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faHtml5} size='3x' />
            </i>
            <p>HTML</p>
          </div>
          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faCss3} size='3x' />
            </i>
            <p>CSS</p>
          </div>
          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faJsSquare} size='3x' />
            </i>
            <p>JavaScript</p>
          </div>
          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faReact} size='3x' />
            </i>
            <p>React</p>
          </div>
          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faVuejs} size='3x' />
            </i>
            <p>Vue</p>
          </div>
          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faNode} size='3x' />
            </i>
            <p>Node.js</p>
          </div>
          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faDatabase} size='3x' />
            </i>
            <p>MongoDB</p>
          </div>

          <div className='skill'>
            <i>
              {' '}
              <FontAwesomeIcon icon={faPhp} size='3x' />
            </i>
            <p>PHP</p>
          </div>

          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faDatabase} size='3x' />
            </i>
            <p>MySQL</p>
          </div>

          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faSass} size='3x' />
            </i>
            <p>Sass</p>
          </div>

          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faLaptopCode} size='3x' />
            </i>
            <p>Electron</p>
          </div>

          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faFileCode} size='3x' />
            </i>
            <p>jQuery</p>
          </div>

          <div className='skill'>
            <i>
              <FontAwesomeIcon icon={faCode} size='3x' />
            </i>
            <p>ActionScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
