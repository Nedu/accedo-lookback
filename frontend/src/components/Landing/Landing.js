import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LandingTitle = styled.h1`
  margin: 0;
  font-family: Orbitron;
  font-size: 70px;
  font-style: italic;
  font-variant: small-caps;
  font-weight: 700;
  color: #00b9bc;
`;


const Landing = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/dashboard')
    }, 5000)
  }, [navigate])

  return (
      <React.Fragment>
        <LandingContainer>
            {/* TODO: Replace with animated logo when ready */}
            <LandingTitle>Accedo Look-back Landing Page</LandingTitle>
        </LandingContainer>
      </React.Fragment>
  );
};

export default Landing;