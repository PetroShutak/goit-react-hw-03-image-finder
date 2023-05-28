import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" className="Button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};

export default Button;
