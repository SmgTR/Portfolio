import styled from 'styled-components';
import { device } from '../../Responsive';

import { Colors } from '../base/Colors';

export const ProjectTech = styled.span`
  font-size: 1rem;
  display: block;
  margin-top: 1.4rem;
  opacity: 0.6;
  line-height: 1.4rem;
  text-align: center;

  ${device.tabletDesktop} {
    font-size: 2.2rem;
    text-align: left;
    line-height: 3.2rem;
  }

  & span.bracket {
    color: ${Colors.MainColor};
  }
`;
