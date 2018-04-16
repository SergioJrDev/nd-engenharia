import React from 'react';
import { Row, Column, P, H2, ContainerMaxWith } from 'StyledComponents';

export default class AboutUs extends React.Component {
  render() {
    return (
      <ContainerMaxWith>
        <Row alignItems='normal'>
          <Column>
            <H2>Um pouco sobre nós</H2>
          </Column>
          <Column>
            <P>A ND Engenharia Ambiental tem um único objetivo: a eficiência no atendimento ao cliente. Para isso, investimentos maciços em capacitação profissional. A filosofia de trabalho se baseia em qualidade, segurança e a melhor relação custo–benefício para o cliente. Após estudos e análises do mercado no segmento de soluções ambientais, constatamos que a segurança e qualidade são os principais fatores, tornando-se exigências primordiais dos clientes que utilizam tais serviços.</P>
          </Column>
          <Column>
            <P>Baseando-se nestes princípios a empresa ND Engenharia Ambiental foi criada, para proporcionar aos nossos clientes o que é fundamental no ramo. Segurança e qualidade. A ND Engenharia Ambiental acredita reunir condições para atender as necessidades de sua empresa e a certeza de que formaremos muito mais que uma relação de negócios, mas uma parceria de sucesso.</P>
          </Column>
        </Row>
      </ContainerMaxWith>
    )
  }
}
