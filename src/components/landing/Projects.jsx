import React from 'react';

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
            projects.map((project, index) => (
              <div className='project-card' key={index}>
                <div className='image'>
                  <img src={require(`../../assets/${project.image}`).default} alt={project.image} />
                </div>
                <div className='information'>
                  <h3>{project.title}</h3>
                  <p className='company'>
                    <a href={project.company.url} rel='noreferrer' target='_blank'>
                      {project.company.name} - {project.company.country}
                    </a>
                  </p>
                  <p>{project.small_description}</p>
                  <div className='links flex'>
                    {project.featured && (
                      <a className='link link--yellow' href='#!'>
                        Featured
                      </a>
                    )}

                    {project.live && (
                      <a className='link' href={project.live.url}>
                        Live
                      </a>
                    )}
                    {project.code && (
                      <a className='link' href={project.code.url}>
                        Code
                      </a>
                    )}
                    {project.video && (
                      <a className='link' href={project.video.url}>
                        Video
                      </a>
                    )}
                  </div>
                </div>
                {project.private && <span>Private</span>}
              </div>
            ))}

          {}
        </div>
      </div>
    </section>
  );
};

export default Projects;
