import React from 'react';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorPageTitle = styled.h1`
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
          <ErrorPageContainer>
              <ErrorPageTitle>Something went wrong</ErrorPageTitle>
          </ErrorPageContainer>
        </React.Fragment>
    );
};

export default Home;