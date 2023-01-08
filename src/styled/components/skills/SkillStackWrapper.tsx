import styled from 'styled-components';

import { device } from '../../Responsive';

export const SkillStackWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  ${device.mobile} {
    & img {
      max-width: 80px;
      max-height: 80px;
    }
  }

  ${device.desktop} {
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
  }
`;
