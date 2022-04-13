import React from 'react';
import Header from '../components/common/Header';
import Background from '../components/common/Background';
import ScrollIocn from '../components/common/ScrollIocn';
import IntroSection from '../components/main/IntroSection';

const MainPage = () => {
  return (
    <>
      <Background>
        <Header />
        <ScrollIocn />
        <IntroSection />
      </Background>
    </>
  );
};

export default MainPage;
