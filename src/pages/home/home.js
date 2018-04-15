import React from 'react';
import { Header, OurServices, AboutUs, GoogleMaps, Contact, Footer, Gallery } from 'Components';
import Carousel from 'nuka-carousel';
import styled from 'styled-components'

import Ambiental from './../../assets/empresa.jpg'
import Engenheiros from './../../assets/hand.jpg';

const SliderWrapper1 = styled.article`
  background-image: url(${Ambiental});
`

const SliderWrapper2 = styled.article`
  background-image: url(${Engenheiros});
  background-position: center bottom !important;
`

export default class Home extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <div className='slider'>
          <Carousel>
            <SliderWrapper1>
              <div>
                <h1>NG Engenharia Ambiental 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </SliderWrapper1>
            <SliderWrapper2>
              <div>
                <h1>NG Engenharia Ambiental 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </SliderWrapper2>
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
