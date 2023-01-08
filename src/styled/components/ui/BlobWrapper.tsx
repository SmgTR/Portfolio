import styled from 'styled-components';
import { device } from '../../Responsive';

export const BlobWrapper = styled.div`
  display: none;

  ${device.desktop} {
    position: absolute;
    right: 0;
    top: 0;
    width: 600px;
    height: 600px;
    z-index: -1;
    display: block;

    & svg {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.6);
    }

    & #blobSvgFilter {
      filter: blur(50px);
    }
  }
`;
