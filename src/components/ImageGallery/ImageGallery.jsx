import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

class ImageGallery extends Component {
  galleryRef = React.createRef();

  scrollToNewItems() {
    if (this.galleryRef && this.galleryRef.current) {
      this.galleryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { images, onOpenModal } = this.props;

    return (
      <>
        <ImageGalleryStyled ref={this.galleryRef}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onOpenModal={onOpenModal}
            />
          ))}
        </ImageGalleryStyled>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;

// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>
