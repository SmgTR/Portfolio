import styled from 'styled-components';
import { Colors } from '../base/Colors';

export const ScrollWrapper = styled.div`
  width: 1.8rem;
  height: 3.4rem;
  border: 2px solid ${Colors.PrimaryTextColor};
  border-radius: 12px;
  position: absolute;
  display: block;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

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
