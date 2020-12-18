import React from 'react';
import Landing from '../../pages/Landing';
import { render } from '@testing-library/react';

describe('Landing Component', () => {
  test('Should take a snapshot', () => {
    const { asFragment } = render(<Landing />);
    expect(asFragment(<Landing />)).toMatchSnapshot();
  });
});
