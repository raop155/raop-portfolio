import React from 'react';

const Contact = () => {
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
        <h2>Contact me</h2>

        <form id='form' name='contact' method='POST'>
          <input type='hidden' name='form-name' value='contact' />

          <div className='form-group'>
            <div>
              <label htmlFor='name'>Name:</label>
            </div>
            <input type='text' name='name' id='name' placeholder='Enter your name here' />
          </div>

          <div className='form-group'>
            <div>
              <label htmlFor='email'>Email:</label>
            </div>

            <input type='email' name='email' id='email' placeholder='Enter your email here' />
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
