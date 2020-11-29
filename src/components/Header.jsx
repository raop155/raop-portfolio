import React from 'react';

const Header = () => {
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
