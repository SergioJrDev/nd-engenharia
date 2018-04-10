import React from 'react'
import { Container, Row, Column, P } from 'StyledComponents'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    background: #333;
    padding-top: 40px;
    padding-bottom: 40px;
    p {
        color: #fff;
        text-align: center;
    }
`

const Footer = () =>
<FooterWrapper>
    <Container>
        <Row>
            <Column>
                <P>Feito por Sérgio Junior</P>
            </Column>
        </Row>
    </Container>
</FooterWrapper>

export default Footer