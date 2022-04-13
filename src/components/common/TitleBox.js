import React from 'react';
import styled, { css } from 'styled-components';

const TitleBoxBlock = styled.div`
  .main-title {
    color: #fff;
    font-size: 2.8rem;
    line-height: 1.3;
  }
  .sub-text {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2;
    color: var(--gray-color-02);
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
        font-size: 1.15rem;
      }
    `}
`;

const MainTitle = ({ text }) => {
  return (
    <h1 className="main-title">
      {text.split('\n').map((text, index) => (
        <div key={index} className="Averta">
          {text}
        </div>
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
