import React from 'react';
import styled from 'styled-components';
import { Intro, Resume } from './../../sections';

const Screen = styled.div`
  height: 100%;
`;

class Home extends React.Component {

  render() {
    return (
      <Screen>
        <Intro />
        <Resume />
      </Screen>
    );
  }
}


export default Home;