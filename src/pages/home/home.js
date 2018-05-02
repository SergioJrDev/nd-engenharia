import React from 'react';
import { Header, OurServices, AboutUs, GoogleMaps, Contact, Footer, Gallery } from 'Components';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';

import Ambiental from './../../assets/background.jpg';

const SliderWrapper1 = styled.article`
  background-image: url(${Ambiental});
`;


export default class Home extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <div className='slider'>
          <Carousel>
            <SliderWrapper1>
              <div>
                <h1>ND Engenharia Ambiental</h1>
                <p>Desenvolvimento Sustentável</p>
              </div>
            </SliderWrapper1>
          </Carousel>
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
