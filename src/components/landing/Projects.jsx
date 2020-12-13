import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import projects from '../../api/data';
import ProjectsFilter from '../projects/ProjectsFilter';

const Projects = () => {
  const [filteredProjects, setfilteredProjects] = useState(projects);

  return (
    <section id='projects'>
      <div className='container'>
        <h2>My Lastest Projects</h2>
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
