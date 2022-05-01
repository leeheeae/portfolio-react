import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const SectionBlock = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResponsiveSize = styled(Responsive)`
  padding: 5rem 1rem;
`;

const Section = ({ children }) => {
  return (
    <SectionBlock>
      <ResponsiveSize>{children}</ResponsiveSize>
    </SectionBlock>
  );
};

export default Section;
