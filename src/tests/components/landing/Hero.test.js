import React from 'react';
import Hero from '../../../components/landing/Hero';
import { fireEvent, render, screen } from '@testing-library/react';

let button;
let darkModeButton;

beforeEach(() => {
  render(<Hero />);
  button = screen.getByRole('link', { name: /projects/i });
  darkModeButton = screen.getByTestId('darkmode-toggler');
});

describe('Hero Component', () => {
  describe('Projects Link Button', () => {
    test('Should be in the document', async () => {
      expect(button).toBeInTheDocument();
    });
    test('Should have #projects anchor id', async () => {
      expect(button).toHaveAttribute('href', '#projects');
    });
  });
  describe('Dark mode toggler', () => {
    test('Should be in the document', () => {
      expect(darkModeButton).toBeInTheDocument();
    });
    test('Should change to light mode', () => {
      fireEvent.click(darkModeButton);
      expect(darkModeButton).not.toHaveClass('darkmode-switch--active');
    });
  });
});
