import React from 'react';
import Header from '../../components/Header';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

let homeLink;
let projectsLink;
let aboutLink;
let contactLink;
let outSideRerender;

beforeEach(() => {
  const { rerender } = render(<Header />);
  outSideRerender = rerender;
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

  test('Should open navbar', () => {
    const navbar = screen.getByTestId('navbar');
    const hamburgerButton = screen.getByTestId('hamburger-button');

    fireEvent.click(hamburgerButton);

    expect(hamburgerButton).not.toHaveClass('hamburger-icon--active');
    expect(navbar).toHaveClass('active');
  });

  test('Should close navbar', () => {
    const navbar = screen.getByTestId('navbar');
    const closebutton = screen.getByTestId('close-button');

    fireEvent.click(closebutton);

    expect(closebutton).not.toHaveClass('close-icon--active');
    expect(navbar).not.toHaveClass('active');
  });

  test('Should change navlink style from prop', async () => {
    outSideRerender(<Header currentSection='hero' />);
    let navbar;
    let navLinks;

    navbar = screen.getByTestId('navbar');
    navLinks = navbar.querySelectorAll('.nav-item');
    expect(navLinks[0]).toHaveClass('active');

    outSideRerender(<Header currentSection='projects' />);

    navbar = screen.getByTestId('navbar');
    navLinks = navbar.querySelectorAll('.nav-item');
    expect(navLinks[1]).toHaveClass('active');

    outSideRerender(<Header currentSection='about' />);

    navbar = screen.getByTestId('navbar');
    navLinks = navbar.querySelectorAll('.nav-item');
    expect(navLinks[2]).toHaveClass('active');

    outSideRerender(<Header currentSection='contact' />);

    navbar = screen.getByTestId('navbar');
    navLinks = navbar.querySelectorAll('.nav-item');
    expect(navLinks[3]).toHaveClass('active');
  });
});
