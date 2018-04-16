import React from 'react';
import styled from 'styled-components';
import { ContainerMaxWith, H2, Row, Column, P } from 'StyledComponents';
import { lightDark } from 'Utils';

const InputWrapper = styled.div`
    margin-bottom: 20px;
    label {
        display: block;
        padding-left: 12px;
        margin-bottom: 4px;
        color: ${lightDark};
    }
    input, textarea {
        width: 100%;
        border: 1px solid #d8d8d8;
        padding: 10px;
        border-radius: 4px;
    }
`

const ButtonSubmit = styled.button`
    background: #7b9faf;
    border: 0;
    padding: 10px 30px;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
`

const ColumnCenter = styled(Column) `

`

export default class Contact extends React.Component {
  render() {
    return (
      <ContainerMaxWith>
        <H2>Mande uma mensagem pra nós</H2>
        <Row alignItems={'normal'}>
          <Column>
            <form>
              <InputWrapper>
                <label>Nome:</label>
                <input type='text' id='nome' placeholder='Seu nome' />
              </InputWrapper>
              <InputWrapper>
                <label>Email:</label>
                <input type='email' id='email' placeholder='Seu e-mail' />
              </InputWrapper>
              <InputWrapper>
                <label>Telefone:</label>
                <input type='text' id='telefone' placeholder='Seu telefone' />
              </InputWrapper>
              <InputWrapper>
                <label>Mensagem:</label>
                <textarea rows="4" cols="50" placeholder='Sua Mensagem'></textarea>
              </InputWrapper>
              <ButtonSubmit type='submit'>Enviar</ButtonSubmit>
            </form>
          </Column>
        </Row>
      </ContainerMaxWith>
    )
  }
}