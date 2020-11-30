import React from 'react';
import ProjectCard from '../projects/ProjectCard';

const projects = [
  {
    title: 'Self-service Kiosk',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Santander',
      url: 'https://banco.santander.cl/',
      country: 'Chile',
    },
    featured: true,
    private: true,
    video: {
      url: '#!',
    },
  },
  {
    title: 'Self-service Kiosk',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Scotiabank',
      url: 'https://www.scotiabankchile.cl/',
      country: 'Chile',
    },
    featured: true,
    private: true,
    video: {
      url: '#!',
    },
  },
  {
    title: 'Self-service Kiosk',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    featured: true,
    private: true,
    video: {
      url: '#!',
    },
  },
  {
    title: 'Self-service Kiosk',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Claro',
      url: 'https://www.claro.com.pe/',
      country: 'Perú',
    },
    featured: true,
    private: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Queue Dashboard',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Santander',
      url: 'https://banco.santander.cl/',
      country: 'Chile',
    },
    featured: true,
    private: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Wheather & Video Player',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    featured: true,
    private: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Statistic Dashboard',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    featured: true,
    private: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Project Title',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Company Name',
      url: '#!',
      country: 'Company Country',
    },
    featured: false,
    private: false,
    live: {
      url: '#!',
    },
    code: {
      url: '#!',
    },
  },
  {
    title: 'Project Title',
    image: 'about_me.jpeg',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Company Name',
      url: '#!',
      country: 'Company Country',
    },
    featured: false,
    private: false,
    live: {
      url: '#!',
    },
    code: {
      url: '#!',
    },
  },
];

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <h2>My Lastest Projects</h2>

        <div className='projects-container'>
          {projects.length &&
            projects.map((project, index) => <ProjectCard key={index} project={project} />)}

          {}
        </div>
      </div>
    </section>
  );
};

export default Projects;
