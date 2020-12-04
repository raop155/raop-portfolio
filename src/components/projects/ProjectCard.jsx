import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  const { project } = props;
  const {
    title,
    image,
    small_description,
    company,
    isFeatured,
    isPrivate,
    live,
    code,
    video,
  } = project;
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
          {isFeatured && (
            <a className='link link--yellow' href='#!'>
              Featured
            </a>
          )}

          {live && (
            <a className='link' href={urlLive} target='_blank' rel='noreferrer'>
              Live
            </a>
          )}
          {code && (
            <a className='link' href={urlCode} target='_blank' rel='noreferrer'>
              Code
            </a>
          )}
          {video && (
            <a className='link' href={urlVideo} target='_blank' rel='noreferrer'>
              Video
            </a>
          )}
        </div>
      </div>
      {isPrivate && <span>Private</span>}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;