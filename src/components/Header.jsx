import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // Get hamburger/close buttons objects & Navbar object
  useEffect(() => {
    const navbar = document.querySelector('#navbar');
    const hamburgerButton = document.querySelector('.hamburger-icon');
    const closeButton = document.querySelector('.close-icon');

    const openMenu = (open) => {
      if (open) {
        hamburgerButton.classList.remove('hamburger-icon--active');
        closeButton.classList.add('close-icon--active');
        navbar.classList.add('active');
      } else {
        closeButton.classList.remove('close-icon--active');
        hamburgerButton.classList.add('hamburger-icon--active');
        navbar.classList.remove('active');
      }
    };

    hamburgerButton.addEventListener('click', (e) => openMenu(true));
    closeButton.addEventListener('click', (e) => openMenu(false));

    return () => {
      hamburgerButton.removeEventListener('click', (e) => openMenu(true));
      closeButton.removeEventListener('click', (e) => openMenu(false));
    };
  }, []);

  // Initialize variables & add scroll event
  useEffect(() => {
    const navbarHeight = document.querySelector('#header').clientHeight;
    const navLinks = document.querySelectorAll('.nav-item');
    const heroSection = document.querySelector('#hero');
    const projectsSection = document.querySelector('#projects');
    const aboutSection = document.querySelector('#about');
    const contactSection = document.querySelector('#contact');

    const checkScrollPosition = () => {
      const windowScroll = window.scrollY;

      const heroSectionOffset =
        heroSection.getBoundingClientRect().top + windowScroll - navbarHeight;
      const projectsSectionOffset =
        projectsSection.getBoundingClientRect().top + windowScroll - navbarHeight;
      const aboutSectionOffset =
        aboutSection.getBoundingClientRect().top + windowScroll - navbarHeight;
      const contactSectionOffset =
        contactSection.getBoundingClientRect().top + windowScroll - navbarHeight - 250;

      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });

      if (windowScroll >= heroSectionOffset && windowScroll < projectsSectionOffset) {
        navLinks.forEach((navLink) => {
          if (navLink.getAttribute('href') === '#hero') {
            navLink.classList.add('active');
          }
        });
      } else if (windowScroll >= projectsSectionOffset && windowScroll < aboutSectionOffset) {
        navLinks.forEach((navLink) => {
          if (navLink.getAttribute('href') === '#projects') {
            navLink.classList.add('active');
          }
        });
      } else if (windowScroll >= aboutSectionOffset && windowScroll < contactSectionOffset) {
        navLinks.forEach((navLink) => {
          if (navLink.getAttribute('href') === '#about') {
            navLink.classList.add('active');
          }
        });
      } else if (windowScroll >= contactSectionOffset) {
        navLinks.forEach((navLink) => {
          if (navLink.getAttribute('href') === '#contact') {
            navLink.classList.add('active');
          }
        });
      }
    };

    document.addEventListener('scroll', checkScrollPosition);

    return () => {
      document.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <header id='header'>
      <div className='container flex'>
        <a className='logo' href='#hero'>
          <p>R.</p>
        </a>
        <nav id='navbar' className='flex'>
          <ul>
            <li>
              <a className='nav-item active' href='#hero'>
                Home
              </a>
            </li>
            <li>
              <a className='nav-item' href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a className='nav-item' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='nav-item' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className='toggler'>
          <i className='hamburger-icon hamburger-icon--active'>
            <FontAwesomeIcon icon={faHamburger} size='2x' />
          </i>
          <i className='close-icon'>
            <FontAwesomeIcon icon={faTimes} size='2x' />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
