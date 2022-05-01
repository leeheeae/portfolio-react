import React from 'react';
import Header from '../components/common/Header';
import ScrollIocn from '../components/common/ScrollIocn';
import IntroSection from '../components/main/IntroSection';
import AboutSection from '../components/main/AboutSection';
import SkillSection from '../components/main/SkillSection';
import ProjectSection from '../components/main/ProjectSection';
import ContactSection from '../components/main/ContactSection';
import Ball from '../components/common/Ball';

const MainPage = () => {
  return (
    <>
      <Header />
      <Ball />
      <ScrollIocn />
      <IntroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default MainPage;
