import React from 'react';
import styled, { css } from 'styled-components';

const TitleBoxBlock = styled.div`
  .main-title {
    color: var(--color-03);
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.5;
  }
  .sub-text {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2;
    color: #333;
  }

  margin: ${(props) => props.margin || 0};
  max-width: ${(props) => props.maxWidth || 'auto'};
  width: 100%;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.bigSize &&
    css`
      .main-title {
        font-size: 3.5rem;
      }
      .sub-text {
        font-size: 1.1rem;
      }
    `}
`;

const MainTitle = ({ text }) => {
  return (
    <h1 className="main-title">
      {text.split('\n').map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </h1>
  );
};

const TitleBox = ({ mainTitle = '', subText = '', ...props }) => {
  return (
    <TitleBoxBlock {...props}>
      <MainTitle text={mainTitle} />
      <p className="sub-text">{subText}</p>
    </TitleBoxBlock>
  );
};

export default TitleBox;
