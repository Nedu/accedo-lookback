import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import ErrorPage from './components/ErrorPage/ErrorPage';
import UploadPage from './components/UploadPage/UploadPage'
import SlideShow from './components/SlideShow/SlideShow';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/uploadPage" element={<UploadPage />} />
          <Route exact path="/slideshow" element={<SlideShow />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
