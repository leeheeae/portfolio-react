import React from 'react';
import styled from 'styled-components';

const SectionTitleBlock = styled.div`
  letter-spacing: 2px;
  font-weight: 600;

  .subTitle {
    margin-bottom: 20px;
    color: var(--color-04);
  }
  .mainTitle {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.5;
    color: var(--color-03);
  }
`;

const lineChange = (text) => {
  return (
    <>
      {text.split(`\n`).map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </>
  );
};

const SectionTitle = ({ mainTitle = '', subTitle = '' }) => {
  return (
    <SectionTitleBlock>
      <h3 className="subTitle">{subTitle}</h3>
      <h1 className="mainTitle">{lineChange(mainTitle)}</h1>
    </SectionTitleBlock>
  );
};

export default SectionTitle;
