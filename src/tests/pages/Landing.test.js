import React from 'react';
import Landing from '../../pages/Landing';
import { render } from '@testing-library/react';
import mockIntersectionObserver from '../__mocks__/mockIntersectionObserver';

beforeEach(() => {
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('Landing Component', () => {
  test('Should take a snapshot', () => {
    const { asFragment } = render(<Landing />);
    expect(asFragment(<Landing />)).toMatchSnapshot();
  });
});
