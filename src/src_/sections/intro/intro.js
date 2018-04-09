import React from 'react';
import styled from 'styled-components';
import { FullScreen, IntroTitle, Container } from 'Styled';
import ImageBackground from 'Assets/homeless';
import GasLogo from 'Assets/logo-gas';

const Centered = styled(FullScreen)`
  text-align: center;
  background-image: url(${ImageBackground})
`;

export default class Intro extends React.Component {
  render() {
    return(
      <Centered>
        <Container>
          <img src={GasLogo} />
          <IntroTitle className='tl'>Missão: Doar dignidade, materializar esperança.</IntroTitle>
        </Container>
      </Centered>
    );
  }
}
