import React from 'react';
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


const Home = () => {
    return (
        <React.Fragment>
          <LandingContainer>
              <LandingTitle>Accedo Look-back Landing</LandingTitle>
          </LandingContainer>
        </React.Fragment>
    );
};

export default Home;