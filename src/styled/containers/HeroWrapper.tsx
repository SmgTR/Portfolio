import styled from 'styled-components';
import { device } from '../Responsive';

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  padding: 0 5%;
  margin-bottom: 4rem;

  ${device.tabletDesktop} {
    justify-content: center;
    margin: 0;
    min-height: 90vh;
  }

  & h3 {
    font-size: 6.2rem;
    ${device.desktop} {
      font-size: 8.4rem;
      margin-top: 0;
    }

    & span {
      opacity: 0;
    }

    & span.text {
      position: relative;
      margin-left: 1.8rem;
    }
  }
`;

export const AboutText = styled.p`
  font-size: 2.2rem;
  width: 100%;
  margin-top: 4.2rem;
  line-height: 4.2rem;
  opacity: 0;
  text-align: justify;

  ${device.desktop} {
    max-width: 50%;
    text-align: left;
  }
`;
