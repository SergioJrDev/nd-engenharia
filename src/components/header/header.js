import React from 'react';
import styled from 'styled-components';
import LogoImage from './../../assets/logo.jpeg';
import MdMenu from 'react-icons/lib/md/menu';
import { sm } from 'Utils';

const Header = styled.header`
  padding: 30px 0;
  box-shadow: 1px 1px 1px #ccc;
  & {
    nav a {
      padding: 5px;
      border-radius: 3px;
      display: inline-block;
    }
    li {
      display: block;
      text-align: center;
      @media screen and (min-width: ${sm}) {
        display: inline-block;
      }
    }
  }
`;

const Logo = styled.a`
  font-size: 0;
  background-image: url('${LogoImage}');
  width: 240px;
  height: 46px;
  background-size: cover;
  background-position: center;
  display: block;
  margin: auto;
  margin-bottom: 15px;
  @media screen and (min-width: ${sm}) {
    margin: 0;
  }
`;

const MenuIcon = styled.button`
  position: absolute;
  font-size: 30px;
  right: 5px;
  top: 40px;
  background: none;
  border: 0;
  cursor: pointer;
`;

class HeaderClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      isMobile: window.innerWidth < 768,
    };
  }

  handleOpenMenu = () => this.setState({openMenu: !this.state.openMenu})

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({isMobile: window.innerWidth < 768}))
  }

  render() {
    const { openMenu, isMobile } = this.state;
    return (
      <Header>
        <div className='container db flex-sm a-center space-between'>
          <Logo href='#'>Nd Engenharia Ambiental</Logo>
          {isMobile && <MenuIcon aria-label='Abrir menu' onClick={this.handleOpenMenu}><MdMenu /></MenuIcon>}
          {isMobile && openMenu && <nav>
            <ul>
              <li><a href='#home' className='actived'>Home</a></li>
              <li><a href='#sobre-nos'>Sobre nós</a></li>
              <li><a href='#projetos'>Projetos</a></li>
              <li><a href='#servicos'>O que fazemos</a></li>
              <li><a href='#contato'>Contato</a></li>
            </ul>
          </nav>}

          {!isMobile && <nav>
            <ul>
              <li><a href='#home' className='actived'>Home</a></li>
              <li><a href='#sobre-nos'>Sobre nós</a></li>
              <li><a href='#projetos'>Projetos</a></li>
              <li><a href='#servicos'>O que fazemos</a></li>
              <li><a href='#contato'>Contato</a></li>
            </ul>
          </nav>}
        </div>
      </Header>
    );
  }
}

export default HeaderClass;