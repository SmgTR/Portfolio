import styled from 'styled-components';
import { device } from '../../Responsive';
import { Colors } from '../base/Colors';

export const SectionTitle = styled.h3<{ dark?: boolean; smallMargin?: boolean }>`
  font-size: 6rem;
  ${device.desktop} {
    font-size: 10rem;
  }
  text-transform: uppercase;
  margin-bottom: ${(props) => (props.smallMargin ? '4.8rem' : '8rem')};
  position: relative;
  text-align: center;
  color: ${(props) => (props.dark ? Colors.DarkColor : Colors.PrimaryTextColor)};
`;
