import React from 'react';
import Landing from '../../pages/Landing';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Landing Component', () => {
  test('Should take a snapshot', () => {
    const { asFragment } = render(<Landing />);
    expect(asFragment(<Landing />)).toMatchSnapshot();
  });
});
