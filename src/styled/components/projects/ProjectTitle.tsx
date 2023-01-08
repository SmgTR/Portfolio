import styled from 'styled-components';
import { device } from '../../Responsive';

export const ProjectTitle = styled.h4`
  font-size: 4.2rem;
  text-align: center;

  ${device.tablet} {
    font-size: 4.8rem;
    text-align: left;
  }

  ${device.desktop} {
    font-size: 8.4rem;
    text-align: left;
  }
`;
