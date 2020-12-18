import React from 'react';
import Projects from '../../../components/landing/Projects';
import { render, screen, fireEvent } from '@testing-library/react';
import projects from '../../../api/data';

beforeEach(() => {
  render(<Projects />);
});

describe('Projects Component', () => {
  test('Should section title be in the document', () => {
    const sectionTitle = screen.getByText(/My Latest Projects/i);
    expect(sectionTitle).toBeInTheDocument();
  });

  test('Should filters text be in the document', () => {
    const filtersText = screen.getByText(/filters/i);
    expect(filtersText).toBeInTheDocument();
  });

  test('Should render initial projects "Featured"', () => {
    const listItems = screen.getAllByTestId('project-card');
    expect(listItems).toHaveLength(8);
  });

  describe('ProjectsFilter Component', () => {
    test('Should change filter select value & filters count text', async () => {
      const filterSelect = screen.getByTestId('filter');
      const filtersText = screen.getByText(/filters/i);
      const countText = filtersText.querySelector('span');
      const value = 'All';

      fireEvent.change(filterSelect, { target: { value } });
      expect(filterSelect.value).toBe(value);
      expect(countText).toHaveTextContent(`${projects.length} of ${projects.length}`);
    });
  });

  describe('ProjectCard Component', () => {
    test('Should not show ProjectGallery Component', () => {
      const projectCards = screen.getAllByTestId('project-card');
      const gallery = projectCards[0].querySelector('.project-gallery');
      expect(gallery).not.toBeInTheDocument();
    });

    test('Should show ProjectGallery Component', () => {
      const projectCards = screen.getAllByTestId('project-card');
      const galleryButton = projectCards[0].querySelector('.gallery-button');

      fireEvent.click(galleryButton);

      const gallery = projectCards[0].querySelector('.project-gallery');
      expect(gallery).toBeInTheDocument();
    });
  });
});
