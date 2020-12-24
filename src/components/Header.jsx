import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id='header'>
      <div className='container flex'>
        <a className='logo' href='#hero'>
          <p>R.</p>
        </a>
        <nav id='navbar' data-testid='navbar' className={isMenuOpen ? 'flex active' : 'flex'}>
          <ul>
            <li>
              <a
                className={currentSection === 'hero' ? 'nav-item active' : 'nav-item'}
                href='#hero'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={currentSection === 'projects' ? 'nav-item active' : 'nav-item'}
                href='#projects'
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={currentSection === 'about' ? 'nav-item active' : 'nav-item'}
                href='#about'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={currentSection === 'contact' ? 'nav-item active' : 'nav-item'}
                href='#contact'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className='toggler'>
          <i
            className={isMenuOpen ? 'hamburger-icon' : 'hamburger-icon hamburger-icon--active'}
            onClick={() => setIsMenuOpen(true)}
            data-testid='hamburger-button'
          >
            <FontAwesomeIcon icon={faHamburger} size='2x' />
          </i>
          <i
            className={isMenuOpen ? 'close-icon close-icon--active' : 'close-icon'}
            onClick={() => setIsMenuOpen(false)}
            data-testid='close-button'
          >
            <FontAwesomeIcon icon={faTimes} size='2x' />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
