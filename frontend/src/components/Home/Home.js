import React from 'react';
import { useNavigate } from 'react-router-dom'

import AppLogo from '../../images/logo.svg';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

    return (
        <React.Fragment>
          <div className='homeContainer'>
              <img className='logo' src={AppLogo} alt="App Logo" />
              <div className='container'>
                <h1 className='homeTitle'>Accedo Look-back</h1>
                <h5 className='subTitle'>An insight on all the data collected by OTT</h5>
                <button className='actionButton' onClick={() => navigate('/uploadPage')}>Generate Your Data</button>
              </div>
          </div>
        </React.Fragment>
    );
};

export default Home;