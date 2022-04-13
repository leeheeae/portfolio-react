import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>LEEHEEAE</title>
      </Helmet>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
