import styled from 'styled-components';
import { sm, md, lg, lightDark, theme } from './../utils';

export const Section = styled.section`
  background: #333;
  padding: 4rem 0;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;
  
export const FullScreen = styled(Section)`
  height: 100%;
`;

export const IntroTitle = styled.p`
  text-transform: uppercase;
  font-size: ${props => props.size ? props.size : '1.4rem'};
`;

export const Container = styled.div`
  /* padding: 0 15px; */
  max-width: 1200px;
  margin: 0 auto;
`;



export const ContainerWrapper = styled(Container)`
    padding-top: 80px;
    padding-bottom: 80px;
`;

export const ContainerMaxWith = styled(ContainerWrapper)`
    max-width: 700px;
`;

export const Row = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: wrap;
`;

export const Column = styled.div`
  width: ${props => props.xs ? props.xs+'%' : '100%'};
  padding: 15px;
  @media screen and (min-width: ${sm}) {
    width: ${props => props.sm ? props.sm+'%' : '100%'};
  }
  @media screen and (min-width: ${md}) {
    width: ${props => props.md ? props.md+'%' : props.sm ? props.sm+'%' : props.xs ? props.xs+'%' : '100%'};
  }
  @media screen and (min-width: ${lg}) {
    width: ${props => props.lg ? props.lg+'%' : props.md ? props.md+'%' : props.sm ? props.sm+'%' : props.xs ? props.xs+'%' : '100%'};
  }
`;

export const P = styled.p`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: ${lightDark};
`

export const  H2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  font-family: 'Dosis', sans-serif;
  color: ${lightDark};
  text-transform: uppercase;
  border-left: 4px solid #a5a5a5;
  padding-left: 10px;
`