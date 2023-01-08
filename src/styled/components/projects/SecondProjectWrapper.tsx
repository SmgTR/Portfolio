import styled from 'styled-components';
import { device } from '../../Responsive';

export const SecondProjectWrapper = styled.div`
  display: flex;
  // flex-direction: column;
  padding-top: 8rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  img {
    margin: 4rem 0;

    ${device.mobile} {
      max-width: 100%;
      max-height: 200px;
    }

    ${device.tablet} {
      max-width: 100%;
      max-height: 450px;
    }
  }

  ${device.desktop} {
    min-height: 90vh;
    padding-top: 20rem;
  }
`;
