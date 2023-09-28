import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import AppLogo from '../../images/logo.svg';

const Logo = styled.img`
  width: 350px;
`;
const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
`;

const HomeTitle = styled.h1`
  margin: 0;
  font-family: Orbitron;
  font-size: 70px;
  font-style: italic;
  font-weight: 700;
  color: #00b9bc;
`;

const SubTitle = styled.h5`
  margin: 0;
  font-family: Orbitron;
  font-size: 70px;
  font-style: italic;
  font-weight: 700;
  color: #00b9bc;
`;

const ActionButton = styled.button`
  font-family: Orbitron;
  font-size: 70px;
  font-style: italic;
  font-variant: small-caps;
  font-weight: 700;
  color: #fff;
  background: #00b9bc;
  border: 1px solid #00b9bc;
  border-radius: 50px;
  padding: 30px;
  margin-top: 24px;
  cursor: pointer;
`;


const Home = () => {
  const navigate = useNavigate();

    return (
        <React.Fragment>
          <HomeContainer>
              <Logo src={AppLogo} alt="App Logo" />
              <Container>
                <HomeTitle>Accedo Look-back</HomeTitle>
                <SubTitle>An insight on all the data collected by OTT</SubTitle>
                <ActionButton onClick={() => navigate('/uploadPage')}>Generate Your Data</ActionButton>
              </Container>
          </HomeContainer>
        </React.Fragment>
    );
};

export default Home;