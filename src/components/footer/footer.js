import React from 'react';
import { Container, Row, Column, P } from 'StyledComponents';
import styled from 'styled-components';

import MdLocalPhone from 'react-icons/lib/md/local-phone';
import MdEmail from 'react-icons/lib/md/email';
import MdLocationOn from 'react-icons/lib/md/location-on';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaCaretRight from 'react-icons/lib/fa/caret-right';

const FooterWrapper = styled.footer`
    background: #333;
    padding-top: 40px;
    overflow: hidden;
    padding-bottom: 40px;
    * {
      color: #fff;
    }
`;

const NavMenu = styled.nav`
  li {
    display: block;
    a {
      line-height: 30px;
    }
  }
`;

const ContactFooter = styled.ul`
  li {
    display: block;
    line-height: 30px;
    &:nth-child(2) {
      font-size: 14px;
    }
  }
`;

const IconStyle = {
  display: 'inline-block',
  marginRight: '8px',
};

const Footer = () =>
  <FooterWrapper>
    <Container>
      <Row>
        <Column md={30}>
          <h2>ND Engenharia</h2>
        </Column>
        <Column sm={50} md={25}>
          <NavMenu>
            <ul>
              <li><FaCaretRight style={IconStyle} /><a href="#">Início</a></li>
              <li><FaCaretRight style={IconStyle} /><a href="#">Sobre nós</a></li>
              <li><FaCaretRight style={IconStyle} /><a href="#">Nossos Serviços</a></li>
              <li><FaCaretRight style={IconStyle} /><a href="#">Galeria de Fotos</a></li>
              <li><FaCaretRight style={IconStyle} /><a href="#">Contato</a></li>
            </ul>
          </NavMenu>
        </Column>
        <Column sm={50} md={45}>
          <ContactFooter>
            <li><MdLocalPhone style={IconStyle} />11 2350-2860</li>
            <li><MdEmail style={IconStyle} />Contato@ngengenhariaambiental.com.br</li>
            <li><MdLocationOn style={IconStyle} />Av. Antônio Massa, 355,</li>
            <li><MdLocationOn style={IconStyle} />Sala 8, Centro - Poá/SP</li>
            <li><FaFacebook style={IconStyle} /><a href="#">Facebook.com.br/nd-engenharia</a></li>
          </ContactFooter>
        </Column>
      </Row>
    </Container>
  </FooterWrapper>

export default Footer;