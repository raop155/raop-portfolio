import React from 'react';
import Landing from '../../pages/Landing';
import { render } from '@testing-library/react';

// afterEach(cleanup);

describe('Landing Component', () => {
  test('Should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
