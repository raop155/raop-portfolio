import React from 'react';
import ProjectCard from '../projects/ProjectCard';
import projects from '../../api/data';
import ProjectsFilter from '../projects/ProjectsFilter';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <h2>My Lastest Projects</h2>
        <ProjectsFilter />
        <div className='projects-container'>
          {projects.length &&
            projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
