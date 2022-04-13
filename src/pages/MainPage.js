import React from 'react';
import Header from '../components/common/Header';
import Background from '../components/common/Background';
import ScrollIocn from '../components/common/ScrollIocn';
import IntroSection from '../components/main/IntroSection';
import AboutSection from '../components/main/AboutSection';
import SkillSection from '../components/main/SkillSection';
import ProjectSection from '../components/main/ProjectSection';
import ContactSection from '../components/main/ContactSection';

const MainPage = () => {
  return (
    <>
      <Background>
        <Header />
        <ScrollIocn />
        <IntroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </Background>
    </>
  );
};

export default MainPage;
