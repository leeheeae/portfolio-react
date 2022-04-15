import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Background from './components/common/Background';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Background>
      <Helmet>
        <title>LEEHEEAE</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/proejct" element={<ProjectsPage />} />

        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Background>
  );
};

export default App;
