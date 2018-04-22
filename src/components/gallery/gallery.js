import React from 'react';
import styled from 'styled-components';
import { ContainerWrapper, H2, Row, Column, HiddenImg } from 'StyledComponents';
import { GalleryImages } from 'Utils';

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
          {GalleryImages().map((image, key) => (
            <Column key={key} sm={50} md={33}>
              <GalleryImage image={image.img} />
              <HiddenImg src={image.img} alt={image.alt}/>
            </Column>
          ))}
        </Row>
      </ContainerWrapper>
    );
  }
}