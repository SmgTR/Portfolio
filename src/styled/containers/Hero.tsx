import styled from 'styled-components';

export const HeroWrapper = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 0 5%;

  & h3 {
    font-size: 8.4rem;

    & span {
      opacity: 0;
    }

    & span.text {
      position: relative;
      margin-left: 1.8rem;
    }

    & span.underline {
      content: '';
      position: absolute;
      left: 50px;
      bottom: 16px;
      width: 28px;
      height: 14px;
      transform: skew(-12deg);
      background: rgba(260, 60, 60, 0.8);
      z-index: -1;
      bottom: -4px;
    }
  }
`;

export const AboutText = styled.p`
  font-size: 2.2rem;
  max-width: 50%;
  margin-top: 4.2rem;
  line-height: 4.2rem;
  opacity: 0;
`;
