import styled from 'styled-components';

export const BlobWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 600px;
  height: 600px;
  z-index: -1;
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
`;
