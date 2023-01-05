import { FC, useEffect, useRef } from 'react';

import gsap from 'gsap';

import { BlobWrapper } from '@/src/styled/components/ui/BlobWrapper';

const Blob: FC = ({}) => {
  const blobRef = useRef<SVGPathElement>(null);
  const blob2Ref = useRef<SVGPathElement>(null);

  const firstBlob =
    'M432,301.5Q392,353,352.5,399Q313,445,243.5,464Q174,483,143,417Q112,351,103.5,300.5Q95,250,82,184.5Q69,119,136,111.5Q203,104,259,76.5Q315,49,378.5,79.5Q442,110,457,180Q472,250,432,301.5Z';
  const secondBlob =
    'M456,313Q423,376,366,403.5Q309,431,246.5,442Q184,453,131,414Q78,375,83.5,312.5Q89,250,79,184.5Q69,119,122,69.5Q175,20,243,41.5Q311,63,375,88Q439,113,464,181.5Q489,250,456,313Z';
  const thirdBlob =
    'M441,319.5Q442,389,384,436Q326,483,257.5,460Q189,437,149,394.5Q109,352,77.5,301Q46,250,73,195.5Q100,141,150.5,120Q201,99,258,74.5Q315,50,352,99.5Q389,149,414.5,199.5Q440,250,441,319.5Z';

  useEffect(() => {
    const blobTl = gsap.timeline({ defaults: { ease: 'power1.out' } });
    blobTl.to([blobRef.current, blob2Ref.current], { attr: { d: firstBlob }, duration: 1.5 });
    blobTl.to([blobRef.current, blob2Ref.current], { attr: { d: secondBlob }, duration: 3 });
    blobTl.to([blobRef.current, blob2Ref.current], { attr: { d: thirdBlob }, duration: 3 });
    blobTl.to([blobRef.current, blob2Ref.current], { attr: { d: firstBlob }, duration: 1.5 });
    blobTl.repeat(-1);
  }, []);

  return (
    <BlobWrapper>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
        <g transform="translate(155.2327651977539, -2.8463897705078125)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(255, 95, 109)' }}></stop>
              <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }}></stop>
            </linearGradient>
          </defs>

          <path
            ref={blobRef}
            className="blob"
            fill="url(#gradient)"
            d="M432,301.5Q392,353,352.5,399Q313,445,243.5,464Q174,483,143,417Q112,351,103.5,300.5Q95,250,82,184.5Q69,119,136,111.5Q203,104,259,76.5Q315,49,378.5,79.5Q442,110,457,180Q472,250,432,301.5Z'"
          ></path>
        </g>
      </svg>
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvgFilter"
      >
        <g transform="translate(155.2327651977539, -2.8463897705078125)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(255, 95, 109)' }}></stop>
              <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }}></stop>
            </linearGradient>
          </defs>

          <path
            ref={blob2Ref}
            className="blob"
            fill="url(#gradient)"
            d="M432,301.5Q392,353,352.5,399Q313,445,243.5,464Q174,483,143,417Q112,351,103.5,300.5Q95,250,82,184.5Q69,119,136,111.5Q203,104,259,76.5Q315,49,378.5,79.5Q442,110,457,180Q472,250,432,301.5Z"
          ></path>
        </g>
      </svg>
    </BlobWrapper>
  );
};

export default Blob;
