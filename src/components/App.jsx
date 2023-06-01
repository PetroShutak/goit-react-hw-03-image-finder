import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'utils/fetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyled } from './App.styled';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: '',
    isLoading: false,
    selectedImage: null,
    totalCount: 0,
  };

  galleryRef = null;

  componentDidMount() {
    this.galleryRef = React.createRef();
  }

  handleSearchSubmit = async query => {
    this.setState(
      {
        images: [],
        currentPage: 1,
        query,
        isLoading: true,
      },
      async () => {
        try {
          const images = await fetchImages(query, 1);

          if (images.length === 0 && images.length <= 12) {
            this.setState({ isLoading: false });
            this.notify('No images found.', this.state.totalCount);
          } else {
            const totalCount = this.state.images.length;
            this.notify('Loaded first images.', totalCount + images.length);
            
          }
          this.setState({ images });
        } catch (error) {
          this.notify('Invalid request.', this.state.totalCount);
          this.setState({ error: error.message });
        }

        this.setState({ isLoading: false });
      }
    );
  };

  handleLoadMore = async () => {
    const { currentPage, query, images } = this.state;
    const nextPage = currentPage + 1;

    this.setState({ isLoading: true });

    try {
      const images = await fetchImages(query, nextPage);
      if (images.length === 0 && images.length <= 12) {
        this.notify('No more images found.', this.state.images.length);
        this.setState({ isLoading: false });

        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: nextPage,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }

    this.setState({ isLoading: false });
    if (this.galleryRef && this.galleryRef.current) {
      this.galleryRef.current.scrollToNewItems();
    }

    const totalCount = this.state.images.length;
    this.notify('Loaded next images.', totalCount + images.length);
  };

  notify = (message, totalCount) => {
    toast(`${message} Found: ${totalCount} pcs.`);
  };


  handleOpenModal = selectedImage => {
    this.setState({ selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;
    const isShowButton = images.length > 0 && !isLoading && images.length >= 12 && images.length % 12 === 0;

    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <AppStyled>
          <ImageGallery
            images={images}
            onOpenModal={this.handleOpenModal}
            ref={this.galleryRef}
          />
          {isShowButton && <Button onClick={this.handleLoadMore} />}
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
