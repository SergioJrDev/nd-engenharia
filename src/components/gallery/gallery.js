import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, H2, Row, Column, P } from 'StyledComponents'
import { lightDark } from 'Utils'
import Image1 from 'Assets/gallery/plantio.jpg';
import Image2 from 'Assets/gallery/agua.jpg';
import Image3 from 'Assets/gallery/cidade.jpg';
import Image4 from 'Assets/gallery/engenheiro.jpg';
import Image5 from 'Assets/gallery/cidadeII.jpg';
import Image6 from 'Assets/gallery/plantioII.jpg';

const GalleryImage = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 250px;
`;



export default class Gallery extends React.Component {
  render() {
    return (
      <ContainerWrapper>
        <H2>Galeria de fotos</H2>
        <Row alignItems={'normal'}>
          <Column sm={50} md={33}>
            <GalleryImage image={Image1} />
          </Column>
          <Column sm={50} md={33}>
            <GalleryImage image={Image2} />
          </Column>
          <Column sm={50} md={33}>
            <GalleryImage image={Image3} />
          </Column>
          <Column sm={50} md={33}>
            <GalleryImage image={Image4} />
          </Column>
          <Column sm={50} md={33}>
            <GalleryImage image={Image5} />
          </Column>
          <Column sm={50} md={33}>
            <GalleryImage image={Image6} />
          </Column>
        </Row>
      </ContainerWrapper>
        )
    }
}