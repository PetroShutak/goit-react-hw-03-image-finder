import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: '',
    isLoading: false,
  };

  handleSearchSubmit = async query => {
    this.setState({ images: [], currentPage: 1, query, isLoading: true });

    const API_KEY = '34734922-71a756c5ae22b2ca14df3cfaf';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    try {
      const response = await axios.get(url);
      this.setState({ images: response.data.hits });
    } catch (error) {
      this.setState({ error: error.message });
    }

    this.setState({ isLoading: false });
  };

  handleLoadMore = async () => {
    const { currentPage, query } = this.state;
    const API_KEY = '34734922-71a756c5ae22b2ca14df3cfaf';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${query}&page=${
      currentPage + 1
    }&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    try {
      this.setState({ isLoading: true });
      const response = await axios.get(url);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        currentPage: prevState.currentPage + 1,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({ isLoading: false });
    
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}

      </div>
    );
  }
}

export default App;
