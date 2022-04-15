import React from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';

const NotFoundPageBlock = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <NotFoundPageBlock className="Averta">
        Not Found Page : (
      </NotFoundPageBlock>
    </>
  );
};

export default NotFoundPage;
