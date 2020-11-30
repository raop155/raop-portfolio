import React from 'react';
import ProjectCard from '../projects/ProjectCard';

const projects = [
  {
    title: 'Self-service Kiosk | Work Café',
    image: 'workcafe.JPG',
    small_description: "Work Café, Santander's innovative branch concept",
    description: "Work Café, Santander's innovative branch concept",
    company: {
      name: 'Santander',
      url: 'https://www.santander.com/en/stories/work-cafe-santanders-innovative-branch-concept',
      country: 'Chile',
    },
    isFeatured: true,
    isPrivate: true,
    video: {
      url: '#!',
    },
  },
  {
    title: 'Self-service Kiosk',
    image: 'scotiabank.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Scotiabank',
      url: 'https://www.scotiabankchile.cl/',
      country: 'Chile',
    },
    isFeatured: true,
    isPrivate: true,
    video: {
      url: '#!',
    },
  },
  {
    title: 'Self-service Kiosk',
    image: 'werking.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    isFeatured: true,
    isPrivate: true,
    video: {
      url: '#!',
    },
  },
  {
    title: 'Self-service Kiosk',
    image: 'claro.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Claro',
      url: 'https://www.claro.com.pe/',
      country: 'Perú',
    },
    isFeatured: true,
    isPrivate: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Queue & Statistics Dashboard',
    image: 'workcafe-dashboard.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Santander',
      url: 'https://banco.santander.cl/',
      country: 'Chile',
    },
    isFeatured: true,
    isPrivate: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Wheather & Video Player',
    image: 'werking-wheather.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    isFeatured: true,
    isPrivate: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Statistics Dashboard',
    image: 'werking-dashboard.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    isFeatured: true,
    isPrivate: true,
    video: {
      url: '#!',
    },
  },

  {
    title: 'Personal Portfolio',
    image: 'portfolio.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: true,
    isPrivate: false,
    live: {
      url: 'https://raop155.com',
    },
    code: {
      url: 'https://github.com/raop155/raop-portfolio',
    },
  },
  {
    title: 'Loruki',
    image: 'loruki.JPG',
    small_description: 'Small description',
    description: 'Description',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: false,
    isPrivate: false,
    live: {
      url: 'https://vibrant-gates-241c61.netlify.app/',
    },
    code: {
      url: 'https://github.com/raop155/saas-template',
    },
  },
  {
    title: 'La Casita Chaupin',
    image: 'lacasitachaupin.JPG',
    small_description: 'Web with downloadable menu for a small eco-restaurant from Chavin - Perú',
    description: 'Web with downloadable menu for a small eco-restaurant from Chavin - Perú',
    company: {
      name: 'La Casita Chaupin',
      url: 'https://www.facebook.com/La-Casita-Chaupin-345688692166796/',
      country: 'Perú',
    },
    isFeatured: false,
    isPrivate: false,
    live: {
      url: 'https://elated-hodgkin-9360e3.netlify.app/#/',
    },
    code: {
      url: 'https://github.com/raop155/la-casita-chaupin',
    },
  },

  {
    title: 'Star Wars API',
    image: 'starwars.JPG',
    small_description: '',
    description: '',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: false,
    isPrivate: false,
    live: {
      url: 'https://pensive-jennings-f29536.netlify.app/',
    },
    code: {
      url: 'https://github.com/raop155/starwars',
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
