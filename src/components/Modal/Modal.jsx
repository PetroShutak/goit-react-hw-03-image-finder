import React from 'react';
import { Overlay, ModalContent, ModalImage } from './Modal.styled';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseClick = () => {
    this.props.onClose();
  };

  handleImageClick = e => {
    e.stopPropagation();
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <Overlay onClick={this.handleCloseClick}>
        <ModalContent>
          <ModalImage src={largeImageURL} alt="Modal" onClick={this.handleImageClick} />

        </ModalContent>
      </Overlay>
    );
  }
}

export default Modal;
