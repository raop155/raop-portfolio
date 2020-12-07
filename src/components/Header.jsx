import React, { useEffect } from 'react';

const Header = () => {
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

      // console.log(windowScroll, contactSectionOffset);

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
        <a href='#hero'>
          <p>R.</p>
        </a>
        <nav className='flex'>
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
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
