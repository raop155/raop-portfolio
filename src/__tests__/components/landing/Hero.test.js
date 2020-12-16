import React from 'react';
import Hero from '../../../components/landing/Hero';
import { render, screen } from '@testing-library/react';

describe('Landing Component', () => {
  describe('Projects Link', () => {
    test('Projects button should be in the document', async () => {
      render(<Hero />);
      const button = screen.getByRole('link', { name: /projects/i });
      expect(button).toBeInTheDocument();
    });

    test('Projects button should redirect to Projects section #projects', async () => {
      render(<Hero />);
      const button = screen.getByRole('link', { name: /projects/i });
      const anchorId = button.getAttribute('href');
      expect(anchorId).toEqual('#projects');
    });
  });
});
