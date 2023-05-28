import { ThreeDots } from 'react-loader-spinner';
import { Component } from 'react';
// import { LoaderStyled } from './Loader.styled';

export default class Loader extends Component {
  render() {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 60,
        }}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
