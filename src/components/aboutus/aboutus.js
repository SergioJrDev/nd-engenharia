import React from 'react'
import {  Container, Row, Column, P, H2 } from 'StyledComponents'
import styled from 'styled-components'

const ContainerWrapper = styled(Container)`
    padding-top: 80px;
    padding-bottom: 80px;
`

export default class AboutUs extends React.Component {
    render() {
        return(
            <ContainerWrapper>
                <Row>
                    <Column>
                        <H2>Um pouco sobre nós</H2>
                    </Column>
                    <Column>
                         <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur urna erat, quis tempor ex fermentum sit amet. Nullam vel placerat orci. Ut at magna sed dui aliquet condimentum quis gravida felis. Donec vel urna at nulla fringilla maximus. Nulla lobortis luctus vehicula. Nulla facilisi. In at metus leo. Etiam cursus est a lorem lacinia tristique. Suspendisse imperdiet, mauris id porta viverra, mi enim egestas enim, in egestas mi orci in odio. Nunc sed euismod erat. Nam eget augue mauris. Proin vehicula dictum mi, feugiat mattis magna rutrum a. Quisque at massa dui.</P>
                        </Column>
                 </Row>
            </ContainerWrapper>
            )
    }
}
