import styled from 'styled-components';
import { device } from '../../Responsive';

export const ContactSubTitle = styled.span`
  text-align: center;
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 0.4rem;

  ${device.tabletDesktop} {
    text-align: left;
    left: 10px;
    top: -15px;
    position: absolute;
    display: unset;
  }
`;
