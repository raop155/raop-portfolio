import React from 'react';
import Header from '../../components/Header';
import { fireEvent, render, screen } from '@testing-library/react';

let homeLink;
let projectsLink;
let aboutLink;
let contactLink;

beforeEach(() => {
  render(<Header />);
  homeLink = screen.getByRole('link', { name: /home/i });
  projectsLink = screen.getByRole('link', { name: /projects/i });
  aboutLink = screen.getByRole('link', { name: /about/i });
  contactLink = screen.getByRole('link', { name: /contact/i });
});

describe('Header Component', () => {
  describe('Nav Links', () => {
    test('Should be in the document', async () => {
      expect(homeLink).toBeInTheDocument();
      expect(projectsLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });

    test('Should have respectives # anchors id', async () => {
      expect(homeLink).toHaveAttribute('href', '#hero');
      expect(projectsLink).toHaveAttribute('href', '#projects');
      expect(aboutLink).toHaveAttribute('href', '#about');
      expect(contactLink).toHaveAttribute('href', '#contact');
    });
  });
});
