import React from 'react';

const ProjectGallery = (props) => {
  const { title, setIsGalleryOpen } = props;

  return (
    <div className='project-gallery'>
      <div className='content flex'>
        Gallery: {title}
        <button onClick={() => setIsGalleryOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default ProjectGallery;
