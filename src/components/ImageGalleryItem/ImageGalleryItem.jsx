import React from 'react';
import ImageGalleryItemStyled from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  return (
    <ImageGalleryItemStyled>
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </ImageGalleryItemStyled>
  );
};

export default ImageGalleryItem;

// <li class="gallery-item">
//   <img src="" alt="" />
// </li>
