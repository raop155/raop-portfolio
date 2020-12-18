import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Contact = ({ setCurrentSection }) => {
  const refComponent = useRef(null);

  const changeHeader = () => {
    console.log('Contact Section');
    setCurrentSection('contact');
  };

  useIntersectionObserver({
    target: refComponent,
    onIntersect: changeHeader,
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  return (
    <section id='contact'>
      <div className='arrow-down'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 100 102'
          height='75'
          width='100%'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className='svgcolor-light'
        >
          <path className='path-light' d='M0 0 L50 100 L100 0 Z' fill='#222' stroke='#222'></path>
        </svg>
      </div>

      <div className='container'>
        <h2 ref={refComponent}>Contact me</h2>

        <form id='form' name='contact' method='POST'>
          <input type='hidden' name='form-name' value='contact' />

          <div className='form-group'>
            <div>
              <label htmlFor='name'>Name:</label>
            </div>
            <input
              type='text'
              name='name'
              id='name'
              minLength='2'
              placeholder='Enter your name here'
              required
            />
          </div>

          <div className='form-group'>
            <div>
              <label htmlFor='email'>Email:</label>
            </div>

            <input
              type='email'
              name='email'
              id='email'
              minLength='2'
              placeholder='Enter your email here'
              required
            />
          </div>

          <div className='form-group'>
            <div>
              <label htmlFor='message'>Message:</label>
            </div>
            <textarea name='message' id='message' placeholder='Enter a message here'></textarea>
          </div>
          <div className='form-group'>
            <button className='button button--primary'>SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
