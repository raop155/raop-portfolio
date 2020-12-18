import React from 'react';
import About from '../../../components/landing/About';
import { render, screen } from '@testing-library/react';

let button;

beforeEach(() => {
  render(<About />);
  button = screen.getByText(/resume/i);
});

describe('About Component', () => {
  describe('Resume Link Button', () => {
    test('Should be in the document', async () => {
      expect(button).toBeInTheDocument();
    });

    test('Should open Resume.pdf', async () => {
      expect(button).toHaveAttribute('href', 'Resume.pdf');
    });
  });
});
