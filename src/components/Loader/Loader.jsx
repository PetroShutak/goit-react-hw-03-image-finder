import { Radio } from 'react-loader-spinner';
import { Component } from 'react';
// import { LoaderStyled } from './Loader.styled';

export default class Loader extends Component {
  render() {
    return (
           <div style={
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 60,
          }
        }>
      <Radio
      colors={['#4d88a9', '#4d9ca9', '#4dadb1']}
      speed={1}
      animating={true}
      />
      </div>
    );
  }
}
