import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import ErrorPage from './components/ErrorPage/ErrorPage';

import './App.css';

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
