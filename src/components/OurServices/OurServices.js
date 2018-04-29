import React from 'react';
import { Row, Column } from 'StyledComponents';
import styled from 'styled-components';
import { themeOpacity, dark, white, sm, OurServices } from 'Utils';

// import FaBeer from 'react-icons/lib/fa/beer';
// import MdAcUnit from 'react-icons/lib/md/ac-unit';
// import MdAccountBalance from 'react-icons/lib/md/account-balance';
// import MdAddAlarm from 'react-icons/lib/md/add-alarm';
// import MdAddLocation from 'react-icons/lib/md/add-location';
// import MdAllInclusive from 'react-icons/lib/md/all-inclusive';
// import MdAssessment from 'react-icons/lib/md/assessment';

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
		top: 0px;
    margin: auto;
    height: 29px;
    bottom: 0;
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
				top: -80px;
			}
			p {
				transform: scale(1);
				height: auto;
			}
		}
	}
`;

// const IconStyle = {
//   fontSize: '4rem',
//   marginBottom: '15px',
// };

const CustomRow = styled(Row) `
	* {
		color: ${dark};
	}
  @media screen and (max-width: 767px) {
    & > div:nth-child(1),
    & > div:nth-child(3),
    & > div:nth-child(5),
    & > div:nth-child(7) {
      background: ${themeOpacity};
      * {
        color: ${white};
      }
    }

  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    & > div:nth-child(1),
    & > div:nth-child(8),
    & > div:nth-child(4),
    & > div:nth-child(5) {
      background: ${themeOpacity};
      * {
        color: ${white};
      }
    }
  }
  @media screen and (min-width: 1200px) {
    & > div:nth-child(1),
    & > div:nth-child(3),
    & > div:nth-child(6),
    & > div:nth-child(8) {
      background: ${themeOpacity};
      * {
        color: ${white};
      }
    }
  }
`;

const OurFeatureWrapper = styled.div`
	background-image: url('http://travellerlifestyle.com/wp-content/uploads/2015/03/keyboard-background-3.jpg');
    background-position: center;
    background-size: cover;
`;


export default class OurServicesSection extends React.Component {
  render() {
    return (
      <OurFeatureWrapper>
        <CustomRow>
          <OurFeatures sm={50} lg={25}>
            <h2>Nossos serviços</h2>
          </OurFeatures>
          {OurServices().map((service, index) => (
            <OurFeatures key={index} sm={50} lg={25}>
              <div>
                <h2>{service.name}</h2>
              </div>
              <p>{service.content}</p>
            </OurFeatures>
          ))}
        </CustomRow>
      </OurFeatureWrapper>
    );
  }
}
// {false ? <FaBeer style={IconStyle} /> : null }