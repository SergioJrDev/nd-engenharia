import React from 'react'
import styled from 'styled-components'

const IframeWrapper = styled.iframe`
    width: 100%;
`

const GoogleMaps = () => <div>
<IframeWrapper src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.371221970207!2d-46.34229359585976!3d-23.519147113103067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7b1f231751e5%3A0x9260a6bb4f639d85!2sAv.+Ant%C3%B4nio+Massa%2C+355+-+Centro%2C+Po%C3%A1+-+SP!5e0!3m2!1spt-BR!2sbr!4v1523315609309" height="450" frameBorder="0" allowFullScreen></IframeWrapper>
</div>

export default GoogleMaps