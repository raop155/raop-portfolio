import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ProjectGallery = (props) => {
  const { id, title, setIsGalleryOpen, gallery } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex >= gallery.length - 1) return;
    setCurrentImageIndex((prev) => prev + 1);
  };

  const prevImage = () => {
    if (currentImageIndex <= 0) return;
    setCurrentImageIndex((prev) => prev - 1);
  };

  return (
    <div className='project-gallery' data-testid='gallery'>
      <div className='container flex'>
        <div className='button-close' onClick={() => setIsGalleryOpen(false)}></div>
        <div className='gallery-container'>
          <h2 className='title'>{title}</h2>
          <div className='gallery'>
            {gallery?.length > 0 &&
              gallery.map((item, index) => {
                const showImage = currentImageIndex === index;
                return (
                  <div
                    className={showImage ? 'item' : 'item hide'}
                    data-role={`gallery-item-${id}`}
                    key={item.image}
                  >
                    <img src={require(`../../assets/${item.image}`).default} alt={item.image} />
                    <div className='description'>{item.description}</div>
                  </div>
                );
              })}

            {gallery?.length && (
              <>
                <button className='button-arrow-left' onClick={prevImage}>
                  <i>
                    <FontAwesomeIcon icon={faArrowLeft} size='2x' />
                  </i>
                </button>
                <button className='button-arrow-right' onClick={nextImage}>
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} size='2x' />
                  </i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectGallery.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setIsGalleryOpen: PropTypes.func.isRequired,
  gallery: PropTypes.array.isRequired,
};

export default ProjectGallery;
