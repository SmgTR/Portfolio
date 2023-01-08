import { FC, useRef, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { MoreInfoWrapper } from '@/src/styled/components/projects/MoreInfoWrapper';

const MoreInfo: FC = () => {
  const moreRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const moreTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.more_info-page',
        start: '-120%',
        end: '-60%',
        scrub: true
      }
    });

    moreTl.fromTo(
      moreRef.current,
      { transform: 'translateX(-50%)', opacity: 0.1 },
      { transform: 'translateX(0)', opacity: 0.6 }
    );
    moreTl.fromTo(
      linkRef.current,
      { transform: 'translateX(50%)', opacity: 0.1 },
      { transform: 'translateX(0)', opacity: 1 },
      '<'
    );
  }, []);

  return (
    <MoreInfoWrapper className="more_info-page">
      <span ref={moreRef}>and more...</span>
      <a href="https://github.com/SmgTR" target="_blank" rel="noopener noreferrer" ref={linkRef}>
        Github <i className="fa-brands fa-github-alt"></i>
      </a>
    </MoreInfoWrapper>
  );
};

export default MoreInfo;
