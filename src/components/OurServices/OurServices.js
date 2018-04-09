import React from 'react';
import { Row, Column } from 'StyledComponents'
import styled from 'styled-components';
import { themeOpacity, dark, white, sm, lg } from 'Utils'

import FaBeer from 'react-icons/lib/fa/beer';
import MdAcUnit from 'react-icons/lib/md/ac-unit';
import MdAccountBalance from 'react-icons/lib/md/account-balance'
import MdAddAlarm from 'react-icons/lib/md/add-alarm'
import MdAddLocation from 'react-icons/lib/md/add-location'
import MdAllInclusive from 'react-icons/lib/md/all-inclusive'
import MdAssessment from 'react-icons/lib/md/assessment'

const OurFeatures = styled(Column) `
	background: rgba(255, 255, 255, 0.7294117647058823);
	height: 310px;
    display: flex;
    align-items: center;
    justify-content: center;
	text-align: center;
	&:hover {
		div {
			display: none;
		}
		p {
			display: block !important;
		}
	}
`

const IconStyle = {
	fontSize: '3rem',
}

const CustomRow = styled(Row) `
	* {
		color: ${dark};
	}
	&:nth-child(1) {
		& > div:nth-child(odd) {
			background: ${themeOpacity};
			* {
				color: ${white};
			}
		}
		@media screen and (min-width: ${sm}) {
			& > div:nth-child(3n + 1) {
				background: ${themeOpacity};
				* {
					color: ${white};
				}
			}
			& > div:nth-child(3) {
				background: rgba(255, 255, 255, 0.7294117647058823);
				* {
					color: ${dark};
				}
			}
		}

		@media screen and (min-width: ${lg}) {
			& > div:nth-child(odd) {
				background: ${themeOpacity};
				* {
					color: ${white};
				}
			}
			& > div:nth-child(even) {
				background: rgba(255, 255, 255, 0.7294117647058823);
				* {
					color: ${dark};
				}
			}
		}
	}



	&:nth-child(2) {
		& > div:nth-child(even) {
			background: ${themeOpacity};
			* {
				color: ${white};
			}
		}
		@media screen and (min-width: ${sm}) {
			& > div:nth-child(3n + 1) {
				background: ${themeOpacity};
				* {
					color: ${white};
				}
			}
			& > div:nth-child(3) {
				background: rgba(255, 255, 255, 0.7294117647058823);
				* {
					color: ${dark};
				}
			}
			& > div:nth-child(2) {
				background: rgba(255, 255, 255, 0.7294117647058823);
				* {
					color: ${dark};
				}
			}
		}

		@media screen and (min-width: ${lg}) {
			& > div:nth-child(even) {
				background: ${themeOpacity};
				* {
					color: ${white};
				}
			}
			& > div:nth-child(odd) {
				background: rgba(255, 255, 255, 0.7294117647058823);
				* {
					color: ${dark};
				}
			}
		}
	}
`

const OurFeatureWrapper = styled.div`
	background-image: url('http://travellerlifestyle.com/wp-content/uploads/2015/03/keyboard-background-3.jpg');
    background-position: center;
    background-size: cover;
`


export default class OurServices extends React.Component {
	render() {
		return (
			<OurFeatureWrapper>
				<CustomRow>
					<OurFeatures sm={50} lg={25}>
						<h2>Nossos serviços</h2>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<FaBeer style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p style={{ display: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a nisl vestibulum pretium sit amet et lacus. Fusce pulvinar arcu vitae ipsum venenatis mollis. Pellentesque sit amet tincidunt elit</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAcUnit style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p style={{ display: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a nisl vestibulum pretium sit amet et lacus. Fusce pulvinar arcu vitae ipsum venenatis mollis. Pellentesque sit amet tincidunt elit</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAccountBalance style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p style={{ display: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a nisl vestibulum pretium sit amet et lacus. Fusce pulvinar arcu vitae ipsum venenatis mollis. Pellentesque sit amet tincidunt elit</p>
					</OurFeatures>
				</CustomRow>
				<CustomRow>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAddAlarm style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p style={{ display: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a nisl vestibulum pretium sit amet et lacus. Fusce pulvinar arcu vitae ipsum venenatis mollis. Pellentesque sit amet tincidunt elit</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAddLocation style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p style={{ display: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a nisl vestibulum pretium sit amet et lacus. Fusce pulvinar arcu vitae ipsum venenatis mollis. Pellentesque sit amet tincidunt elit</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAllInclusive style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p style={{ display: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a nisl vestibulum pretium sit amet et lacus. Fusce pulvinar arcu vitae ipsum venenatis mollis. Pellentesque sit amet tincidunt elit</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAssessment style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p style={{ display: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a nisl vestibulum pretium sit amet et lacus. Fusce pulvinar arcu vitae ipsum venenatis mollis. Pellentesque sit amet tincidunt elit</p>
					</OurFeatures>
				</CustomRow>
			</OurFeatureWrapper>
		)
	}
}