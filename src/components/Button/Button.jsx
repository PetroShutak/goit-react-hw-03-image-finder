import React from 'react';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" className="Button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
