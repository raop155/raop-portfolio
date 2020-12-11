import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectGallery = (props) => {
  const { id, title, setIsGalleryOpen, gallery } = props;
  const galleryItems = useRef(null);
  const currentImageIndex = useRef(0);

  const showGalleryItem = (index) => {
    // console.log(currentImageIndex.current);
    galleryItems.current.forEach((item) => {
      item.classList.add('hide');
    });
    galleryItems.current[index] && galleryItems.current[index].classList.remove('hide');
  };

  const nextImage = () => {
    if (currentImageIndex.current >= gallery.length - 1) return;
    currentImageIndex.current++;
    showGalleryItem(currentImageIndex.current);
  };

  const prevImage = () => {
    if (currentImageIndex.current <= 0) return;
    currentImageIndex.current--;
    showGalleryItem(currentImageIndex.current);
  };

  useEffect(() => {
    galleryItems.current = document.querySelectorAll(`.item[data-role="gallery-item-${id}"]`);
    showGalleryItem(currentImageIndex.current);
  }, [id]);

  return (
    <div className='project-gallery'>
      <div className='container flex'>
        <div className='button-close' onClick={() => setIsGalleryOpen(false)}></div>
        <div className='gallery-container'>
          <h2 className='title'>{title}</h2>
          <div className='gallery'>
            {gallery?.length > 0 &&
              gallery.map((item) => (
                <div className='item' data-role={`gallery-item-${id}`} key={item.image}>
                  <img src={require(`../../assets/${item.image}`).default} alt={item.image} />
                  <div className='description'>{item.description}</div>
                </div>
              ))}

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

        {/* <button className='button-close' onClick={() => setIsGalleryOpen(false)}>
          &times;
        </button> */}
      </div>
    </div>
  );
};

export default ProjectGallery;
