import React, { useState, useRef } from 'react';
import ProjectCard from '../projects/ProjectCard';
import projects from '../../api/data';
import ProjectsFilter from '../projects/ProjectsFilter';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Projects = (_, ref) => {
  const [filteredProjects, setfilteredProjects] = useState(projects);

  return (
    <section id='projects'>
      <div className='container'>
        <h2 ref={ref}>My Latest Projects</h2>
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

export default React.forwardRef(Projects);
