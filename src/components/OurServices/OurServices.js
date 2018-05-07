import React from 'react';
import { Row, Column } from 'StyledComponents';
import styled from 'styled-components';
import { themeOpacity, dark, white, sm, lg } from 'Utils';
import KeyboardImg from 'Assets/keyboard.jpg';

import FaBeer from 'react-icons/lib/fa/beer';
import MdAcUnit from 'react-icons/lib/md/ac-unit';
import MdAccountBalance from 'react-icons/lib/md/account-balance';
import MdAddAlarm from 'react-icons/lib/md/add-alarm';
import MdAddLocation from 'react-icons/lib/md/add-location';
import MdAllInclusive from 'react-icons/lib/md/all-inclusive';
import MdAssessment from 'react-icons/lib/md/assessment';

const OurFeatures = styled(Column) `
	background: rgba(255, 255, 255, 0.7294117647058823);
	height: 350px;
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
	text-align: center;
	position: relative;
	div {
		margin-bottom: 15px;
	}
	@media screen and (min-width: ${sm}) {
	div {
		position: absolute;
		top: 100px;
		transition: all .4s ease;
		}
		p {
			margin-top: 140px;
			transition: all .4s ease;
			transform: scale(0);
			height: 0;
		}
		&:hover {
			div {
				top: 60px;
			}
			p {
				transform: scale(1);
				height: auto;
			}
		}
	}
`;

const IconStyle = {
	fontSize: '5rem',
	marginBottom: '15px',
};

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
`;

const OurFeatureWrapper = styled.div`
	background-image: url(${KeyboardImg});
    background-position: center;
    background-size: cover;
`;


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
						<p>Don’t have the time or the staff to deal with problems? With our Company, you can count on reliable service, performance and responsiveness from a dedicated team.</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAcUnit style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p>Don’t have the time or the staff to deal with problems? With our Company, you can count on reliable service, performance and responsiveness from a dedicated team.</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAccountBalance style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p>Don’t have the time or the staff to deal with problems? With our Company, you can count on reliable service, performance and responsiveness from a dedicated team.</p>
					</OurFeatures>
				</CustomRow>
				<CustomRow>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAddAlarm style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p>Don’t have the time or the staff to deal with problems? With our Company, you can count on reliable service, performance and responsiveness from a dedicated team.</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAddLocation style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p>Don’t have the time or the staff to deal with problems? With our Company, you can count on reliable service, performance and responsiveness from a dedicated team.</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAllInclusive style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p>Don’t have the time or the staff to deal with problems? With our Company, you can count on reliable service, performance and responsiveness from a dedicated team.</p>
					</OurFeatures>
					<OurFeatures sm={50} lg={25}>
						<div>
							<MdAssessment style={IconStyle} />
							<h2>Stability</h2>
						</div>
						<p>Don’t have the time or the staff to deal with problems? With our Company, you can count on reliable service, performance and responsiveness from a dedicated team.</p>
					</OurFeatures>
				</CustomRow>
			</OurFeatureWrapper>
		)
	}
}