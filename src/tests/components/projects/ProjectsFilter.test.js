import React from 'react';
import ProjectsFilter from '../../../components/projects/ProjectsFilter';
import { fireEvent, render, screen } from '@testing-library/react';
import projects from '../../__mocks__/data';

const setfilteredProjects = jest.fn();

describe('ProjectsFilter Component', () => {
  test('Should filters be in the document', () => {
    render(
      <ProjectsFilter
        projects={projects}
        filteredProjects={projects}
        setfilteredProjects={setfilteredProjects}
      />,
    );

    const filtersText = screen.getByText(/filters/i);
    expect(filtersText).toBeInTheDocument();
  });

  test('Should change filter value', () => {
    render(
      <ProjectsFilter
        projects={projects}
        filteredProjects={projects}
        setfilteredProjects={setfilteredProjects}
      />,
    );

    const filterInput = screen.getByTestId('filter');

    fireEvent.change(filterInput, { target: { value: 'Private' } });
    expect(filterInput.value).toBe('Private');

    fireEvent.change(filterInput, { target: { value: 'Country' } });
    expect(filterInput.value).toBe('Country');

    fireEvent.change(filterInput, { target: { value: '' } });
    expect(filterInput.value).toBe('All');
  });

  test('Should show subfilter input', () => {
    render(
      <ProjectsFilter
        projects={projects}
        filteredProjects={projects}
        setfilteredProjects={setfilteredProjects}
      />,
    );

    const filterInput = screen.getByTestId('filter');
    fireEvent.change(filterInput, { target: { value: 'Country' } });

    const subFilterInput = screen.getByTestId('subfilter');
    expect(subFilterInput).toBeInTheDocument();

    fireEvent.change(subFilterInput, { target: { value: 'Chile' } });
    expect(subFilterInput.value).toBe('Chile');
  });
});
