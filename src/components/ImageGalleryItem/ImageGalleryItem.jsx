import PropTypes from 'prop-types';
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

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
