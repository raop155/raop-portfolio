import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('App Component', () => {
  test('Should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
