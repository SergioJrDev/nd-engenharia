import React from 'react';
import { Header, OurServices, AboutUs, GoogleMaps, Contact, Footer, Gallery } from 'Components';

import styled from 'styled-components';

import Ambiental from './../../assets/empresa.jpg';

const SliderWrapper1 = styled.article`
  background-image: url(${Ambiental});
`;


export default class Home extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <div className='slider'>
          <SliderWrapper1>
            <div>
              <h1>ND Engenharia Ambiental</h1>
              <p>Desenvolvimento Sustentável</p>
            </div>
          </SliderWrapper1>
        </div>
        <AboutUs />
        <OurServices />
        <Gallery />
        <GoogleMaps />
        <Contact />
        <Footer />
      </div>
    );
  }
}
