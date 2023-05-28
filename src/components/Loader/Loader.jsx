import LoaderStyled from './Loader.styled';
import { Puff } from 'react-loader-spinner';

const Loader = () => (
  <LoaderStyled>
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderStyled>
);

export default Loader;
