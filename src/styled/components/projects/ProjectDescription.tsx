import styled from 'styled-components';
import { device } from '../../Responsive';

export const ProjectDescription = styled.p`
  font-size: 2.4rem;
  margin-top: 3.2rem;
  line-height: 4.4rem;
  text-align: center;

  ${device.tablet} {
    font-size: 3.8rem;
    text-align: left;
    line-height: 5.4rem;
  }

  ${device.desktop} {
    font-size: 5.2rem;
    line-height: 6.4rem;
    text-align: left;
  }

  & .description_item {
    opacity: 0;
  }
`;
