import styled from 'styled-components';
import { device } from '../../Responsive';
import { Colors } from '../base/Colors';

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin: 8rem 0;
  overflow-x: hidden;

  ${device.mobile} {
    padding: 2.8rem 0;
  }

  ${device.tablet} {
    padding: 8rem 0;
  }

  ${device.tabletDesktop} {
    margin: 12rem 0;
  }

  & span:first-child {
    font-size: 4.6rem;
    opacity: 0.4;

    ${device.tablet} {
      font-size: 8rem;
    }

    ${device.desktop} {
      font-size: 18rem;
    }
  }

  & a {
    font-size: 6.4rem;
    text-transform: uppercase;
    text-align: right;
    text-decoration: none;
    color: ${Colors.PrimaryTextColor};

    ${device.tablet} {
      font-size: 12rem;
    }

    ${device.desktop} {
      font-size: 28rem;
    }

    &:visited {
      color: ${Colors.PrimaryTextColor};
    }

    ${device.hoverOnPointerDevices} {
      &:hover {
        color: ${Colors.MainColor};

        & i {
          color: ${Colors.MainColor};
        }
      }
    }
  }
`;
