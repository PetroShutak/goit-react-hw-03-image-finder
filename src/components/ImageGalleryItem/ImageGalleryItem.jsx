import React from 'react';
import ImageGalleryItemStyled from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onOpenModal }) => {
  const handleClick = () => {
    onOpenModal(image);
  };

  return (
    <ImageGalleryItemStyled>
      <img src={image.webformatURL} alt={image.alt} onClick={handleClick} />
    </ImageGalleryItemStyled>
  );
};

export default ImageGalleryItem;
