import React from 'react';
import styled from 'styled-components';

const TitleBoxBlock = styled.div`
  .main-title {
    text-align: center;
    color: #fff;
    font-size: 3.5rem;
    line-height: 1.4;
  }
  .sub-text {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--gray-color-02);
    text-align: center;
  }
`;

const MainTitle = ({ text }) => {
  return (
    <h1 className="Averta main-title">
      {text.split('\n').map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </h1>
  );
};

const TitleBox = ({ mainTitle, subText }) => {
  return (
    <TitleBoxBlock>
      <MainTitle text={mainTitle} />
      <p className="sub-text">{subText}</p>
    </TitleBoxBlock>
  );
};

export default TitleBox;
