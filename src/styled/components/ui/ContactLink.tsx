import styled from 'styled-components';
import { device } from '../../Responsive';
import { Colors } from '../base/Colors';

export const ContactLink = styled.a`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${Colors.DarkColor};

  ${device.tabletDesktop} {
    font-size: 2.8rem;
  }

  & i:first-child {
    margin-right: 2rem;
  }

  &:visited {
    color: ${Colors.DarkColor};
  }

  &:hover {
    color: ${Colors.MainColor};
  }
`;
