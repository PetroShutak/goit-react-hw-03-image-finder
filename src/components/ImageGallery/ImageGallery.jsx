import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <>
      <ImageGalleryStyled>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onOpenModal={onOpenModal} />
        ))}
      </ImageGalleryStyled>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;


// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>