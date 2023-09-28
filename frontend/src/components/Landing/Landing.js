import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';

import './landing.css';

const Landing = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/dashboard')
    }, 4000)
  }, [navigate])

  return (
      <React.Fragment>
        <div className='landingContainer'>
            {/* TODO: Replace with animated logo when ready */}
            <Player
              autoplay
              loop
              src={require("../../images/lottie/lookbacklogo.json")}
              style={{ width: '800px' }}
            />
        </div>
      </React.Fragment>
  );
};

export default Landing;