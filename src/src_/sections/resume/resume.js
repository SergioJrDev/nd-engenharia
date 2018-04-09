import React from 'react';
import styled from 'styled-components';
import { Section, IntroTitle, Container, Row, Column } from './../../styled-components';
import { dark } from './../../utils';

const ResumeSection = styled(Section)`
  background: ${dark};
`;

const P = styled.p`

`;


export default class Resume extends React.Component {
  render() {
    return(
      <ResumeSection>
        <Container>
          <Row>
            <Column sm='40'>
              <IntroTitle size='1.6rem' className='tl'>AJUDE QUEM PRECISA COM AMOR!</IntroTitle>
              <P>O Grupo de Atitude Social(GAS) foi criado com o objetivo de trazer humanidade e esperança àqueles que vivem no limite da situação social, a rua. Somos independentes, sem vínculo governamental ou com a iniciativa privada, portanto toda ajuda será bem-vinda!</P>
            </Column>
            <Column sm='60'>
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/CLEf1V0JHAo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Column>
          </Row>
        </Container>
      </ResumeSection>
    );
  }
}
