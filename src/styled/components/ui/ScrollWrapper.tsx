import styled from 'styled-components';
import { device } from '../../Responsive';
import { Colors } from '../base/Colors';

export const ScrollWrapper = styled.div`
  width: 1.8rem;
  height: 3.4rem;
  border: 2px solid ${Colors.PrimaryTextColor};
  border-radius: 12px;
  display: block;
  position: relative;
  overflow: hidden;
  margin: 2.8rem auto;

  ${device.tabletDesktop} {
    margin: 0;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
  }

  & span {
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: ${Colors.PrimaryTextColor};
  }
`;
