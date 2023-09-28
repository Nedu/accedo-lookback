import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HomeTitle = styled.h1`
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
          <HomeContainer>
              <HomeTitle>Accedo Look-back</HomeTitle>
              <form>
                <input type={"file"} accept={".csv"} />
                <button>IMPORT CSV</button>
              </form>
          </HomeContainer>
        </React.Fragment>
    );
};

export default Home;