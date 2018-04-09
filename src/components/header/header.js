import React from 'react';
import styled from 'styled-components';

class HeaderClass extends React.Component {
  render() {
    const Header = styled.header`
      padding: 30px 0;
      box-shadow: 1px 1px 1px #ccc;
      & {
        nav a {
          padding: 5px;
          border-radius: 3px;
        }
      }
    `;

    return (
      <Header>
        <div className='container db flex-sm a-center space-between'>
          <a href='#'>Nd Engenharia Ambiental</a>
          <nav>
            <ul>
              <li><a href='#' className='actived'>Home</a></li>
              <li><a href='#'>Sobre nós</a></li>
              <li><a href='#'>Projetos</a></li>
              <li><a href='#'>O que fazemos</a></li>
              <li><a href='#'>Contato</a></li>
            </ul>
          </nav>
        </div>
      </Header>
    )
  }
}

export default HeaderClass