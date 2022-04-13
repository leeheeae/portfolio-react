import React from 'react';
import styled, { css } from 'styled-components';

const ViewBtnBlock = styled.button`
  font-size: 0.92rem;
  font-weight: 500;
  padding: 0.7rem 1.2rem;
  color: #fff;
  background-color: var(--gray-color-01);
  border: 1px solid var(--gray-color-01);
  color: var(--white-color);
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    border: 1px solid var(--gray-color-01);
    color: var(--white-color);
    background: transparent;
  }

  ${(props) =>
    props.alignCenter &&
    css`
      display: block;
      margin: 0 auto;
    `}

  ${(props) =>
    props.big &&
    css`
      font-size: 1rem;
      font-weight: 500;
      padding: 0.9rem 2.5rem;
      border-radius: 10px;
    `}
`;

const ViewBtn = ({ ...rest }) => {
  return <ViewBtnBlock {...rest}>Proejct More</ViewBtnBlock>;
};

export default ViewBtn;
