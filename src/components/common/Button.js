import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.92rem;
  font-weight: 500;
  padding: 0.7rem 1.2rem;
  margin: ${(props) => props.margin || 0};
  background-color: var(--white-color);
  border: 1px solid var(--white-color);
  color: var(--black-color);
  border-radius: 4px;
  transition: 0.2s;

  svg {
    margin-right: 4px;
  }
`;

const Button = ({ children, ...rest }) => {
  return <ButtonBox {...rest}>{children}</ButtonBox>;
};

export default Button;
