import { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchImages } from 'utils/fetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyled } from './App.styled'

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: '',
    isLoading: false,
    selectedImage: null,
  };

  handleSearchSubmit = async query => {
    this.setState({
      images: [],
      currentPage: 1,
      query,
      isLoading: true,
    });

    try {
      const images = await fetchImages(query, 1);
      this.setState({ images });
    } catch (error) {
      this.setState({ error: error.message });
    }

    this.setState({ isLoading: false });
  };

  handleLoadMore = async () => {
    const { currentPage, query } = this.state;
    const nextPage = currentPage + 1;

    this.setState({ isLoading: true });

    try {
      const images = await fetchImages(query, nextPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: nextPage,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }

    this.setState({ isLoading: false });
  };

  handleOpenModal = selectedImage => {
    this.setState({ selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
      <AppStyled>
        <ImageGallery images={images} onOpenModal={this.handleOpenModal} />
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
        {selectedImage && (
          <Modal
          largeImageURL={selectedImage.largeImageURL}
          onClose={this.handleCloseModal}
          />
          )}
      </AppStyled>
          </>
    );
  }
}

App.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  selectedImage: PropTypes.object,
};


export default App;
