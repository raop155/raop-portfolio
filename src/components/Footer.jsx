import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const date = new Date();

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='social'>
          <ul className='flex'>
            <li>
              <a href='https://github.com/raop155' rel="noreferrer" target='_blank' className='link'>
                <i>
                  <FontAwesomeIcon icon={faGithub} size='2x' />
                </i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/ricardo-olarte-4a9b621b6/'
                rel="noreferrer"
                target='_blank'
                className='link'
              >
                <i>
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </i>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/raop155'  rel="noreferrer" target='_blank' className='link'>
                <i>
                  <FontAwesomeIcon icon={faTwitter} size='2x' />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <p>
          Copyright &#169; {date.getFullYear()} <span>Ricardo Olarte</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
