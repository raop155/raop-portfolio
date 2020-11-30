import React from 'react';

const ProjectCard = (props) => {
  const { project } = props;
  const { title, image, small_description, company, featured, live, code, video } = project;
  const { name: companyName, country: companyCountry, url: companyURL } = company;
  const { url: urlLive } = live || {};
  const { url: urlCode } = code || {};
  const { url: urlVideo } = video || {};

  return (
    <div className='project-card'>
      <div className='image'>
        <img src={require(`../../assets/${image}`).default} alt={image} />
      </div>
      <div className='information'>
        <h3>{title}</h3>
        <p className='company'>
          <a href={companyURL} rel='noreferrer' target='_blank'>
            {companyName} - {companyCountry}
          </a>
        </p>
        <p>{small_description}</p>
        <div className='links flex'>
          {featured && (
            <a className='link link--yellow' href='#!'>
              Featured
            </a>
          )}

          {live && (
            <a className='link' href={urlLive}>
              Live
            </a>
          )}
          {code && (
            <a className='link' href={urlCode}>
              Code
            </a>
          )}
          {video && (
            <a className='link' href={urlVideo}>
              Video
            </a>
          )}
        </div>
      </div>
      {project.private && <span>Private</span>}
    </div>
  );
};

export default ProjectCard;
