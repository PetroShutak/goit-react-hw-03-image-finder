
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {ImageGalleryStyled} from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <>
    <ImageGalleryStyled>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageGalleryStyled>
    </>
  );
};

export default ImageGallery;


// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>