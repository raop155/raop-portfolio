import React from 'react';
import ProjectGallery from '../../../components/projects/ProjectGallery';
import { fireEvent, render, screen } from '@testing-library/react';
import projects from '../../__mocks__/data';

const project = projects[0];
const setIsGalleryOpen = jest.fn();

beforeEach(() => {
  render(
    <ProjectGallery
      id={project.id}
      title={project.title}
      setIsGalleryOpen={setIsGalleryOpen}
      gallery={project.gallery}
    />,
  );
});

describe('ProjectGallery Component', () => {
  it('Should show title', () => {
    const title = screen.getByText(/Self-service Kiosk/i);
    expect(title).toBeInTheDocument();
  });

  it('Should go next & prev gallery image', () => {
    const galleryContainer = screen.getByTestId('gallery');
    const galleryItems = galleryContainer.querySelectorAll('.item');

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1];
    const prevButton = buttons[0];

    fireEvent.click(nextButton);
    expect(galleryItems[0]).toHaveClass('hide');
    expect(galleryItems[1]).not.toHaveClass('hide');

    fireEvent.click(prevButton);
    expect(galleryItems[0]).not.toHaveClass('hide');
    expect(galleryItems[1]).toHaveClass('hide');
  });

  it('Should no change gallery image - prev & next constraints', () => {
    const galleryContainer = screen.getByTestId('gallery');
    const galleryItems = galleryContainer.querySelectorAll('.item');

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];
    const nextButton = buttons[1];
    const galleryArray = project.gallery;
    const lastGalleryItemIndex = galleryArray.length - 1;

    fireEvent.click(prevButton);
    expect(galleryItems[0]).not.toHaveClass('hide');

    galleryArray.forEach((_) => {
      fireEvent.click(nextButton);
    });
    expect(galleryItems[lastGalleryItemIndex]).not.toHaveClass('hide');
  });

  test('Should close gallery', () => {
    const galleryContainer = screen.getByTestId('gallery');
    const closeButton = galleryContainer.querySelector('.button-close');

    fireEvent.click(closeButton);

    expect(setIsGalleryOpen).toHaveBeenCalled();
  });
});
