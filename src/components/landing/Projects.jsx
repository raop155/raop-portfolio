import React, { useState, useRef } from 'react';
import ProjectCard from '../projects/ProjectCard';
import projects from '../../api/data';
import ProjectsFilter from '../projects/ProjectsFilter';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Projects = ({ setCurrentSection }) => {
  const [filteredProjects, setfilteredProjects] = useState(projects);

  const refComponent = useRef(null);

  const changeHeader = () => {
    console.log('Projects Section');
    setCurrentSection('projects');
  };

  useIntersectionObserver({
    target: refComponent,
    onIntersect: changeHeader,
    rootMargin: '0px',
    threshold: 1.0,
    enabled: true,
  });

  return (
    <section id='projects'>
      <div className='container'>
        <h2 ref={refComponent}>My Latest Projects</h2>
        <ProjectsFilter
          projects={projects}
          filteredProjects={filteredProjects}
          setfilteredProjects={setfilteredProjects}
        />
        <div className='projects-container'>
          {filteredProjects.length &&
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
