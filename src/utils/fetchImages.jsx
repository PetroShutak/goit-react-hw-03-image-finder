import axios from "axios";

export const fetchImages = async (query, page) => {
    const API_KEY = '34734922-71a756c5ae22b2ca14df3cfaf';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    try {
      const response = await axios.get(url);
      return response.data.hits;
    } catch (error) {
      throw new Error(error.message);
    }
  };