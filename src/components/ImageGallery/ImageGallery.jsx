
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

export default ImageGallery;


// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>