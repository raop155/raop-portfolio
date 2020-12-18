import React, { useRef } from 'react';
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
import PDF from '../../assets/Resume.pdf';

import { faFileCode, faCode, faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = ({ setCurrentSection }) => {
  const refComponent = useRef(null);

  const changeHeader = () => {
    console.log('About Section');
    setCurrentSection('about');
  };

  useIntersectionObserver({
    target: refComponent,
    onIntersect: changeHeader,
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  return (
    <section id='about'>
      <div className='container flex'>
        <h2 ref={refComponent}>About Me</h2>
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
              Well-organised person, responsible and a problem solver. Like video games, married and
              father of one boy.
            </p>
            <p>
              Enthusiast in the entire Front-end spectrum, capable of working as a Full-stack
              Developer position on ambitious projects with positive people.
            </p>
            <a
              // href={require('../../assets/Resume.pdf').default}
              href={PDF}
              target='_blank'
              rel='noreferrer'
              className='button button--primary'
            >
              RESUME
            </a>
          </div>

          <div className='image'>
            <img src={AboutMeImage} alt='Father with son' />
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

        <h3>Awards</h3>
        <div className='awards'>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              title='award-video'
              src='https://player.vimeo.com/video/77175594?title=0&byline=0&portrait=0'
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder='0'
              allow='autoplay; fullscreen'
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
          <p>Gildemeister Hyundai | Best branch of the future 2013</p>
        </div>
      </div>
    </section>
  );
};

export default About;
