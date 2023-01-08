import styled from 'styled-components';
import { device } from '../Responsive';

export const SkillsContainerWrapper = styled.section`
  ${device.desktop} {
    padding: 15rem 5%;
  }

  padding: 0 5%;
  min-height: 90vh;

  & h4 {
    ${device.desktop} {
      font-size: 10rem;
    }
    font-size: 6rem;
    text-align: center;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }
`;
