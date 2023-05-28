import axios from 'axios';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

// const API_KEY = '34734922-71a756c5ae22b2ca14df3cfaf';

export const App = () => {
  return (
    <>
      <Searchbar />
      <Loader />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        Loading... Please wait...
      </div>
    </>
  );
};
